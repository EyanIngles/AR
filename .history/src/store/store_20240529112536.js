import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
    reducer: {
        provider,
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
    serializableCheck: false
})
})