import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import sidebarReducer from './SidebarSlice'

export type StoreState = {
    sidebar: boolean
}

const rootReducer = combineReducers({
    sidebar: sidebarReducer,
})

export const store = configureStore({
    reducer: rootReducer,
})

export default store
