# Movie Catalogue (IMDb-style) — React + Redux Toolkit

A small IMDb-style app for managing movies, actors and producers.

## Features
- **Movies:** list movies and add or edit them through a validated form (Formik).
- **Actors and producers:** browse the people linked to each movie.
- **State management:** Redux Toolkit slices for movies, actors and producers, in one store.
- **UI:** Material UI components with a shared layout and client-side routing.

## Tech
React, Redux Toolkit, React Redux, React Router, Material UI, Formik, Axios.

## Run locally
```bash
npm install
npm start
```

## Project structure
```
src/
  features/movies/      MovieList, MovieForm, moviesSlice
  features/actors/      ActorList, actorsSlice
  features/producers/   ProducerList, producersSlice
  store/                Redux store
  layouts/              MainLayout
```
