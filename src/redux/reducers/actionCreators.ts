import {AppDispatch} from "../store";
import {userSlice} from "./userSlice";
import AuthService from "../../http/services/AuthService";
import axios from "axios";
import {AuthResponse} from "../models/response/AuthResponse";
import {API_URL} from "../../http";

export const loginAction = (email: string, password: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(userSlice.actions.authSending())
        const response = await AuthService.login(email, password)
        dispatch(userSlice.actions.authSendingSuccess(response.data.accessToken))
    } catch (e: any) {
        dispatch(userSlice.actions.authSendingError(e.response?.data?.message))
    }
}

export const registrationAction = (email: string, password: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(userSlice.actions.authSending())
        const response = await AuthService.registration(email, password)
        dispatch(userSlice.actions.authSendingSuccess(response.data.accessToken))
    } catch (e: any) {
        dispatch(userSlice.actions.authSendingError(e.response?.data?.message))
    }
}

export const logoutAction = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(userSlice.actions.authSending())
        await AuthService.logout()
        dispatch(userSlice.actions.logoutSuccess())
    } catch (e: any) {
        dispatch(userSlice.actions.authSendingError(e.response?.data?.message))
    }
}

export const checkAuth = () => async (dispatch: AppDispatch) => {
    try {
        const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {withCredentials: true})
        dispatch(userSlice.actions.authSendingSuccess(response.data.accessToken))
    } catch (e: any) {
        dispatch(userSlice.actions.authSendingError(e.response?.data?.message))
    }
}