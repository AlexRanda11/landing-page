import { Box, Grid, Card, CardContent, Typography, Tooltip, LinearProgress, Container } from '@mui/material';
import { skillCardContent } from "./SkillCard.ts";

export default function SkillCard() {
    return (
        <Box sx={{ mb: 6 }}>
            <Container 
                container 
                spacing={3} 
                >
                {skillCardContent.skills.map((category, index) => {
                    return (
                        <Container 
                        key={index}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            marginBottom: 4,}}
                            maxWidth={'lg'}
                    >
                        <Card>
                            <CardContent>
                                <Typography 
                                    variant="h3" 
                                    component="h3"
                                    sx={{ display: 'flex', alignItems: 'center', mb: 2 }}
                                >
                                    <category.icon sx={{ mr: 1 }}/>{category.title}
                                </Typography>
                                {
                                    category.skills.map((skill, skillIndex) => {
                                        return (
                                            <Box key={skillIndex} sx={{ mb: 1.5}}>
                                                <Tooltip
                                                    title={skill.description || ''}
                                                    arrow
                                                    placement='right'
                                                >
                                                    <Typography
                                                        variant='body1'
                                                        sx={{ fontWeight: 500, mb: 0.5}}
                                                    >{skill.name}</Typography>
                                                </Tooltip>
                                                <LinearProgress
                                                    variant='determinate'
                                                    value={skill.proficiency}
                                                />
                                            </Box>
                                        );
                                    })
                                }
                            </CardContent>
                        </Card>
                    </Container>
                  );  
                })}
            </Container>
        </Box>
    );
}