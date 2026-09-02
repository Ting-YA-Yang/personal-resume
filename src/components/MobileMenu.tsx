import { Menu, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface MobileMenuProps {
  label: string;
  closeLabel: string;
  navLabel: string;
  links: Array<{ href: string; label: string }>;
}

export default function MobileMenu({ label, closeLabel, navLabel, links }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const firstLink = menuRef.current?.querySelector<HTMLAnchorElement>('a');
    firstLink?.focus();

    function closeMenu(event: KeyboardEvent | PointerEvent) {
      if (event instanceof KeyboardEvent && event.key === 'Escape') {
        setOpen(false);
        buttonRef.current?.focus();
      }

      if (event instanceof PointerEvent && !menuRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener('keydown', closeMenu);
    document.addEventListener('pointerdown', closeMenu);
    return () => {
      document.removeEventListener('keydown', closeMenu);
      document.removeEventListener('pointerdown', closeMenu);
    };
  }, [open]);

  return (
    <div className="mobile-menu" ref={menuRef}>
      <button
        className="icon-button mobile-menu-button"
        type="button"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        aria-label={open ? closeLabel : label}
        title={open ? closeLabel : label}
        ref={buttonRef}
        onClick={() => setOpen((current) => !current)}
      >
        {open ? <X size={19} /> : <Menu size={19} />}
      </button>

      {open && (
        <nav id="mobile-navigation" className="mobile-nav" aria-label={navLabel}>
          {links.map((link, index) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              <span>0{index + 1}</span>
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </div>
  );
}
