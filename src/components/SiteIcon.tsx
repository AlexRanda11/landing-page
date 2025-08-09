import { Box } from "@mui/material";

export default function SiteIcon({ icon = 'AR2' }: { icon?: string }) {
  const iconPath = `${import.meta.env.BASE_URL}assets/images/${icon}.png`;

  return (
    <Box
      component="img"
      src={iconPath}
      alt={`${icon} icon`}
      sx={{
        width: '100px', // Adjust width as needed
        height: 'auto', // Maintain aspect ratio
        marginRight: '8px', // Add spacing if needed
        justifySelf: 'center',
        pb: { xs: 0, md: 0.5}
      }}
    />
  );
}
