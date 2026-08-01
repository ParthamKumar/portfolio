import React, { Suspense, lazy, useEffect, useState } from 'react';

const Spline = lazy(() => import('@splinetool/react-spline'));

export default function ResponsiveSpline({ scene, fallbackImage, alt, className, imageClassName = 'responsive-spline-image' }) {
  const [canRenderSpline, setCanRenderSpline] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(min-width: 900px) and (pointer: fine)');
    let timeoutId;
    let idleId;

    const enableSpline = () => {
      if (!media.matches) {
        setCanRenderSpline(false);
        return;
      }

      const load = () => setCanRenderSpline(true);
      if ('requestIdleCallback' in window) {
        idleId = window.requestIdleCallback(load, { timeout: 1800 });
      } else {
        timeoutId = window.setTimeout(load, 900);
      }
    };

    enableSpline();
    media.addEventListener('change', enableSpline);

    return () => {
      media.removeEventListener('change', enableSpline);
      window.clearTimeout(timeoutId);
      if (idleId) {
        window.cancelIdleCallback(idleId);
      }
    };
  }, []);

  return (
    <div className={className}>
      {canRenderSpline ? (
        <Suspense fallback={<StaticSplineImage src={fallbackImage} alt={alt} className={imageClassName} />}>
          <Spline scene={scene} />
        </Suspense>
      ) : (
        <StaticSplineImage src={fallbackImage} alt={alt} className={imageClassName} />
      )}
    </div>
  );
}

function StaticSplineImage({ src, alt, className }) {
  return <img className={className} src={src} alt={alt} loading="eager" decoding="async" />;
}
