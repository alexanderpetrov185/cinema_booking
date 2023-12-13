export interface IFetchBooking {
  _id: string;
  hallNumber: string;
  sessionTime: string;
  price: number;
  seatsInfo: {
    _id: string;
    position: string;
    available: boolean;
  }[];
}
