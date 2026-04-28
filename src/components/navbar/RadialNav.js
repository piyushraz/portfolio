import React, { useEffect, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './radial-nav.css';

const links = [
  { to: 'about-section', label: 'About' },
  { to: 'experience-section', label: 'Experience' },
  { to: 'education-section', label: 'Education' },
  { to: 'projects-section', label: 'Projects' },
  { to: 'skills-section', label: 'Skills' },
  { to: 'contact-section', label: 'Contact' },
];

const RadialNav = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    let lastY = window.pageYOffset;
    const onScroll = () => {
      if (Math.abs(window.pageYOffset - lastY) > 60) setOpen(false);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [open]);

  // FAB at bottom-right; items fan into the up-left quadrant.
  const radius = 195;
  const startDeg = 270;
  const endDeg = 180;
  const stepDeg = (endDeg - startDeg) / (links.length - 1);

  // each line ends ~22px before the item center so it tucks under the circle
  const lineEndOffset = 22;
  const lineLen = radius - lineEndOffset;

  const points = links.map((l, i) => {
    const deg = startDeg + stepDeg * i;
    const rad = (deg * Math.PI) / 180;
    return {
      x: Math.cos(rad) * radius,
      y: Math.sin(rad) * radius,
      lineX: Math.cos(rad) * lineLen,
      lineY: Math.sin(rad) * lineLen,
      num: String(i + 1).padStart(2, '0'),
      ...l,
    };
  });

  const svgSize = radius * 2 + 40;
  const svgCenter = svgSize / 2;

  return (
    <>
      {open && <div className="radial-backdrop" onClick={() => setOpen(false)} />}
      <div className={`radial-nav ${open ? 'is-open' : ''}`}>
        <svg
          className="radial-lines"
          width={svgSize}
          height={svgSize}
          viewBox={`0 0 ${svgSize} ${svgSize}`}
          style={{
            top: `calc(50% - ${svgCenter}px)`,
            left: `calc(50% - ${svgCenter}px)`,
          }}
          aria-hidden="true"
        >
          <defs>
            <radialGradient
              id="rnLineGrad"
              cx={svgCenter}
              cy={svgCenter}
              r={lineLen}
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#00c6ff" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#00c6ff" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#00c6ff" stopOpacity="0.25" />
            </radialGradient>
          </defs>
          {points.map((p, i) => (
            <line
              key={p.to}
              className="radial-line"
              x1={svgCenter}
              y1={svgCenter}
              x2={svgCenter + p.lineX}
              y2={svgCenter + p.lineY}
              stroke="url(#rnLineGrad)"
              strokeWidth="1.4"
              strokeLinecap="round"
              style={{
                strokeDasharray: lineLen,
                strokeDashoffset: lineLen,
                transitionDelay: `${i * 38}ms`,
                '--len': lineLen,
              }}
            />
          ))}
        </svg>

        <ul className="radial-items" aria-hidden={!open}>
          {points.map((p, i) => (
            <li
              key={p.to}
              className="radial-item-wrap"
              style={{ '--x': `${p.x}px`, '--y': `${p.y}px`, '--i': i }}
            >
              <ScrollLink
                to={p.to}
                smooth={true}
                duration={800}
                spy={true}
                offset={-70}
                activeClass="is-active"
                className="radial-item"
                onClick={() => setOpen(false)}
                tabIndex={open ? 0 : -1}
                aria-label={p.label}
                title={p.label}
              >
                <span className="radial-item-num">{p.num}</span>
              </ScrollLink>
            </li>
          ))}
        </ul>

        <button
          className="radial-fab"
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span className="radial-fab-icon">
            <span className="radial-bar"></span>
            <span className="radial-bar"></span>
            <span className="radial-bar"></span>
          </span>
        </button>
      </div>
    </>
  );
};

export default RadialNav;
