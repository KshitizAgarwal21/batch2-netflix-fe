import { configureStore } from "@reduxjs/toolkit";

import valueSlice from "../PlayMovie/slice";

const store = configureStore({
  reducer: {
    value: valueSlice,
  },
});

export default store;
