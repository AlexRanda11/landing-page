import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { Container, Box } from '@mui/material';
import { breadcrumbContent } from './Breadcrumb';
import { useNavigate } from 'react-router-dom';

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function Breadcrumb() {
    const navigate = useNavigate();

  return (
    <Container
        maxWidth="lg"
        component="main"
        sx={{ display: 'flex', flexDirection: 'column', marginTop: 15, marginBottom: 13, gap: 4 }}
    >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <div role="presentation" onClick={handleClick}>
            <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" onClick={() => navigate('/')}>
                {breadcrumbContent.homeText}
                </Link>
                <Typography sx={{ color: 'text.primary' }}>{breadcrumbContent.title}</Typography>
            </Breadcrumbs>
            </div>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <Typography variant="h1" gutterBottom>
                {breadcrumbContent.title}
            </Typography>
            <Typography>{breadcrumbContent.description}</Typography>
        </Box>
    </Container>
  );
}
