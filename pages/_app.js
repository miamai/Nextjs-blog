import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ThemeModeProvider } from '../styles/ThemeModeProvider';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      easing: 'ease',
      duration: 400,
      delay: 150,
    });
  }, []);
  return (
    <ThemeModeProvider>
      <Component {...pageProps} />
    </ThemeModeProvider>
  );
}
