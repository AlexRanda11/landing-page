import { Box, Container, Stack, Typography } from '@mui/material';
import { heroContent } from './Hero';
import HeroName from './hero-name/HeroName.tsx';
import HeroText from './hero-text/HeroText.tsx';

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        backgroundRepeat: 'no-repeat',

        backgroundImage:
          'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)',
        ...theme.applyStyles('dark', {
          backgroundImage:
            'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)',
        }),
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 8 },
        }}
      >
        <Stack
          spacing={2}
          useFlexGap
          sx={{ alignItems: 'center', width: { xs: '100%', sm: '70%' } }}
        >
          <HeroName />
          <Box
            sx={{
              maxWidth: { xs: '12rem', sm: '250px' },
              height: { xs: '12rem', lg: '15rem' },
              width: { xs: '13rem', lg: '15rem' },
              borderRadius: '8px',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
              padding: '8px',
              backgroundColor: 'white',
              marginTop: '16px',
              marginBottom: '16px'
            }}
            component="img"
            src={heroContent.image}
          />
          <HeroText />
        </Stack>
      </Container>
    </Box>
  );
}
