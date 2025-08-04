import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import AppTheme from '../shared-theme/AppTheme.tsx';
import Header from '../components/header/Header.tsx';
import Hero from '../components/hero/Hero.tsx';
import LogoCollection from '../components/marketing-page/LogoCollection';
import Highlights from '../components/highlights/Highlights.tsx';
import Pricing from '../components/marketing-page/Pricing';
import Features from '../components/marketing-page/Features';
import Testimonials from '../components/marketing-page/Testimonials';
import FAQ from '../components/marketing-page/FAQ';
import Footer from '../components/footer/Footer.tsx';

export default function MarketingPage(props: { disableCustomTheme?: boolean }) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />

      <Header />
      <Hero />
      <div>
        <LogoCollection />
        <Features />
        <Divider />
        <Testimonials />
        <Divider />
        <Highlights />
        <Divider />
        <Pricing />
        <Divider />
        <FAQ />
        <Divider />
        <Footer />
      </div>
    </AppTheme>
  );
}
