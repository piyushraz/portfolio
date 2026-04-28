import { useCallback } from 'react';

export const useTilt = (intensity = 6) => {
  const onMouseMove = useCallback(
    (e) => {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const mx = ((e.clientX - rect.left) / rect.width) * 100;
      const my = ((e.clientY - rect.top) / rect.height) * 100;
      const rx = ((my - 50) / 50) * -intensity;
      const ry = ((mx - 50) / 50) * intensity;
      card.style.setProperty('--mx', `${mx}%`);
      card.style.setProperty('--my', `${my}%`);
      card.style.setProperty('--rx', `${rx}deg`);
      card.style.setProperty('--ry', `${ry}deg`);
    },
    [intensity]
  );

  const onMouseLeave = useCallback((e) => {
    const card = e.currentTarget;
    card.style.setProperty('--rx', '0deg');
    card.style.setProperty('--ry', '0deg');
  }, []);

  return { onMouseMove, onMouseLeave };
};
