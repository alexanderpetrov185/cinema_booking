import {AppDispatch} from "../store";
import {userSlice} from "./userSlice";
import AuthService from "../../http/services/AuthService";
import axios from "axios";
import {AuthResponse} from "../models/response/AuthResponse";
import {API_URL} from "../../http";
import {scheduleSlice} from "./scheduleSlice";
import {ISession} from "../models/ISession";

export const loginAction = (email: string, password: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(userSlice.actions.authSending())
        const response = await AuthService.login(email, password)
        localStorage.setItem('token', response.data.accessToken)
        dispatch(userSlice.actions.authSendingSuccess(response.data.user))
    } catch (e: any) {
        dispatch(userSlice.actions.authSendingError(e.response?.data?.message))
    }
}

export const registrationAction = (email: string, password: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(userSlice.actions.authSending())
        const response = await AuthService.registration(email, password)
        localStorage.setItem('token', response.data.accessToken)
        dispatch(userSlice.actions.authSendingSuccess(response.data.user))
    } catch (e: any) {
        dispatch(userSlice.actions.authSendingError(e.response?.data?.message))
    }
}

export const logoutAction = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(userSlice.actions.authSending())
        await AuthService.logout()
        localStorage.removeItem('token')
        dispatch(userSlice.actions.logoutSuccess())
    } catch (e: any) {
        dispatch(userSlice.actions.authSendingError(e.response?.data?.message))
    }
}

export const checkAuth = () => async (dispatch: AppDispatch) => {
    try {
        const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {withCredentials: true})
        localStorage.setItem('token', response.data.accessToken)
        dispatch(userSlice.actions.authSendingSuccess(response.data.user))
    } catch (e: any) {
        dispatch(userSlice.actions.authSendingError(e.response?.data?.message))
    }
}

export const saveSelectedDate = (date: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(scheduleSlice.actions.dateSave(date))
    } catch (e: any) {
        console.log(e)
    }
}

export const saveSelectedSession = (data: ISession) => async (dispatch: AppDispatch) => {
    try {
        dispatch(scheduleSlice.actions.sessionSave(data))
    } catch (e: any) {
        console.log(e)
    }
}