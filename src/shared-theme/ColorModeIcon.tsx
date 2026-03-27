import React, { useContext } from 'react';
import { ThemeContext } from './customizations/ThemeProvider';
import DarkModeIcon from '@mui/icons-material/DarkModeRounded';
import LightModeIcon from '@mui/icons-material/LightModeRounded';
import Box from '@mui/material/Box';
import IconButton, { IconButtonOwnProps } from '@mui/material/IconButton';
import { useColorScheme } from '@mui/material/styles';

export default function ColorModeIcon(props: IconButtonOwnProps) {
  const { mode, systemMode, setMode } = useColorScheme();
  const { theme, setTheme } = useContext(ThemeContext);

  const handleClick = () => {
    const newMode = theme === 'dark' ? 'light' : 'dark';
    setTheme(newMode);
    setMode(newMode);
  };

  if (!mode) {
    return (
      <Box
        data-screenshot="toggle-mode"
        sx={(theme) => ({
          verticalAlign: 'bottom',
          display: 'inline-flex',
          width: '2.25rem',
          height: '2.25rem',
          borderRadius: (theme.vars || theme).shape.borderRadius,
          border: '1px solid',
          borderColor: (theme.vars || theme).palette.divider,
        })}
      />
    );
  }

  const resolvedMode = (systemMode || mode) as 'light' | 'dark';
  const icon = {
    light: <LightModeIcon />,
    dark: <DarkModeIcon />,
  }[resolvedMode];

  return (
    <React.Fragment>
      <IconButton
        data-screenshot="toggle-mode"
        onClick={handleClick}
        disableRipple
        size="small"
        aria-haspopup="true"
        {...props}
      >
        {icon}
      </IconButton>
    </React.Fragment>
  );
}
