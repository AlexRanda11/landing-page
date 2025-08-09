import { Typography } from '@mui/material';
import { heroNameContent } from './HeroName';

export default function HeroName() {
    return (
        <Typography
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              fontSize: 'clamp(3rem, 10vw, 3.5rem)',
            }}
          >
            {heroNameContent.firstName}
            <Typography
              component="span"
              variant="h1"
              sx={(theme) => ({
                fontSize: 'inherit',
                color: '#5071FF',
                ...theme.applyStyles('dark', {
                  color: '#5071FF',
                }),
              })}
            >
              {heroNameContent.lastName}
            </Typography>
          </Typography>
    )
}