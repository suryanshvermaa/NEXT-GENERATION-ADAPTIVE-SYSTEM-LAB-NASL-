import { useState, useCallback, useEffect } from "react";
import axios from "axios";

/**
 * 
 * @param {string} path 
 * @param {object} body 
 * @returns 
 */
export const useDeleteApi = (path,body) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);String

  const fetchData = useCallback(async (controller) => {
    setLoading(true);
    setError(null);
    try {
        await axios.delete(`${import.meta.env.VITE_API_URL}${path}`,body, {
        signal:controller.signal,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
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
  };
};
