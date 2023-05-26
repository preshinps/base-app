import { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";

const useApiService = () => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState<AxiosError | null>(null);

  const get = async (url: string, params = {}) => {
    setLoading(true);
    try {
      const response = await axios.get(url, { params });
      setResponse(response.data);
      setLoading(false);
    } catch (_error) {
      setError(_error as AxiosError<unknown>);
      setLoading(false);
    }
  };

  const post = async (url: string, data: any) => {
    setLoading(true);
    try {
      const response = await axios.post(url, data);
      setResponse(response.data);
      setLoading(false);
    } catch (_error) {
      setError(_error as AxiosError<unknown>);
      setLoading(false);
    }
  };

  return { loading, response, error, get, post };
};

export default useApiService;
