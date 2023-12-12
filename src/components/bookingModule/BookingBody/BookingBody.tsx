// import React, { useState } from "react";
// import { useAppSelector } from "../../redux/hooks/redux";
// import useFetch from "../../http/hooks/useFetch";
// import { saveSelectedSession } from "../../redux/reducers/actionCreators";
// import { useAppDispatch } from "../../redux/hooks/redux";
// import SessionService from "../../http/services/SessionServices";
//
//
// const BookingBody = () => {
//   const hallSchema: { rows: number; columns: number } = {
//     rows: 0,
//     columns: 0,
//   };
//   const dispatch = useAppDispatch();
//   const session = useAppSelector((state) => state.scheduleReducer.session);
//   const { data, reFetch } = useFetch(`/session/${session.sessionId}`);
//   const [selectedSession, setSelectedSession] = useState<string>(
//     session.sessionId,
//   );
//   const [selectedSeat, setSelectedSeat] = useState<object[]>([]);
//
//   const dateDay = new Date(
//     useAppSelector((state) => state.scheduleReducer.date),
//   ).toLocaleDateString("ru");
//
//   if (data.seatsInfo) {
//     const lastChair = data.seatsInfo.at(-1).position.split(" ");
//     hallSchema.rows = Number(lastChair[0]);
//     hallSchema.columns = Number(lastChair[1]);
//   }
//
//   const buyTickets = async (selectedSeat: object[]) => {
//     const seatsIds: string[] = selectedSeat.map<string>(
//       (seat: any) => seat._id,
//     );
//     const res = await SessionService.bookSeat(session.sessionId, seatsIds);
//     if (res.status === 200) {
//       await reFetch();
//       setSelectedSeat([]);
//     }
//     return res.data;
//   };
//
//   const cancelSelect = (seat: any) => {
//     const deletedFromState = selectedSeat.filter(
//       (seatInState) => !Object.is(seatInState, seat),
//     );
//     setSelectedSeat([...deletedFromState]);
//   };
//
//   React.useEffect(() => {
//     setSelectedSeat([]);
//   }, [selectedSession]);
//
//   if (data.seatsInfo) {
//     const lastChair = data.seatsInfo.at(-1).position.split(" ");
//     hallSchema.rows = Number(lastChair[0]);
//     hallSchema.columns = Number(lastChair[1]);
//   }
//
//   const buyTickets = async (selectedSeat: object[]) => {
//     const seatsIds: string[] = selectedSeat.map<string>(
//       (seat: any) => seat._id,
//     );
//     const res = await SessionService.bookSeat(session.sessionId, seatsIds);
//     if (res.status === 200) {
//       await reFetch();
//       setSelectedSeat([]);
//     }
//     return res.data;
//   };
//
//   const cancelSelect = (seat: any) => {
//     const deletedFromState = selectedSeat.filter(
//       (seatInState) => !Object.is(seatInState, seat),
//     );
//     setSelectedSeat([...deletedFromState]);
//   };
//
//   return (
//     <div className="bookingBody">
//       <ul className="availableTime">
//         {details.map((details, index) => {
//           if (new Date(details.date.slice(0, -1)) > nowDate) {
//             return (
//               <li key={index}>
//                 <button
//                   onClick={() => {
//                     setSelectedSession(details.sessionId);
//                     dispatch(
//                       saveSelectedSession({
//                         sessionId: details.sessionId,
//                         price: details.price.toString(),
//                         sessionTime: details.date
//                           .toLocaleString()
//                           .slice(11, -8),
//                       }),
//                     );
//                   }}
//                   className={
//                     details.sessionId === selectedSession
//                       ? "active sessionButton"
//                       : "sessionButton"
//                   }
//                 >
//                   {details.date.toLocaleString().slice(11, -8)}
//                 </button>
//                 <span>{details.price}₽</span>
//               </li>
//             );
//           } else {
//             return null;
//           }
//         })}
//       </ul>
//       <div className="movieSchema">
//         <div className="shortInfo">
//           <span>2D 12+ Зал №{`${data.hallNumber}`}</span>
//           <ul className={"seatsInfo"}>
//             <li>🟢{`${data.price}₽ `}</li>
//             <li>⚫Занято</li>
//           </ul>
//         </div>
//         <img
//           src="/static/images/screen.png"
//           alt="Экран"
//           className="movieScreenImg"
//         />
//         <section className="seatsSchema">
//           {data.seatsInfo &&
//             [...Array(hallSchema.rows)].map((row, index) => {
//               return (
//                 <div className="row" key={index}>
//                   <span>{index + 1}</span>
//                   {data.seatsInfo
//                     .slice(
//                       hallSchema.columns * index,
//                       hallSchema.columns * index + hallSchema.columns,
//                     )
//                     .map((seat: any, index: number) => {
//                       if (seat.available) {
//                         return (
//                           <div
//                             className={
//                               selectedSeat.includes(seat)
//                                 ? "selected seat"
//                                 : "seat"
//                             }
//                             key={seat._id}
//                             onClick={() => {
//                               if (selectedSeat.includes(seat)) {
//                                 cancelSelect(seat);
//                               } else {
//                                 setSelectedSeat([...selectedSeat, seat]);
//                               }
//                             }}
//                           >
//                             {index + 1}
//                           </div>
//                         );
//                       } else {
//                         return (
//                           <div className={"seat unavailable"} key={seat._id}>
//                             ✖
//                           </div>
//                         );
//                       }
//                     })}
//                   <span>{index + 1}</span>
//                 </div>
//               );
//             })}
//         </section>
//         <div className="selectedInfo">
//           <div className="selectedTicketGroup">
//             {selectedSeat.length > 0 &&
//               selectedSeat.map((seat: any, index: number) => {
//                 const seatPosition = seat.position.split(" ");
//                 return (
//                   <div
//                     className="selectedTicket"
//                     key={index}
//                     onClick={() => cancelSelect(seat)}
//                   >
//                     <span>
//                       Ряд {seatPosition[0]}, Место {seatPosition[1]}
//                     </span>
//                     <span>🟢{`${data.price}₽ `}</span>
//                   </div>
//                 );
//               })}
//           </div>
//           <button
//             className="buttonBuy"
//             onClick={() => buyTickets(selectedSeat)}
//           >
//             Купить{" "}
//             {selectedSeat.length > 0 &&
//               ` ${data.price * selectedSeat.length}₽ `}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };
//
// export default BookingBody;
