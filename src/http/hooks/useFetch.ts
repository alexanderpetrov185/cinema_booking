import { useEffect, useState } from "react";
import $api from "../index";
import { IMovie } from "../../redux/models/IMovie";

const useFetch = (endpoint: string) => {
  const [data, setData] = useState<IMovie[]>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await $api.get(endpoint);
        setData(res.data);
      } catch (err: any) {
        setError(err);
      }
      setLoading(false);
    };
    void fetchData();
  }, [endpoint]);

  const reFetch = async () => {
    setLoading(true);
    try {
      const res = await $api.get(endpoint);
      setData(res.data);
    } catch (err: any) {
      setError(err);
    }
    setLoading(false);
  };

  return { data, loading, error, reFetch };
};

export default useFetch;
