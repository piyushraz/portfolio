import React, { useEffect, useRef, useState } from 'react';
import './reveal.css';

const Reveal = ({
  children,
  delay = 0,
  as: Tag = 'div',
  className = '',
  once = true,
  direction = 'up',
  style,
  ...rest
}) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [once]);

  const mergedStyle = { transitionDelay: `${delay}ms`, ...style };

  return (
    <Tag
      ref={ref}
      style={mergedStyle}
      className={`reveal reveal-${direction} ${visible ? 'is-visible' : ''} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
