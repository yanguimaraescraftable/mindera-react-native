import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import userReducer from './slices/userSlice'
import AsyncStorage from '@react-native-async-storage/async-storage';

import { 
    persistReducer, 
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

const persistUserConfig = {
    key: 'user-root',
    version: 1,
    storage: AsyncStorage
}

const persistedUserReducer = persistReducer(persistUserConfig, userReducer)

const store  = configureStore({
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    reducer: {
        userStore: persistedUserReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ReturnType<typeof store.dispatch>
export const useAppDispatch: () => AppDispatch = useDispatch
export const persistor = persistStore(store)

export default store