
import { CssBaseline, Divider } from '@mui/material';
import AppTheme from '../assets/shared-theme/AppTheme';
import AppAppBar from '../components/AppAppBar';
import Hero from '../components/hero/Hero.tsx';
import Footer from '../components/Footer';
import Blog from '../components/highlights/Highlights.tsx';

export default function HomePage(props: { disableCustomTheme?: boolean }) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />

      <AppAppBar />
      <Hero />
      
      <Blog />
      <Divider />
      <Footer />
    </AppTheme>
  );
}
