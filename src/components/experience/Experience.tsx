import { Box, Container, Typography, Card,  CardContent } from "@mui/material";
import { experienceContent } from "./Experience.ts";
import TitleText from "../../pages/titleText/TitleText.tsx";

export default function Experience() {
    return (
        <Box>
            <TitleText
                title={experienceContent.experienceTitle}
                description={experienceContent.experienceDescription}
                size="h2"
            />
            <Box sx={{ mb: 3 }}>
                <Container
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        pl: { sm: 5, xs: 2 },
                        pr: { sm: 5, xs: 2 },
                }}>
                    {experienceContent.experience.map((job: any) => (
                        <Card sx={{ mb: 3 }}>
                            <CardContent key={job.id}>
                                <Typography variant="h5">
                                    {job.jobTitle}
                                </Typography>
                                <Typography variant="subtitle2" color='text.secondary' sx={{ paddingBottom: '1rem' }}>
                                    {job.startDate} - {job.endDate}
                                </Typography>
                                <Typography variant="subtitle1" sx={{ paddingBottom: '1rem' }}>{job.companyName}
                                </Typography>
                                <Typography variant="body1" color="text.secondary" sx={{ paddingBottom: '1rem' }}>{job.description}</Typography>
                                {job.responsibilities && 
                                <>
                                <Typography variant="body1">Responsibilities:</Typography>
                                    <ul>
                                        {job.responsibilities.map((responsibility: any) => (
                                            <li><Typography variant="body1" color="text.secondary">{responsibility}</Typography></li>
                                        ))}
                                    </ul>
                                </>}
                            </CardContent>
                        </Card>
                        ))}
                </Container>
            </Box>
        </Box>
    );
}