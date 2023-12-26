import { useEffect, useState } from "react";
import $api from "../index";

const useFetch = (endpoint: string) => {
  const [data, setData] = useState<any>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await $api.get(endpoint);
        setData(res.data);
      } catch (err: any) {
        setError(err);
      }
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    };
    void fetchData();
  }, [endpoint]);

  const reFetch = async () => {
    setIsLoading(true);
    try {
      const res = await $api.get(endpoint);
      setData(res.data);
    } catch (err: any) {
      setError(err);
    }
    setIsLoading(false);
  };

  return { data, isLoading, error, reFetch };
};

export default useFetch;
