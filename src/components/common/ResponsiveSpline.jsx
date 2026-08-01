import React, { Suspense, lazy, useEffect, useState } from 'react';

const Spline = lazy(() => import('@splinetool/react-spline'));

export default function ResponsiveSpline({ scene, fallbackImage, desktopImage, alt, className, imageClassName = 'responsive-spline-image' }) {
  const [showSpline, setShowSpline] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(min-width: 768px)');

    const syncSpline = () => {
      setShowSpline(media.matches && Boolean(scene));
    };

    syncSpline();
    media.addEventListener('change', syncSpline);

    return () => media.removeEventListener('change', syncSpline);
  }, [scene]);

  return (
    <div className={className}>
      {showSpline ? (
        <Suspense fallback={<StaticSplineImage src={fallbackImage} desktopSrc={desktopImage} alt={alt} className={imageClassName} />}>
          <Spline scene={scene} />
        </Suspense>
      ) : (
        <StaticSplineImage src={fallbackImage} desktopSrc={desktopImage} alt={alt} className={imageClassName} />
      )}
    </div>
  );
}

function StaticSplineImage({ src, desktopSrc, alt, className }) {
  return (
    <picture>
      {desktopSrc && <source media="(min-width: 900px)" srcSet={desktopSrc} />}
      <img className={className} src={src} alt={alt} loading="eager" decoding="async" />
    </picture>
  );
}
