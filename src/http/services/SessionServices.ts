import $api from "../index";
import {AuthResponse} from "../../redux/models/response/AuthResponse";
import {AxiosResponse} from "axios";

export default class SessionService {
    static async bookSeat(sessionId: string, seatsIds: string[]): Promise<AxiosResponse<AuthResponse>> {
        return $api.put<AuthResponse>(`/updateSeats/${sessionId}`, {seatsIds})
    }
}
