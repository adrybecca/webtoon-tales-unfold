import { useEffect, useState } from 'react';
import { pipeline, env } from '@huggingface/transformers';

// Configure transformers.js to always download models
env.allowLocalModels = false;
env.useBrowserCache = false;

const MAX_IMAGE_DIMENSION = 1024;

interface LogoWithBackgroundProps {
  className?: string;
  alt?: string;
}

function resizeImageIfNeeded(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, image: HTMLImageElement) {
  let width = image.naturalWidth;
  let height = image.naturalHeight;

  if (width > MAX_IMAGE_DIMENSION || height > MAX_IMAGE_DIMENSION) {
    if (width > height) {
      height = Math.round((height * MAX_IMAGE_DIMENSION) / width);
      width = MAX_IMAGE_DIMENSION;
    } else {
      width = Math.round((width * MAX_IMAGE_DIMENSION) / height);
      height = MAX_IMAGE_DIMENSION;
    }

    canvas.width = width;
    canvas.height = height;
    ctx.drawImage(image, 0, 0, width, height);
    return true;
  }

  canvas.width = width;
  canvas.height = height;
  ctx.drawImage(image, 0, 0);
  return false;
}

const removeBackground = async (imageElement: HTMLImageElement): Promise<string> => {
  try {
    console.log('Starting background removal process...');
    const segmenter = await pipeline('image-segmentation', 'Xenova/segformer-b0-finetuned-ade-512-512', {
      device: 'webgpu',
    });
    
    // Convert HTMLImageElement to canvas
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    if (!ctx) throw new Error('Could not get canvas context');
    
    // Resize image if needed and draw it to canvas
    const wasResized = resizeImageIfNeeded(canvas, ctx, imageElement);
    console.log(`Image ${wasResized ? 'was' : 'was not'} resized. Final dimensions: ${canvas.width}x${canvas.height}`);
    
    // Get image data as base64
    const imageData = canvas.toDataURL('image/jpeg', 0.8);
    console.log('Image converted to base64');
    
    // Process the image with the segmentation model
    console.log('Processing with segmentation model...');
    const result = await segmenter(imageData);
    
    console.log('Segmentation result:', result);
    
    if (!result || !Array.isArray(result) || result.length === 0 || !result[0].mask) {
      throw new Error('Invalid segmentation result');
    }
    
    // Create a new canvas for the masked image
    const outputCanvas = document.createElement('canvas');
    outputCanvas.width = canvas.width;
    outputCanvas.height = canvas.height;
    const outputCtx = outputCanvas.getContext('2d');
    
    if (!outputCtx) throw new Error('Could not get output canvas context');
    
    // Draw original image
    outputCtx.drawImage(canvas, 0, 0);
    
    // Apply the mask to remove white/light backgrounds more aggressively
    const outputImageData = outputCtx.getImageData(0, 0, outputCanvas.width, outputCanvas.height);
    const data = outputImageData.data;
    
    // More aggressive background removal for white/light backgrounds
    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      
      // Check if pixel is close to white/light colors
      const isLight = (r > 200 && g > 200 && b > 200) || 
                      (r + g + b > 600);
      
      if (isLight) {
        data[i + 3] = 0; // Make transparent
      }
    }
    
    // Apply segmentation mask for additional refinement
    for (let i = 0; i < result[0].mask.data.length; i++) {
      const maskValue = result[0].mask.data[i];
      // Keep subject, remove background
      if (maskValue > 0.5) {
        const pixelIndex = i * 4 + 3;
        if (pixelIndex < data.length) {
          data[pixelIndex] = Math.min(data[pixelIndex], Math.round((1 - maskValue) * 255));
        }
      }
    }
    
    outputCtx.putImageData(outputImageData, 0, 0);
    console.log('Background removal completed successfully');
    
    // Convert canvas to data URL
    return outputCanvas.toDataURL('image/png', 1.0);
  } catch (error) {
    console.error('Error removing background:', error);
    throw error;
  }
};

const loadImage = (src: string): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
    img.crossOrigin = 'anonymous';
  });
};

export const LogoWithBackground = ({ className = "", alt = "Mythic Tales Logo" }: LogoWithBackgroundProps) => {
  const [processedImageSrc, setProcessedImageSrc] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const processLogo = async () => {
      try {
        setIsProcessing(true);
        console.log('Loading logo image...');
        
        const imageElement = await loadImage('/lovable-uploads/eec5772d-1f7d-4af4-a6c1-081d9e3d5bb0.png');
        console.log('Logo image loaded successfully');
        
        const processedImage = await removeBackground(imageElement);
        setProcessedImageSrc(processedImage);
        console.log('Background removal completed');
      } catch (err) {
        console.error('Error processing logo:', err);
        setError('Error processing logo');
        // Fallback to original image if processing fails
        setProcessedImageSrc('/lovable-uploads/eec5772d-1f7d-4af4-a6c1-081d9e3d5bb0.png');
      } finally {
        setIsProcessing(false);
      }
    };

    processLogo();
  }, []);

  if (isProcessing) {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-400"></div>
      </div>
    );
  }

  if (error && !processedImageSrc) {
    return (
      <div className={`text-pink-400 ${className}`}>
        <span className="text-2xl font-bold">MYTHIC TALES</span>
      </div>
    );
  }

  return (
    <img 
      src={processedImageSrc} 
      alt={alt}
      className={`${className} drop-shadow-lg`}
      style={{ filter: 'drop-shadow(0 0 10px rgba(219, 39, 119, 0.3))' }}
    />
  );
};
