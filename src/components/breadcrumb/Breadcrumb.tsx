import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { breadcrumbContent } from './Breadcrumb';
import { useNavigate } from 'react-router-dom';



export default function Breadcrumb() {
    const navigate = useNavigate();

  return (
    <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" onClick={() => navigate('/')}>
            {breadcrumbContent.parentPage}
        </Link>
        <Typography sx={{ color: 'text.primary' }}>{breadcrumbContent.currentPage}</Typography>
    </Breadcrumbs> 
  );
}
