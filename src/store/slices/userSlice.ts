import { createSlice, PayloadAction } from '@reduxjs/toolkit'


const initialState = {
    user: {
        id: 0,
        username: "",
        email: "",
        firstName: "",
        lastName: "",
        gender: "",
        image: "",
        token: "",
        sub_id: ""
    },
}

const userSlice = createSlice({
    name: 'userStore',
    initialState,
    reducers: {
        updateUser(state, action: PayloadAction<any>){
           state.user = action.payload
        },  
    }
})

export const {updateUser} = userSlice.actions

export default userSlice.reducer