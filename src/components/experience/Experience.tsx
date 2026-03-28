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
            <Box sx={{ mb: 6 }}>
                <Container
                    sx={{
                        marginBottom: 4,
                        pl: { xs: 6, sm: 6 },
                        pr: { xs: 6, sm: 6 },
                    }}
                    >
                        {experienceContent.experience.map((job: any) => (
                            <Card sx={{ mb: 3 }}>
                                    <CardContent key={job.id}>
                                        <Typography variant="h5" style={{ paddingBottom: '1rem' }}>
                                            {job.jobTitle}<Typography variant="subtitle2">{job.startDate} - {job.endDate}</Typography>
                                        </Typography>
                                        <Typography variant="subtitle1" style={{ paddingBottom: '1rem' }}>{job.companyName}
                                        </Typography>
                                        <Typography style={{ paddingBottom: '1rem' }}>{job.description}</Typography>
                                        {job.responsibilities && 
                                        <>
                                        <Typography>Responsibilities:</Typography>
                                            <ul>
                                                {job.responsibilities.map((responsibility: any) => (
                                                    <li><Typography variant="body1">{responsibility}</Typography></li>
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