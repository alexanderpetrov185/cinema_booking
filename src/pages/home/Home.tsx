import React from "react";
import "./home.scss";
import Slider from "../../components/slider/Slider";
import MovieList from "../../components/movieList/MovieList";
import Schedule from "../../components/schedule/Schedule";
import useFetch from "../../http/hooks/useFetch";
import { useAppSelector } from "../../redux/hooks/redux";

const slides = [
  {
    url: "https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/701fd39b-9391-4a42-bca9-2633c75644bf/1920x",
    title: "Interstellar",
  },
  {
    url: "https://www.thatsmags.com/image/view/201708/____547617fff0f83.jpg",
    title: "Avatar",
  },
  {
    url: "https://favim.com/pd/s4/orig/140417/dreamworks-the-croods-Favim.com-1678834.jpg",
    title: "animation movie",
  },
];

const Home = () => {
  const date = useAppSelector((state) => state.scheduleReducer.date);

  const { data } = useFetch(`/moviesOnDay/${date}`);

  return (
    <div className={"home"}>
      <Slider slides={slides} />
      <div className="contentWrapper">
        <Schedule />
        <MovieList movies={data} />
      </div>
    </div>
  );
};

export default Home;
