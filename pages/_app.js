import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ThemeModeProvider } from '../styles/ThemeModeProvider';

export default function App({ Component, pageProps }) {
  const [openHomeSplash, setOpenHomeSplash] = useState(true);

  useEffect(() => {
    AOS.init({
      easing: 'ease',
      duration: 400,
      delay: 150,
    });

    const timer = setTimeout(() => {
      setOpenHomeSplash(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <ThemeModeProvider>
      <Component
        {...pageProps}
        open={openHomeSplash}
        setOpen={setOpenHomeSplash}
      />
    </ThemeModeProvider>
  );
}
