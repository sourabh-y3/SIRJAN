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
import { Link } from 'react-router-dom';

const featuredCourses = [
  {
    id: 1,
    title: 'Complete Web Development Bootcamp',
    instructor: 'John Doe',
    rating: 4.7,
    students: 12500,
    price: 129.99,
    image: '/images/web-dev.jpg',
    category: 'Development',
  },
  {
    id: 2,
    title: 'Digital Marketing Masterclass',
    instructor: 'Jane Smith',
    rating: 4.5,
    students: 8500,
    price: 99.99,
    image: '/images/digital-marketing.jpg',
    category: 'Marketing',
  },
  {
    id: 3,
    title: 'Python for Data Science',
    instructor: 'Mike Johnson',
    rating: 4.8,
    students: 15000,
    price: 149.99,
    image: '/images/python-ds.jpg',
    category: 'Development',
  },
];

const categories = [
  { name: 'Development', icon: '💻', count: 1200 },
  { name: 'Business', icon: '📊', count: 800 },
  { name: 'Finance & Accounting', icon: '💰', count: 600 },
  { name: 'IT & Software', icon: '🔧', count: 900 },
  { name: 'Office Productivity', icon: '📝', count: 400 },
  { name: 'Personal Development', icon: '🧠', count: 700 },
  { name: 'Design', icon: '🎨', count: 1000 },
  { name: 'Marketing', icon: '📢', count: 500 },
];

const Home = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: 8,
          mb: 4,
        }}
      >
        <Container>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h3" component="h1" gutterBottom>
                Learn the skills of tomorrow
              </Typography>
              <Typography variant="h6" gutterBottom>
                Build skills with courses, certificates, and degrees online from world-class universities and companies
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                sx={{ mt: 2 }}
                component={Link}
                to="/courses"
              >
                Explore Courses
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="/images/hero-image.jpg"
                alt="Learning"
                sx={{
                  width: '100%',
                  borderRadius: 2,
                  boxShadow: 3,
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Featured Courses */}
      <Container sx={{ mb: 6 }}>
        <Typography variant="h4" gutterBottom>
          Featured Courses
        </Typography>
        <Grid container spacing={4}>
          {featuredCourses.map((course) => (
            <Grid item xs={12} sm={6} md={4} key={course.id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  '&:hover': {
                    boxShadow: 6,
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={course.image}
                  alt={course.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h6" component="h2">
                    {course.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {course.instructor}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                    <Rating value={course.rating} precision={0.1} readOnly />
                    <Typography variant="body2" sx={{ ml: 1 }}>
                      ({course.rating})
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                      ({course.students.toLocaleString()} students)
                    </Typography>
                  </Box>
                  <Chip
                    label={course.category}
                    size="small"
                    sx={{ mt: 1 }}
                  />
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    component={Link}
                    to={`/course/${course.id}`}
                  >
                    Learn More
                  </Button>
                  <Typography
                    variant="h6"
                    color="primary"
                    sx={{ ml: 'auto', fontWeight: 'bold' }}
                  >
                    ${course.price}
                  </Typography>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Categories */}
      <Box sx={{ bgcolor: 'grey.100', py: 6 }}>
        <Container>
          <Typography variant="h4" gutterBottom>
            Top Categories
          </Typography>
          <Grid container spacing={3}>
            {categories.map((category) => (
              <Grid item xs={6} sm={4} md={3} key={category.name}>
                <Button
                  component={Link}
                  to={`/category/${category.name.toLowerCase()}`}
                  sx={{
                    width: '100%',
                    height: '100%',
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    bgcolor: 'white',
                    borderRadius: 2,
                    boxShadow: 1,
                    '&:hover': {
                      boxShadow: 3,
                    },
                  }}
                >
                  <Typography variant="h3" sx={{ mb: 1 }}>
                    {category.icon}
                  </Typography>
                  <Typography variant="subtitle1">{category.name}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {category.count} courses
                  </Typography>
                </Button>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Why Choose Us */}
      <Container sx={{ py: 6 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Why Choose SkillBridge?
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h2" sx={{ mb: 2 }}>🎓</Typography>
              <Typography variant="h6" gutterBottom>
                Expert Instructors
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Learn from industry experts who are passionate about teaching
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h2" sx={{ mb: 2 }}>📱</Typography>
              <Typography variant="h6" gutterBottom>
                Learn Anywhere
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Access courses on your mobile, tablet, or computer
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h2" sx={{ mb: 2 }}>💼</Typography>
              <Typography variant="h6" gutterBottom>
                Career Ready
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Get job-ready with practical skills and real-world projects
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home; 