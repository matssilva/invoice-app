import { useState } from 'react';

const useTheme = (): { theme: string; themeToggler: () => void } => {
  const [theme, setTheme] = useState<string>('dark');

  const themeToggler = () =>
    theme === 'light' ? setTheme('dark') : setTheme('light');

  return { theme, themeToggler };
};

export default useTheme;
