import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import {
  Box,
  Button,
  TextField,
  Typography,
  Grid,
  Autocomplete,
} from '@mui/material';
import { addMovie, updateMovie } from './moviesSlice';

const validationSchema = Yup.object({
  title: Yup.string().required('Title is required'),
  year: Yup.number()
    .required('Year is required')
    .min(1888, 'Year must be 1888 or later')
    .max(new Date().getFullYear() + 5, 'Year cannot be more than 5 years in the future'),
  plot: Yup.string().required('Plot is required'),
  poster: Yup.string().url('Must be a valid URL'),
  producer: Yup.object().required('Producer is required'),
  actors: Yup.array().min(1, 'At least one actor is required'),
});

function MovieForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const movie = useSelector((state) =>
    state.movies.movies.find((m) => m.id === id)
  );
  const actors = useSelector((state) => state.actors.actors);
  const producers = useSelector((state) => state.producers.producers);

  const initialValues = {
    title: movie?.title || '',
    year: movie?.year || new Date().getFullYear(),
    plot: movie?.plot || '',
    poster: movie?.poster || '',
    producer: movie?.producer || null,
    actors: movie?.actors || [],
  };

  const handleSubmit = (values) => {
    if (id) {
      dispatch(updateMovie({ id, movieData: values }));
    } else {
      dispatch(addMovie(values));
    }
    navigate('/');
  };

  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        {id ? 'Edit Movie' : 'Add New Movie'}
      </Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, errors, touched, handleChange, handleBlur, setFieldValue }) => (
          <Form>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="title"
                  label="Title"
                  value={values.title}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.title && Boolean(errors.title)}
                  helperText={touched.title && errors.title}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  name="year"
                  label="Year"
                  type="number"
                  value={values.year}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.year && Boolean(errors.year)}
                  helperText={touched.year && errors.year}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  name="poster"
                  label="Poster URL"
                  value={values.poster}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.poster && Boolean(errors.poster)}
                  helperText={touched.poster && errors.poster}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  name="plot"
                  label="Plot"
                  value={values.plot}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.plot && Boolean(errors.plot)}
                  helperText={touched.plot && errors.plot}
                />
              </Grid>
              <Grid item xs={12}>
                <Autocomplete
                  options={producers}
                  getOptionLabel={(option) => option.name}
                  value={values.producer}
                  onChange={(_, newValue) => {
                    setFieldValue('producer', newValue);
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Producer"
                      error={touched.producer && Boolean(errors.producer)}
                      helperText={touched.producer && errors.producer}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Autocomplete
                  multiple
                  options={actors}
                  getOptionLabel={(option) => option.name}
                  value={values.actors}
                  onChange={(_, newValue) => {
                    setFieldValue('actors', newValue);
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Actors"
                      error={touched.actors && Boolean(errors.actors)}
                      helperText={touched.actors && errors.actors}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
                  <Button
                    type="button"
                    variant="outlined"
                    onClick={() => navigate('/')}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" variant="contained" color="primary">
                    {id ? 'Update' : 'Create'} Movie
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </Box>
  );
}

export default MovieForm; 