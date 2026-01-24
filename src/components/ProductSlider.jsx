import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Box, Typography, Button, Paper, Grid } from '@mui/material';

const ProductSlider = ({ title, products }) => (
  <Box sx={{ py: 8 }}>
    <Container>
      <Typography variant="h3" textAlign="center" gutterBottom sx={{ fontWeight: 'bold', mb: 5 }}>{title}</Typography>
      <Carousel indicators={false} navButtonsAlwaysVisible>
        <Box sx={{ p: 2 }}>
          <Grid container spacing={4}>
            {products.map((p, i) => (
              <Grid item xs={12} md={4} key={i}>
                <Paper elevation={3} sx={{ p: 3, textAlign: 'center', height: '100%' }}>
                  <Typography variant="h6" fontWeight="bold">{p.name}</Typography>
                  <Typography color="secondary" fontWeight="bold">Price ${p.price}</Typography>
                  {/* Image Placeholder if file missing */}
                  <Box sx={{ height: 200, bgcolor: '#eee', my: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {p.image ? <img src={p.image} alt={p.name} style={{maxHeight: '100%'}} /> : "Image Not Found"}
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                    <Button sx={{ color: '#f26522' }}>Buy Now</Button>
                    <Button sx={{ color: '#333' }}>See More</Button>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Carousel>
    </Container>
  </Box>
);