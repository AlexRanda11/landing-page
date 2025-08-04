import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';

export default function Breadcrumb({currentPage}: {currentPage: string}) {
    const navigate = useNavigate();

  return (
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
    </Breadcrumbs> 
  );
}
