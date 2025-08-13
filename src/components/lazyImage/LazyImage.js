import React, {useState, useRef, useEffect} from "react";
import "./LazyImage.scss";
import {SmallSpinner} from "../loading/LoadingSpinner";

const LazyImage = ({
  src,
  alt,
  className = "",
  placeholder = "/api/placeholder/350/200",
  webpSrc = null,
  loading = "lazy",
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px"
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Check WebP support
  const supportsWebP = () => {
    const canvas = document.createElement("canvas");
    canvas.width = 1;
    canvas.height = 1;
    return canvas.toDataURL("image/webp").indexOf("data:image/webp") === 0;
  };

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(true);
  };

  // Determine which image source to use
  const getImageSrc = () => {
    if (hasError) return placeholder;
    if (!isInView) return placeholder;
    
    // Use WebP if supported and available
    if (webpSrc && supportsWebP()) {
      return webpSrc;
    }
    
    return src;
  };

  return (
    <div 
      ref={imgRef}
      className={`lazy-image-container ${className}`}
      {...props}
    >
      <img
        src={getImageSrc()}
        alt={alt}
        className={`lazy-image ${isLoaded ? "loaded" : "loading"} ${
          hasError ? "error" : ""
        }`}
        onLoad={handleLoad}
        onError={handleError}
        loading={loading}
      />
      {!isLoaded && !hasError && (
        <div className="lazy-image-placeholder">
          <SmallSpinner color="primary" text="Loading image..." />
        </div>
      )}
      {hasError && (
        <div className="lazy-image-error">
          <span>图片加载失败</span>
        </div>
      )}
    </div>
  );
};

export default LazyImage;
