export interface IMovie {
    _id: string
    imdbID: string
    poster: string
    title: string
    genre: string
    trailer: string
    runtime: number
    sessionsDetails: [
        {
            hallNumber: number,
            date: string,
            price: number,
            sessionId: string,
            _id: string
        }
    ]
}