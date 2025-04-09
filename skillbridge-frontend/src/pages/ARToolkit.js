import React, { useEffect, useRef } from 'react';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Button,
  Grid,
} from '@mui/material';
import { CameraAlt as CameraIcon } from '@mui/icons-material';

const ARToolkit = () => {
  const arContainerRef = useRef(null);

  useEffect(() => {
    // Initialize AR.js
    const initAR = () => {
      if (arContainerRef.current) {
        // This would typically initialize AR.js with specific markers and models
        console.log('AR initialized');
      }
    };

    initAR();
  }, []);

  const startAR = () => {
    // Request camera permissions and start AR experience
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        if (arContainerRef.current) {
          const video = document.createElement('video');
          video.srcObject = stream;
          video.autoplay = true;
          arContainerRef.current.appendChild(video);
        }
      })
      .catch((err) => {
        console.error('Error accessing camera:', err);
      });
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        AR Learning Toolkit
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Interactive AR Learning
              </Typography>
              <Typography variant="body1" paragraph>
                Use your device's camera to access interactive 3D tutorials and
                step-by-step guides for various skills.
              </Typography>
              <Button
                variant="contained"
                startIcon={<CameraIcon />}
                onClick={startAR}
                sx={{ mt: 2 }}
              >
                Start AR Experience
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box
            ref={arContainerRef}
            sx={{
              width: '100%',
              height: 400,
              backgroundColor: 'black',
              borderRadius: 2,
              overflow: 'hidden',
            }}
          >
            {/* AR content will be rendered here */}
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          Available AR Tutorials
        </Typography>
        <Grid container spacing={2}>
          {[
            'Basic Electronics Assembly',
            'Mechanical Parts Identification',
            'Safety Procedures',
            'Equipment Operation',
          ].map((tutorial, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card>
                <CardContent>
                  <Typography variant="subtitle1">{tutorial}</Typography>
                  <Button
                    variant="outlined"
                    size="small"
                    sx={{ mt: 1 }}
                    onClick={startAR}
                  >
                    View in AR
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default ARToolkit; 