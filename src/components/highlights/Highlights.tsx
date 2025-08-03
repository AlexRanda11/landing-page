import * as React from 'react';
import { Box, Card, CardContent, CardMedia, Grid, Typography, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import Author from './Author';
import { highlightsContent } from './Highlights';

const SyledCard = styled(Card)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    padding: 0,
    height: '100%',
    backgroundColor: (theme.vars || theme).palette.background.paper,
    '&:hover': {
      backgroundColor: 'transparent',
      cursor: 'pointer',
    },
    '&:focus-visible': {
      outline: '3px solid',
      outlineColor: 'hsla(210, 98%, 48%, 0.5)',
      outlineOffset: '2px',
    },
  }));
  
  const SyledCardContent = styled(CardContent)({
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    padding: 16,
    flexGrow: 1,
    '&:last-child': {
      paddingBottom: 16,
    },
  });
  
  const StyledTypography = styled(Typography)({
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 2,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  });


  export default function Blog() {
    const [focusedCardIndex, setFocusedCardIndex] = React.useState<number | null>(
      null,
    );
  
    const handleFocus = (index: number) => {
      setFocusedCardIndex(index);
    };
  
    const handleBlur = () => {
      setFocusedCardIndex(null);
    };
  
    return (
      <Container
        maxWidth="lg"
        component="main"
        sx={{ display: 'flex', flexDirection: 'column', marginTop: 0, marginBottom: 13, gap: 4 }}
      >  
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <div>
            <Typography variant="h1" gutterBottom>
              {highlightsContent.title}
            </Typography>
            <Typography>{highlightsContent.description}</Typography>
          </div>

          <Grid container spacing={2} columns={12}>
            {
              highlightsContent.cardData.map(card => {
                return (
                  <Grid size={{ xs: 12, md: 6 }}>
                  <SyledCard
                    variant="outlined"
                    onFocus={() => handleFocus(0)}
                    onBlur={handleBlur}
                    tabIndex={0}
                    className={focusedCardIndex === 0 ? 'Mui-focused' : ''}
                    >
                    <CardMedia
                      component="img"
                      alt="green iguana"
                      image={card.img}
                      sx={{
                        aspectRatio: '16 / 9',
                        borderBottom: '1px solid',
                        borderColor: 'divider',
                      }}
                      />
                    <SyledCardContent>
                      <Typography gutterBottom variant="caption" component="div">
                        {card.tag}
                      </Typography>
                      <Typography gutterBottom variant="h6" component="div" onClick={() => window.open(card.url, '_blank')}>
                        {card.title}
                      </Typography>
                      <StyledTypography variant="body2" color="text.secondary" gutterBottom>
                        {card.description}
                      </StyledTypography>
                    </SyledCardContent>
                    <Author authors={card.authors} date={card.date} />
                  </SyledCard>
                </Grid>
                )
              })
            }
          </Grid>
        </Box>
      </Container>
    );
  }