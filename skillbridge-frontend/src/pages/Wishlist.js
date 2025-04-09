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
  Rating,
  IconButton,
} from '@mui/material';
import {
  Delete as DeleteIcon,
  ShoppingCart as CartIcon,
} from '@mui/icons-material';

const Wishlist = () => {
  const wishlistCourses = [
    {
      id: 1,
      title: 'Complete Web Development Bootcamp',
      instructor: 'John Doe',
      rating: 4.7,
      students: 12500,
      price: 129.99,
      originalPrice: 199.99,
      image: '/images/web-dev.jpg',
    },
    {
      id: 2,
      title: 'Python for Data Science',
      instructor: 'Mike Johnson',
      rating: 4.8,
      students: 15000,
      price: 149.99,
      originalPrice: 199.99,
      image: '/images/python-ds.jpg',
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        My Wishlist
      </Typography>

      <Grid container spacing={4}>
        {wishlistCourses.map((course) => (
          <Grid item xs={12} sm={6} md={4} key={course.id}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
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
                  <Rating value={course.rating} precision={0.1} readOnly size="small" />
                  <Typography variant="body2" sx={{ ml: 1 }}>
                    ({course.rating})
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                    ({course.students.toLocaleString()} students)
                  </Typography>
                </Box>
              </CardContent>
              <CardActions>
                <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                  <Typography
                    variant="h6"
                    color="primary"
                    sx={{ fontWeight: 'bold' }}
                  >
                    ${course.price}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ textDecoration: 'line-through', ml: 1 }}
                  >
                    ${course.originalPrice}
                  </Typography>
                  <Box sx={{ ml: 'auto' }}>
                    <IconButton color="primary" size="small">
                      <CartIcon />
                    </IconButton>
                    <IconButton color="error" size="small">
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                </Box>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Wishlist; 