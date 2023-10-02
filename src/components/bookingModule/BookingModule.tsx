import React from 'react';
import "./bookingModule.scss"
import {ArrowBackIos} from "@mui/icons-material";
import CloseIcon from '@mui/icons-material/Close';

const BookingModule = () => {
    return (
        <div className={"bookingModule"}>
            <div className="bookingHeader">
                <ArrowBackIos className="btnBack"/>
                <div className="bookingInfo">
                    <span className={"bookingTitle"}>Барби / Остановка предсеанс.обслуживание</span>
                    <span>2 октября.Кинотеатр Cinema</span>
                </div>
                <CloseIcon className={"btnClose"}/>
            </div>
            <div className="bookingBody">
                <ul className="availableTime">
                    <li>
                        <button>12:00</button>
                        <span>150₽</span>
                    </li>
                    <li>
                        <button>15:00</button>
                        <span>150₽</span>
                    </li>
                    <li>
                        <button>17:20</button>
                        <span>150₽</span>
                    </li>
                    <li>
                        <button>19:45</button>
                        <span>150₽</span>
                    </li>
                </ul>
                <div className="movieSchema">
                    <div className="shortInfo">
                        <span>2D 12+ Зал 1</span>
                        <ul className={"seatsInfo"}>
                            <li>🟢150₽</li>
                            <li>🔴Занято</li>
                        </ul>
                    </div>
                    <img src="/assets/images/screen.png" alt="Экран" className="movieScreenImg"/>
                    <section className="seatsSchema">
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                    </section>
                    <div className="selectedInfo">
                        <div className="selectedTickets"></div>
                        <button className="buttonBuy"></button>
                    </div>
                </div>
            </div>
            <div className="bookingFooter">
                <span className={"support"}>Поддержка: 8 495 230-01-24</span>
                <button className="needHelp">Мне не пришёл билет</button>
                <span className="credits">2023 ©ООО«Кинокасса»</span>
            </div>
        </div>
    );
};

export default BookingModule;