import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

export default function ThemeToggle({ label }: { label: string }) {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');
  }, []);

  function toggleTheme() {
    const next = theme === 'light' ? 'dark' : 'light';
    document.documentElement.dataset.theme = next;
    localStorage.setItem('theme', next);
    setTheme(next);
  }

  return (
    <button className="icon-button" type="button" onClick={toggleTheme} aria-label={label} title={label}>
      {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
    </button>
  );
}
