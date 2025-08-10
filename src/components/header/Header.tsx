import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import { Box, AppBar, Toolbar, Button, IconButton, Container, Divider, MenuItem, Drawer, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ColorModeIconDropdown from '../../shared-theme/ColorModeIconDropdown';
import SiteIcon from '../SiteIcon';
import { headerContent } from './Header';
import { useNavigate } from 'react-router-dom';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: 'blur(24px)',
  border: '1px solid',
  borderColor: (theme.vars || theme).palette.divider,
  backgroundColor: theme.vars
    ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.4)`
    : alpha(theme.palette.background.default, 0.4),
  boxShadow: (theme.vars || theme).shadows[1],
  padding: '8px 12px',
}));

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBar
      position="fixed"
      enableColorOnDark
      sx={{
        boxShadow: 0,
        bgcolor: 'transparent',
        backgroundImage: 'none',
        mt: 'calc(var(--template-frame-height, 0px) + 28px)',
      }}
    >
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}>
            <SiteIcon icon="AR1" />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              {headerContent.tabs.map((tab, index) => (
                <Button
                  key={index}
                  variant="text"
                  color="info"
                  size="small"
                  onClick={() => navigate(tab.url)}
                >
                  {tab.title}
                </Button>
              ))}
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 1,
              alignItems: 'center',
            }}
          >
            <ColorModeIconDropdown />
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1 }}>
            <ColorModeIconDropdown size="medium" />
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="top"
              open={open}
              onClose={toggleDrawer(false)}
              PaperProps={{
                sx: {
                  top: 'var(--template-frame-height, 0px)',
                },
              }}
            >
              <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                  }}
                >
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>

                {headerContent.tabs.map((tab, index) => (
                  <MenuItem key={index} onClick={() => navigate(tab.url)}>
                    {tab.title}
                  </MenuItem>
                ))}

                {/* Divider for separating main tabs and sub-pages */}
                <Divider sx={{ my: 3 }} />

                {/* Resume Heading */}
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 'bold',
                    paddingRight: 2,
                    mt: 2,
                    mb: 1,
                    color: 'text.primary',
                  }}
                >
                  {headerContent.tabs[1].title}
                </Typography>

                {/* Sub-pages for Resume */}
                {headerContent.resumeSubTabs.map((subPage, index) => (
                  <MenuItem
                    key={index}
                    onClick={() => {
                      navigate(subPage.url);
                      toggleDrawer(false)(); // Close the drawer after navigation
                    }}
                  >
                    {subPage.title}
                  </MenuItem>
                ))}
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}