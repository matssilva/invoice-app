import { useState } from 'react';
export const useTheme = (): { theme: string, themeToggler: () => void } => {
  const [theme, setTheme] = useState<string>('dark');

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  };

  return { theme, themeToggler }
};