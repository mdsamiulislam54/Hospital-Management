import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
  GoogleAuthProvider,
} from "firebase/auth";
import auth from "../../../firebase-init";

const initialState = {
  user: {},
  loading: false,
  error: null,
};

export const signInWithEmail = createAsyncThunk(
  "user/signInwithEmail",
  async ({ email, password }) => {
    const userInfo = await signInWithEmailAndPassword(auth, email, password);
    return userInfo.user;
  }
);

export const createUser = createAsyncThunk(
    "user/createUser",
    async ({ name, phone, email, password }) => {
      const userInfo = await createUserWithEmailAndPassword(auth, email, password);
      const user = userInfo.user;
  
      await updateProfile(user, {
        displayName: name,
        phoneNumber: phone,
      });
  

      return {
        uid: user.uid,
        displayName: name,
        email: user.email,
        photoURL: user.photoURL,
      
      };
    }
  );
  

export const signInWithGoogle = createAsyncThunk(
  "user/signInWithGoogle",
  async () => {
    const provider = new GoogleAuthProvider();
    const userInfo = await signInWithPopup(auth, provider);
    return userInfo.user;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.loading = false;
    },
    logOut: (state) => {
      state.user = null;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signInWithEmail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signInWithEmail.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(signInWithEmail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(signInWithGoogle.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signInWithGoogle.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(signInWithGoogle.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(createUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export const { setUser, logOut, setLoading } = userSlice.actions;

export default userSlice.reducer;
