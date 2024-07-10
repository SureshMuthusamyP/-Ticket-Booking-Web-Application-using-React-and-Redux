import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchLatestMovies = createAsyncThunk(
  'movies/fetchLatest',
  async () => {
    const response = await axios.get('http://3.17.216.66:4000/latest');
    return response.data;
  }
);

export const fetchUpcomingMovies = createAsyncThunk(
  'movies/fetchUpcoming',
  async () => {
    const response = await axios.get('http://3.17.216.66:4000/upcomingMovies');
    return response.data;
  }
);

export const fetchEvents = createAsyncThunk(
  'movies/fetchEvents',
  async () => {
    const response = await axios.get('http://3.17.216.66:4000/events');
    return response.data;
  }
);

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    latestMovies: [],
    upcomingMovies: [],
    events: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLatestMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchLatestMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.latestMovies = action.payload;
      })
      .addCase(fetchLatestMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchUpcomingMovies.fulfilled, (state, action) => {
        state.upcomingMovies = action.payload;
      })
      .addCase(fetchEvents.fulfilled, (state, action) => {
        state.events = action.payload;
      });
  },
});

export default moviesSlice.reducer;