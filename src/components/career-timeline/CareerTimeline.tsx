import { 
    Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot 
} from '@mui/lab';
import { Container, Box, Typography } from '@mui/material';
import { careerTimelineContent } from './CareerTimeline';

export default function BasicTimeline() {
  return (
    <Container
        maxWidth="lg"
        component="main"
        sx={{ display: 'flex', flexDirection: 'column', marginTop: 10, marginBottom: 13, gap: 4 }}
    >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <div>
                <Typography variant="h1" gutterBottom>
                    {careerTimelineContent.title}
                </Typography>
                <Typography>{careerTimelineContent.description}</Typography>
            </div>
            <Timeline position='alternate-reverse'>
                {careerTimelineContent.jobs.map((job, index) => {
                    return (
                        <TimelineItem>
                            <TimelineSeparator>
                            <TimelineDot 
                                variant='outlined'
                                color={index % 3 === 0 ? 'success' : index % 3 === 1 ? 'secondary' : 'primary'}
                            />
                            <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>{job}</TimelineContent>
                        </TimelineItem>
                    )
                })}
            </Timeline>
        </Box>
    </Container>
  );
}
