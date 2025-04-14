export const mockData = {
  movies: [
    {
      id: '1',
      title: 'The Shawshank Redemption',
      year: 1994,
      plot: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
      poster: 'https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg',
      producer: {
        id: '1',
        name: 'Frank Darabont',
        gender: 'Male',
        dateOfBirth: '1959-01-28',
        bio: 'Frank Darabont is an American film director, screenwriter and producer.'
      },
      actors: [
        {
          id: '1',
          name: 'Tim Robbins',
          gender: 'Male',
          dateOfBirth: '1958-10-16',
          bio: 'Tim Robbins is an American actor, screenwriter, director, producer, and musician.'
        },
        {
          id: '2',
          name: 'Morgan Freeman',
          gender: 'Male',
          dateOfBirth: '1937-06-01',
          bio: 'Morgan Freeman is an American actor, director, and narrator.'
        }
      ]
    }
  ],
  actors: [
    {
      id: '1',
      name: 'Tim Robbins',
      gender: 'Male',
      dateOfBirth: '1958-10-16',
      bio: 'Tim Robbins is an American actor, screenwriter, director, producer, and musician.'
    },
    {
      id: '2',
      name: 'Morgan Freeman',
      gender: 'Male',
      dateOfBirth: '1937-06-01',
      bio: 'Morgan Freeman is an American actor, director, and narrator.'
    }
  ],
  producers: [
    {
      id: '1',
      name: 'Frank Darabont',
      gender: 'Male',
      dateOfBirth: '1959-01-28',
      bio: 'Frank Darabont is an American film director, screenwriter and producer.'
    }
  ]
}; 