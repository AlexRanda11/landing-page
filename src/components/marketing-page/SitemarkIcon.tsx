export default function SitemarkIcon({ icon = 'AR2' }: { icon?: string }) {
  const iconPath = `${import.meta.env.BASE_URL}assets/images/${icon}.png`;
  console.log(`iconPath: ${iconPath}`);

  return (
    <img
      src={iconPath}
      alt={`${icon} icon`}
      style={{
        width: '100px', // Adjust width as needed
        height: 'auto', // Maintain aspect ratio
        marginRight: '10px', // Add spacing if needed
        paddingBottom: '5px'
      }}
    />
  );
}
