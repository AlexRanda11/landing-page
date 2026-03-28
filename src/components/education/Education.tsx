import { Box, Container, Typography, Card, CardContent } from "@mui/material";
import TitleText from "../../pages/titleText/TitleText.tsx";
import { educationContent } from "./Education.ts";
import SeeMore from "../see-more-button/SeeMore.tsx";

export default function Education() {
    return (
        <Box>
            <TitleText
                title={educationContent.educationTitle}
                description={educationContent.educationDescription}
                size="h2"
            />
            <Box sx={{ mb: 6 }}>
                <Container
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        marginBottom: 4,
                        pl: { xs: 6, sm: 6 },
                        pr: { xs: 6, sm: 6 },
                    }}
                >
                    {educationContent.education.map((education: any) => (
                        <Card sx={{ mb: 3 }}>
                            <CardContent>
                            <Typography variant="h5" style={{ paddingBottom: '1rem', cursor: 'pointer' }} onClick={() => {window.open(education.courseURL)}}>
                                {education.degreeTitle}<Typography variant="subtitle2">{education.startDate} - {education.endDate}</Typography>
                            </Typography>
                            <Typography variant="subtitle1" style={{ paddingBottom: '1rem' }}>{education.universityName}</Typography>
                            <Typography variant="body1" color="text.secondary">{education.description}
                            </Typography>
                            </CardContent>
                        </Card>
                    ))}
                    <SeeMore
                        text={educationContent.buttonText}
                        url="/research"
                    />
                </Container>
            </Box>
        </Box>
    );
}