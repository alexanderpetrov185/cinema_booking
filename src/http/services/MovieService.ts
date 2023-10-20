import $api from "../index";
import {AxiosResponse} from "axios";
import {IMovie} from "../../redux/models/IMovie";

export default class MovieService {
    static fetchMovies(): Promise<AxiosResponse<IMovie[]>> {
        return $api.get<IMovie[]>('/movies')
    }
}