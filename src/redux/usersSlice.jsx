import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/users`);
      return response.data;
    } catch (error) {
      throw new Error('Kullanıcılar alınamadı');
    }
  }
);

export const login = createAsyncThunk(
  'users/login',
  async ({ username, password }, thunkAPI) => {
    try {
      const users = await thunkAPI.dispatch(fetchUsers()).unwrap();
      const user = users.find(
        (user) => user.username === username && user.password === password
      );

      if (!user) {
        return thunkAPI.rejectWithValue('Geçersiz kullanıcı adı veya şifre');
      }

      
      localStorage.setItem('isLogin', 'true');
      return user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = () => (dispatch) => {
  localStorage.removeItem('isLogin');
  localStorage.removeItem('username');
  localStorage.removeItem('password');
  dispatch({ type: 'users/logout' });
};

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    currentUser: null,
    status: 'idle',
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.currentUser = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.currentUser = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default usersSlice.reducer;
