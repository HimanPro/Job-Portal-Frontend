import { createSlice } from '@reduxjs/toolkit'
let data = JSON.parse(localStorage.getItem('JobPortal'))
console.log(data);
const initialState = {
  login: data ? data.login : false,
  role: data ? data.role : '',
  token: data ? data.token : '',
}
console.log(initialState);

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
   userLogin: (state, action)=>{
   state.login = true
   state.token = action.payload.token
   state.role = action.payload.role
   },
   userLogout: (state, action)=>{
    localStorage.removeItem('JobPortal')
    state.login = false
    state.token = ''
    state.role = ''
   }
  },
})

// Action creators are generated for each case reducer function
export const { userLogin, userLogout } = UserSlice.actions

export default UserSlice.reducer