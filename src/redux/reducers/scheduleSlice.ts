import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface queryState {
    date: string,
    isLoading: boolean,
    error: string,
}

const initialState: queryState = {
    date: new Date().toISOString().slice(0, -14),
    isLoading: false,
    error: ""
}

//reducer(slice)
export const scheduleSlice = createSlice({
    name: "date",
    initialState,
    reducers: {
        dateSave(state, action: PayloadAction<string>) {
            state.date = action.payload
        },
    }
})

export default scheduleSlice.reducer