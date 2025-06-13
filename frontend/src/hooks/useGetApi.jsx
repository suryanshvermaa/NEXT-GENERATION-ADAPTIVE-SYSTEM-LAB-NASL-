import { useState, useCallback, useEffect } from "react";
import axios from "axios";

/**
 *
 * @param {String} path
 */
export const useGetApi = (path) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async (controller) => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}${path}`, {
        signal:controller.signal,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setData(res.data);
      return res.data;
    } catch (err) {
      if(axios.isCancel(err)|| err.name === 'CanceledError') return;
      setError(err);
      return null;
    } finally {
      setLoading(false);
    }
  }, [path]);

  useEffect(() => {
    const controller=new AbortController();
    fetchData(controller);
    return ()=>{
      controller.abort();
    }
  }, [fetchData]);
  return {
    data,
    loading,
    error,
    refetch: fetchData,
  };
};
