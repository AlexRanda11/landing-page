import { Container, Breadcrumbs, Link, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Breadcrumb({currentPage, subPage}: {currentPage: string, subPage?: string}) {
    const navigate = useNavigate();

  return (
    <Container sx={{ maxWidth: 'lg', mt: 3}}>
      <Breadcrumbs aria-label="breadcrumb">
          <Link 
              underline="hover" 
              color="inherit" 
              onClick={() => navigate('/')}
              sx={{ cursor: 'pointer' }}
              >
              Home
          </Link>
          <Typography sx={{ color: 'text.primary' }}>{currentPage}</Typography>
            {subPage && (
              <Typography sx={{ color: 'text.primary' }}>{subPage}</Typography>
            )}
      </Breadcrumbs> 
    </Container>
  );
}
