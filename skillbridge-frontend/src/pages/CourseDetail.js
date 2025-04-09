import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Button,
  Rating,
  Tabs,
  Tab,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Chip,
  Avatar,
} from '@mui/material';
import {
  PlayCircle as PlayIcon,
  CheckCircle as CheckIcon,
  AccessTime as TimeIcon,
  Language as LanguageIcon,
  ClosedCaption as CaptionIcon,
  Assignment as AssignmentIcon,
} from '@mui/icons-material';

const CourseDetail = () => {
  const [tabValue, setTabValue] = useState(0);

  const course = {
    id: 1,
    title: 'Complete Web Development Bootcamp',
    instructor: {
      name: 'John Doe',
      image: '/images/instructor.jpg',
      rating: 4.8,
      students: 50000,
      courses: 12,
    },
    rating: 4.7,
    reviews: 12500,
    students: 150000,
    lastUpdated: '2023-12-01',
    language: 'English',
    subtitles: ['English', 'Spanish', 'French'],
    level: 'All Levels',
    duration: '30 hours',
    lectures: 250,
    price: 129.99,
    originalPrice: 199.99,
    description: 'Learn web development with HTML, CSS, JavaScript, React, Node.js, and more!',
    requirements: [
      'No programming experience needed',
      'A computer with internet access',
      'Willingness to learn',
    ],
    curriculum: [
      {
        section: 'Introduction',
        lectures: [
          { title: 'Welcome to the Course', duration: '2:30' },
          { title: 'Course Overview', duration: '5:15' },
          { title: 'Setting Up Your Environment', duration: '10:45' },
        ],
      },
      {
        section: 'HTML & CSS',
        lectures: [
          { title: 'HTML Basics', duration: '15:20' },
          { title: 'CSS Fundamentals', duration: '20:10' },
          { title: 'Responsive Design', duration: '25:30' },
        ],
      },
      // Add more sections...
    ],
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={4}>
        {/* Left Column - Course Content */}
        <Grid item xs={12} md={8}>
          <Typography variant="h4" gutterBottom>
            {course.title}
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Rating value={course.rating} precision={0.1} readOnly />
            <Typography variant="body2" sx={{ ml: 1 }}>
              ({course.rating})
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
              ({course.reviews.toLocaleString()} reviews)
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
              {course.students.toLocaleString()} students
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
            <Avatar
              src={course.instructor.image}
              alt={course.instructor.name}
              sx={{ width: 40, height: 40, mr: 1 }}
            />
            <Typography variant="body1">
              Created by{' '}
              <Typography
                component="span"
                sx={{ fontWeight: 'bold', cursor: 'pointer' }}
              >
                {course.instructor.name}
              </Typography>
            </Typography>
          </Box>

          <Card sx={{ mb: 4 }}>
            <CardContent>
              <Tabs value={tabValue} onChange={handleTabChange}>
                <Tab label="Overview" />
                <Tab label="Curriculum" />
                <Tab label="Instructor" />
                <Tab label="Reviews" />
              </Tabs>

              <Box sx={{ mt: 2 }}>
                {tabValue === 0 && (
                  <>
                    <Typography variant="h6" gutterBottom>
                      What you'll learn
                    </Typography>
                    <Grid container spacing={2}>
                      {course.requirements.map((req, index) => (
                        <Grid item xs={12} sm={6} key={index}>
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <CheckIcon color="primary" sx={{ mr: 1 }} />
                            <Typography>{req}</Typography>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>

                    <Typography variant="h6" sx={{ mt: 4 }} gutterBottom>
                      Course Description
                    </Typography>
                    <Typography paragraph>{course.description}</Typography>

                    <Typography variant="h6" gutterBottom>
                      Requirements
                    </Typography>
                    <List>
                      {course.requirements.map((req, index) => (
                        <ListItem key={index}>
                          <ListItemIcon>
                            <CheckIcon color="primary" />
                          </ListItemIcon>
                          <ListItemText primary={req} />
                        </ListItem>
                      ))}
                    </List>
                  </>
                )}

                {tabValue === 1 && (
                  <List>
                    {course.curriculum.map((section, sectionIndex) => (
                      <Box key={sectionIndex}>
                        <ListItem>
                          <ListItemText
                            primary={section.section}
                            secondary={`${section.lectures.length} lectures`}
                          />
                        </ListItem>
                        {section.lectures.map((lecture, lectureIndex) => (
                          <ListItem
                            key={lectureIndex}
                            sx={{ pl: 4 }}
                            secondaryAction={
                              <Typography variant="body2" color="text.secondary">
                                {lecture.duration}
                              </Typography>
                            }
                          >
                            <ListItemIcon>
                              <PlayIcon color="primary" />
                            </ListItemIcon>
                            <ListItemText primary={lecture.title} />
                          </ListItem>
                        ))}
                      </Box>
                    ))}
                  </List>
                )}
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Right Column - Course Card */}
        <Grid item xs={12} md={4}>
          <Card sx={{ position: 'sticky', top: 20 }}>
            <CardContent>
              <Box
                component="img"
                src="/images/course-preview.jpg"
                alt="Course Preview"
                sx={{ width: '100%', borderRadius: 1, mb: 2 }}
              />

              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Typography
                  variant="h5"
                  color="primary"
                  sx={{ fontWeight: 'bold' }}
                >
                  ${course.price}
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ textDecoration: 'line-through', ml: 1 }}
                >
                  ${course.originalPrice}
                </Typography>
                <Chip
                  label={`${Math.round(
                    ((course.originalPrice - course.price) /
                      course.originalPrice) *
                      100
                  )}% off`}
                  color="secondary"
                  size="small"
                  sx={{ ml: 1 }}
                />
              </Box>

              <Button
                variant="contained"
                color="primary"
                fullWidth
                size="large"
                sx={{ mb: 2 }}
              >
                Add to Cart
              </Button>

              <Button
                variant="outlined"
                color="primary"
                fullWidth
                size="large"
                sx={{ mb: 2 }}
              >
                Buy Now
              </Button>

              <Typography variant="h6" gutterBottom>
                This course includes:
              </Typography>

              <List>
                <ListItem>
                  <ListItemIcon>
                    <PlayIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary={`${course.duration} on-demand video`}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <AssignmentIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary={`${course.lectures} lectures`} />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <TimeIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Full lifetime access" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <LanguageIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary={course.language} />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CaptionIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary={`Subtitles: ${course.subtitles.join(', ')}`}
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CourseDetail; 