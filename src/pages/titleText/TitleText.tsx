import { Container, Box, Typography } from "@mui/material"; 

export default function TitleText({title, description, size}: {title: string, description: string, size: any}) {
    return (
        <Container
                maxWidth="lg"
                sx={{ display: 'flex', flexDirection: 'column', marginTop: 4, marginBottom: 6, gap: 4 }}
            >
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: 3, gap: 4 }}>
                        <Typography variant={size || 'h1'} gutterBottom>
                            {title}
                        </Typography>
                        <Typography>{description}</Typography>
                    </Box>
                </Box>
            </Container>
    )
}