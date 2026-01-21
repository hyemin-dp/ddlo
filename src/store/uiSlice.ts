import { createSlice } from '@reduxjs/toolkit';

type UIState = {
  showLoginCTA: boolean;
};

const initialState: UIState = {
  showLoginCTA: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleLoginCTA(state) {
      state.showLoginCTA = !state.showLoginCTA;
    },
    setLoginCTA(state, action: { payload: boolean }) {
      state.showLoginCTA = action.payload;
    },
  },
});

export const { toggleLoginCTA, setLoginCTA } = uiSlice.actions;
export default uiSlice.reducer;
