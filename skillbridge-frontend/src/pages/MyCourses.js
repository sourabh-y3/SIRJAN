import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Chip,
  Rating,
} from '@mui/material';
import { PlayCircle as PlayIcon } from '@mui/icons-material';

const MyCourses = () => {
  const enrolledCourses = [
    {
      id: 1,
      title: 'Complete Web Development Bootcamp',
      instructor: 'John Doe',
      progress: 65,
      lastAccessed: '2 days ago',
      image: '/images/web-dev.jpg',
      totalLectures: 250,
      completedLectures: 163,
    },
    {
      id: 2,
      title: 'Python for Data Science',
      instructor: 'Mike Johnson',
      progress: 30,
      lastAccessed: '1 week ago',
      image: '/images/python-ds.jpg',
      totalLectures: 180,
      completedLectures: 54,
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        My Learning
      </Typography>

      <Grid container spacing={4}>
        {enrolledCourses.map((course) => (
          <Grid item xs={12} key={course.id}>
            <Card sx={{ display: 'flex' }}>
              <CardMedia
                component="img"
                sx={{ width: 200, height: 140 }}
                image={course.image}
                alt={course.title}
              />
              <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <CardContent>
                  <Typography variant="h6" component="div">
                    {course.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {course.instructor}
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="body2" color="text.secondary">
                      Progress: {course.progress}%
                    </Typography>
                    <Box
                      sx={{
                        width: '100%',
                        height: 8,
                        bgcolor: 'grey.200',
                        borderRadius: 4,
                        mt: 1,
                      }}
                    >
                      <Box
                        sx={{
                          width: `${course.progress}%`,
                          height: '100%',
                          bgcolor: 'primary.main',
                          borderRadius: 4,
                        }}
                      />
                    </Box>
                  </Box>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                    Last accessed: {course.lastAccessed}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {course.completedLectures} of {course.totalLectures} lectures completed
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    startIcon={<PlayIcon />}
                    variant="contained"
                    color="primary"
                    size="small"
                  >
                    Continue Learning
                  </Button>
                </CardActions>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MyCourses; 