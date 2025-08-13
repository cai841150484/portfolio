import React from "react";
import "./LoadingSpinner.scss";

const LoadingSpinner = ({
  size = "medium",
  color = "primary",
  text = "Loading...",
  showText = true,
  fullScreen = false,
  overlay = false,
  className = ""
}) => {
  const spinnerClasses = [
    "loading-spinner",
    `loading-spinner--${size}`,
    `loading-spinner--${color}`,
    fullScreen && "loading-spinner--fullscreen",
    overlay && "loading-spinner--overlay",
    className
  ].filter(Boolean).join(" ");

  const SpinnerContent = () => (
    <div className="loading-spinner__container">
      <div 
        className="loading-spinner__circle"
        role="status"
        aria-label={text}
      >
        <div className="loading-spinner__inner"></div>
      </div>
      {showText && (
        <div className="loading-spinner__text" aria-live="polite">
          {text}
        </div>
      )}
    </div>
  );

  if (fullScreen || overlay) {
    return (
      <div className={spinnerClasses}>
        <SpinnerContent />
      </div>
    );
  }

  return (
    <div className={spinnerClasses}>
      <SpinnerContent />
    </div>
  );
};

// 预设的加载组件变体
export const SmallSpinner = (props) => (
  <LoadingSpinner size="small" showText={false} {...props} />
);

export const LargeSpinner = (props) => (
  <LoadingSpinner size="large" {...props} />
);

export const FullScreenLoader = (props) => (
  <LoadingSpinner fullScreen showText {...props} />
);

export const OverlayLoader = (props) => (
  <LoadingSpinner overlay showText {...props} />
);

// 骨架屏组件
export const SkeletonLoader = ({
  width = "100%",
  height = "20px",
  borderRadius = "4px",
  className = ""
}) => (
  <div 
    className={`skeleton-loader ${className}`}
    style={{
      width,
      height,
      borderRadius
    }}
    aria-label="Loading content"
  />
);

// 卡片骨架屏
export const CardSkeleton = () => (
  <div className="card-skeleton">
    <SkeletonLoader height="200px" borderRadius="8px" className="card-skeleton__image" />
    <div className="card-skeleton__content">
      <SkeletonLoader height="24px" width="80%" className="card-skeleton__title" />
      <SkeletonLoader height="16px" width="100%" className="card-skeleton__line" />
      <SkeletonLoader height="16px" width="90%" className="card-skeleton__line" />
      <SkeletonLoader height="16px" width="60%" className="card-skeleton__line" />
    </div>
  </div>
);

// 项目卡片骨架屏
export const ProjectCardSkeleton = () => (
  <div className="project-card-skeleton">
    <SkeletonLoader height="220px" borderRadius="8px" className="project-skeleton__image" />
    <div className="project-skeleton__content">
      <SkeletonLoader height="20px" width="70%" className="project-skeleton__category" />
      <SkeletonLoader height="28px" width="90%" className="project-skeleton__title" />
      <SkeletonLoader height="16px" width="100%" className="project-skeleton__desc" />
      <SkeletonLoader height="16px" width="85%" className="project-skeleton__desc" />
      <div className="project-skeleton__meta">
        <SkeletonLoader height="14px" width="40%" className="project-skeleton__tools" />
        <SkeletonLoader height="14px" width="30%" className="project-skeleton__duration" />
      </div>
    </div>
  </div>
);

// 加载状态管理Hook
export const useLoadingState = (initialState = false) => {
  const [isLoading, setIsLoading] = React.useState(initialState);
  const [error, setError] = React.useState(null);

  const startLoading = () => {
    setIsLoading(true);
    setError(null);
  };

  const stopLoading = () => {
    setIsLoading(false);
  };

  const setLoadingError = (errorMessage) => {
    setIsLoading(false);
    setError(errorMessage);
  };

  return {
    isLoading,
    error,
    startLoading,
    stopLoading,
    setLoadingError
  };
};

export default LoadingSpinner;
