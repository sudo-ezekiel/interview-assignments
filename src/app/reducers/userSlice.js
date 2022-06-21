import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
	jwt: null
}

export const signIn = () => createAsyncThunk(
	console.log('setting jwt'),
	localStorage.setItem('jwt','jwt-mock'),
	
)

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		signOut: (state) => {
			console.log('clearing jwt');
			localStorage.removeItem('jwt');
			return {
				jwt: null
			}
		},
	},
})

export const { signOut } = userSlice.actions

export default userSlice.reducer
