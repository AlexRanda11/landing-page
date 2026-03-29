import { Box, Container, Card, CardContent, Typography } from "@mui/material";
import { badgesContent } from "./Badges.ts";
import TitleText from "../../pages/titleText/TitleText.tsx"

export default function Badges() {
    const isUUID = (id: string): boolean => {
        return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(id);
    };

    return (
        <Box>
            <TitleText
                title={badgesContent.badgesTitle}
                description={badgesContent.badgesDescription}
                size="h2"
            />
            <Box sx={{ mb: 3 }}>
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
                                <CardContent key={badge.id}>
                                    <Typography variant="h5" sx={isUUID(badge.id) ? {"&:hover": {textDecoration: "underline", cursor: "pointer"}} : {}} onClick={() => {isUUID(badge.id) && window.open(`${badgesContent.badgeBaseUrl1}${badge.id}${badgesContent.badgeBaseUrl2}`)}}>
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