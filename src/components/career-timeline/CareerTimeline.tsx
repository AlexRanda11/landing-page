import { 
    Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot 
} from '@mui/lab';
import { Container, Box, Typography } from '@mui/material';
import { careerTimelineContent } from './CareerTimeline';
import { School, SchoolOutlined } from '@mui/icons-material';
import SeeMore from '../see-more-button/SeeMore';

export default function BasicTimeline() {
  return (
    <Container
        maxWidth="lg"
        component="main"
        sx={{ display: 'flex', flexDirection: 'column', marginTop: 8, marginBottom: 10, gap: 4 }}
    >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <div>
                <Typography variant="h1" gutterBottom>
                    {careerTimelineContent.title}
                </Typography>
                <Typography>{careerTimelineContent.description}</Typography>
            </div>
            <Timeline position='alternate-reverse'>
                {careerTimelineContent.positions.map((position, index) => {
                    return (
                        <TimelineItem key={index}>
                            <TimelineSeparator>
                            {
                                position.tag == 'career' ? 
                                    <TimelineDot 
                                        variant='outlined'
                                        color={index% 3 === 0 ? 'success' : index % 3 === 1 ? 'secondary' : 'primary'}
                                    /> : 
                                        <TimelineDot>
                                            {position.status === 'complete' ? <School /> : <SchoolOutlined />}
                                        </TimelineDot>
                            }
                            <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>{position.title}</TimelineContent>
                        </TimelineItem>
                    )
                })}
            </Timeline>
            <SeeMore 
                text={careerTimelineContent.seeMoreButtonText} 
                url='/resume' 
            />
        </Box>
    </Container>
  );
}
