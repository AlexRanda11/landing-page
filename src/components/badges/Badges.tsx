import { Box, Container, Card, CardContent, Typography } from "@mui/material";
import { badgesContent } from "./Badges.ts";
import TitleText from "../../pages/titleText/TitleText.tsx"

export default function Badges() {
    return (
        <Box>
            <TitleText
                title={badgesContent.badgesTitle}
                description={badgesContent.badgesDescription}
                size="h2"
            />
            <Box sx={{ mb: 6 }}>
                <Container
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        marginBotton: 4,
                        pl: { sm: 5, xs: 2 },
                        pr: { sm: 5, xs: 2 }
                    }}>
                        {badgesContent.badges.map((badge: any) => (
                            <Card sx={{ mb: 3 }}>
                                <CardContent key={badge.title}>
                                    <Typography variant="h5">
                                        {badge.title}
                                    </Typography>
                                    <Typography color={badge.expiryDate && 'red'} variant="subtitle2" sx={{ paddingBottom: '1rem'}}>
                                        {badge.expiryDate ? `Expired ${badge.expiryDate}` : `Issued ${badge.issueDate}` }
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary" sx={{ pb: '1rem' }}>
                                        {badge.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        ))}
                </Container>
            </Box>
        </Box>
    );
}