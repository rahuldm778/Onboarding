import { configureStore, createSlice, type PayloadAction } from "@reduxjs/toolkit";

type Profile = {
    name: string;
    age: string;
    email: string;
    profilePic: string;
  };
  
  type OnboardingState = {
    loggedIn: boolean;
    step: number;
    completed: boolean;
    profile: Profile;
    songs: string[];
    payment: {
      cardNumber: string;
      expiry: string;
      cvv: string;
    };
  };
  
  const initialState: OnboardingState = JSON.parse(
    localStorage.getItem('onboardingState') || 'null'
  ) || {
    loggedIn: false,
    step: 1,
    completed: false,
    profile: {
      name: '',
      age: '',
      email: '',
      profilePic: '',
    },
    songs: [''],
    payment: {
      cardNumber: '',
      expiry: '',
      cvv: '',
    },
  };
  
  export const onboardingSlice = createSlice({
    name: 'onboarding',
    initialState,
    reducers: {
      loginSuccess(state) {
        state.loggedIn = true;
      },
      updateProfile(state, action: PayloadAction<Profile>) {
        state.profile = action.payload;
      },
      updateSongs(state, action: PayloadAction<string[]>) {
        state.songs = action.payload;
      },
      updatePayment(state, action) {
        state.payment = action.payload;
      },
      nextStep(state) {
        state.step += 1;
      },
      prevStep(state) {
        state.step -= 1;
      },
      completeOnboarding(state) {
        state.completed = true;
      },
    },
  });
  
  export const store = configureStore({
    reducer: {
      onboarding: onboardingSlice.reducer,
    },
  });
  
  store.subscribe(() => {
    localStorage.setItem('onboardingState', JSON.stringify(store.getState().onboarding));
  });