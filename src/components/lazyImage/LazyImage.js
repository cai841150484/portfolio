import {useState, useRef, useEffect} from "react";
import "./LazyImage.scss";
import {SmallSpinner} from "../loading/LoadingSpinner";
import placeholderImage from "../../assets/images/placeholder-350x200.svg?url";

const LazyImage = ({
  src,
  alt,
  className = "",
  placeholder = placeholderImage,
  // keep only PNG/JPG display per request; leave props for future but unused
  webpSrc = null,
  avifSrc = null,
  srcSet = null,
  sizes = undefined,
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

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(true);
  };

  const showPlaceholder = hasError || !isInView;

  return (
    <div
      ref={imgRef}
      className={`lazy-image-container ${className}`}
      {...props}
    >
      {showPlaceholder ? (
        <img
          src={placeholder}
          alt={alt}
          className={`lazy-image loading ${hasError ? "error" : ""}`}
          loading={loading}
        />
      ) : (
        <picture>
          {avifSrc && <source srcSet={avifSrc} type="image/avif" />}
          {webpSrc && <source srcSet={webpSrc} type="image/webp" />}
          <img
            src={src}
            srcSet={undefined}
            sizes={undefined}
            alt={alt}
            className={`lazy-image ${isLoaded ? "loaded" : "loading"} ${
              hasError ? "error" : ""
            }`}
            onLoad={handleLoad}
            onError={handleError}
            loading={loading}
          />
        </picture>
      )}

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
