
'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((current) => {
        if (current >= 100) {
          clearInterval(interval);
          return 100;
        }

        return Math.min(current + 2, 100);
      });
    }, 35);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress < 100) return;

    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 200);

    const hideTimer = setTimeout(() => {
      setVisible(false);
    }, 750);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, [progress]);

  if (!visible) return null;

  return (
    <div
      className={`loading-screen ${fadeOut ? 'loading-screen-hidden' : ''}`}
      role="status"
      aria-label="Chargement de NORDVED"
    >
      <div className="loading-content">
        <Image
          src="/images/logo.png"
          alt="NORDVED"
          width={420}
          height={180}
          priority
          className="loading-logo"
        />

        <div className="loading-progress">
          <div className="loading-progress-track">
            <div
              className="loading-progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="loading-progress-info">
            <span>PREPARING YOUR EXPERIENCE</span>
            <span>{progress}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
