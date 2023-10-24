import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ISession} from "../models/ISession";

interface queryState {
    date: string,
    isLoading: boolean,
    error: string,
    session: ISession
}

const initialState: queryState = {
    date: new Date().toLocaleDateString("en-CA"),
    session: {
        sessionId: "",
        price: "",
        sessionTime: "",
    },
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
        sessionSave(state, action: PayloadAction<ISession>) {
            state.session = action.payload;
        },
    }
})

export default scheduleSlice.reducer