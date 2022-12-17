import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const SlideBarSlice = createSlice({
    name: 'sidebar',
    initialState: Boolean,
    reducers: {
        toggleSidebar: (state, action: PayloadAction<boolean>) => {
            return action.payload
        },
    },
})

export const { toggleSidebar } = SlideBarSlice.actions
export default SlideBarSlice.reducer
