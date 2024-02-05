import { createSlice } from '@reduxjs/toolkit';
import { users } from '../data/userData';

// User Slice
const userSlice = createSlice({
  name: 'user',
  initialState: {
    status: false,
    user: {},
  },
  reducers: {
    // Login
    login: (state) => {
      state.status = true;
      let userDtails = state.user.filter((item) => item.id === 100);

      state.user = {
        ...userDtails,
      };
    },
    // Register
    register: (state, action) => {
      let { firstName, lastName, email, gender, password, phoneNumber } = action.payload;
      state.status = true;
      state.user = {
        ...state.user,
        firstName,
        lastName,
        email,
        gender,
        password,
        phoneNumber,
      };
    },
    // Register
    updatedUser: (state, action) => {
      let { firstName, lastName, email, gender, phoneNumber } = action.payload;
      state.status = true;
      state.user = {
        firstName: firstName,
        lastName: lastName,
        gender: gender,
        email: email,
        phoneNumber: phoneNumber,
      };
    },

    // Logout
    logout: (state) => {
      state.status = false;
      state.user = {};
    },
  },
});

const userReducer = userSlice.reducer;
export default userReducer;
