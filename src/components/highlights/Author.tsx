import { Avatar, AvatarGroup, Box, Typography } from '@mui/material';
  
interface AuthorProps {
    authors: { name: string; avatar: string }[];
    date: string;
}

  export default function Author({authors, date}: AuthorProps) {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: 2,
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '16px',
        }}
      >
        <Box
          sx={{ display: 'flex', flexDirection: 'row', gap: 1, alignItems: 'center' }}
        >
          <AvatarGroup max={3}>
            {authors.map((author, index) => (
              <Avatar
                key={index}
                alt={author.name}
                src={author.avatar}
                sx={{ width: 24, height: 24 }}
              />
            ))}
          </AvatarGroup>
          <Typography variant="caption">
            {authors.map((author) => author.name).join(', ')}
          </Typography>
        </Box>
        <Typography variant="caption">{date}</Typography>
      </Box>
    );
  }
  