import { useEffect, useState } from 'react';
import { ThemeProvider } from 'next-themes';
import { darkTheme, globalReset } from 'stitches.config';

const App = ({ Component, pageProps }) => {
  const [mounted, setMounted] = useState(false);
  globalReset();
  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      value={{
        light: 'light',
        dark: darkTheme.className
      }}
    >
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
