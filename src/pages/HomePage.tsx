import { CssBaseline, Divider } from '@mui/material';
import AppTheme from '../assets/shared-theme/AppTheme';
import Header from '../components/header/Header.tsx';
import Hero from '../components/hero/Hero.tsx';
import Footer from '../components/footer/Footer.tsx';
import Highlights from '../components/highlights/Highlights.tsx';
import CareerTimeline from '../components/career-timeline/CareerTimeline.tsx';

export default function HomePage(props: { disableCustomTheme?: boolean }) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <Header />
      <Hero />
      <Divider />
      <CareerTimeline />
      <Divider />
      <Highlights />
      <Divider />
      <Footer />
    </AppTheme>
  );
}
