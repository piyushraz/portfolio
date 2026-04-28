import React, { useEffect, useRef, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './navbar.css';

const links = [
  { to: 'about-section', label: 'About' },
  { to: 'experience-section', label: 'Experience' },
  { to: 'education-section', label: 'Education' },
  { to: 'projects-section', label: 'Projects' },
  { to: 'skills-section', label: 'Skills' },
  { to: 'contact-section', label: 'Contact' },
];

const SunIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
  </svg>
);

const MoonIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

const Navbar = ({ theme = 'dark', onToggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState(null);
  const [hovered, setHovered] = useState(null);
  const [pill, setPill] = useState({ left: 0, width: 0, opacity: 0 });

  const linkRefs = useRef({});
  const listRef = useRef(null);

  useEffect(() => {
    let lastY = window.pageYOffset;
    let ticking = false;
    const update = () => {
      const y = window.pageYOffset;
      setScrolled(y > 40);
      const delta = y - lastY;
      if (Math.abs(delta) > 6) {
        if (delta > 0 && y > 80) setHidden(true);
        else if (delta < 0) setHidden(false);
        lastY = y;
      }
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) { window.requestAnimationFrame(update); ticking = true; }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { if (mobileOpen) setHidden(false); }, [mobileOpen]);

  useEffect(() => {
    const onMove = (e) => {
      if (e.clientY <= 80) setHidden(false);
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  useEffect(() => {
    const target = hovered || active;
    const node = target ? linkRefs.current[target] : null;
    const list = listRef.current;
    if (!node || !list) {
      setPill((p) => ({ ...p, opacity: 0 }));
      return;
    }
    const lr = list.getBoundingClientRect();
    const nr = node.getBoundingClientRect();
    setPill({ left: nr.left - lr.left, width: nr.width, opacity: 1 });
  }, [hovered, active, scrolled, hidden, mobileOpen]);

  useEffect(() => {
    const onResize = () => {
      const target = hovered || active;
      const node = target ? linkRefs.current[target] : null;
      const list = listRef.current;
      if (!node || !list) return;
      const lr = list.getBoundingClientRect();
      const nr = node.getBoundingClientRect();
      setPill({ left: nr.left - lr.left, width: nr.width, opacity: 1 });
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [hovered, active]);

  const closeMobile = () => setMobileOpen(false);
  const activeLabel = (active ? links.find((l) => l.to === active)?.label : null) || 'home';

  return (
    <nav
      className={`navbar ${scrolled ? 'scrolled' : ''} ${hidden ? 'hidden' : ''} ${mobileOpen ? 'mobile-open' : ''}`}
    >
      <div className="navbar-shell">
        <div className="navbar-aura" aria-hidden="true"></div>
        <div className="navbar-border" aria-hidden="true"></div>
        <div className="navbar-noise" aria-hidden="true"></div>

        <div className="navbar-inner">
          <ScrollLink
            to="top-section"
            smooth={true}
            duration={800}
            className="brand"
            onClick={() => { setActive(null); closeMobile(); }}
          >
            <span className="brand-mark">
              <span className="brand-mark-ring"></span>
              <span className="brand-mark-core">
                <span className="brand-mark-text">PR</span>
              </span>
            </span>
            <span className="brand-meta">
              <span className="brand-name">Piyush Razdan</span>
              <span className="brand-route">
                <span className="brand-dot"></span>
                <span className="brand-route-text">~/{activeLabel.toLowerCase()}</span>
              </span>
            </span>
          </ScrollLink>

          <ul className="navbar-links" ref={listRef}>
            <li
              className="navbar-pill"
              style={{ left: pill.left, width: pill.width, opacity: pill.opacity }}
              aria-hidden="true"
            ></li>
            {links.map(({ to, label }, i) => (
              <li
                key={to}
                className="navbar-link-wrap"
                ref={(el) => { if (el) linkRefs.current[to] = el; }}
                onMouseEnter={() => setHovered(to)}
                onMouseLeave={() => setHovered(null)}
              >
                <ScrollLink
                  to={to}
                  smooth={true}
                  duration={800}
                  spy={true}
                  offset={-70}
                  onSetActive={() => setActive(to)}
                  activeClass="active"
                  className="nav-item"
                  onClick={closeMobile}
                >
                  <span className="nav-item-index">0{i + 1}</span>
                  <span className="nav-item-label">{label}</span>
                </ScrollLink>
              </li>
            ))}
          </ul>

          <div className="navbar-actions">
            <button
              className="theme-toggle"
              type="button"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              onClick={onToggleTheme}
            >
              <span className={`theme-toggle-icon sun ${theme === 'light' ? 'is-active' : ''}`}>
                <SunIcon />
              </span>
              <span className={`theme-toggle-icon moon ${theme === 'dark' ? 'is-active' : ''}`}>
                <MoonIcon />
              </span>
            </button>

            <button
              className="navbar-toggle"
              aria-label="Toggle navigation"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((o) => !o)}
            >
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
