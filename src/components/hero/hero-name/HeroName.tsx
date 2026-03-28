import { Typography } from '@mui/material';
import { heroNameContent } from './HeroName';

export default function HeroName() {
    return (
        <Typography
            variant="h1"
            sx={{
              display: { xs: 'flex' },
              alignItems: { xs: 'center' },
              flexDirection: { xs: 'row' },
              fontSize: { xs: '2.5rem', lg: '3.5rem' },
              pt: { xs: '3rem', sm: '0rem', lg: '0rem' }
            }}
          >
            {heroNameContent.firstName}
            <Typography
              component="span"
              variant="h1"
              sx={(theme) => ({
              fontSize: 'inherit',
              color: { xs: '#5071FF' },
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