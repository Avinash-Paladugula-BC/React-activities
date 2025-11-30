import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [data,setData] = useState("");
  const [loading, setLoading] = useState(true);
  const [error,setError] = useState("");

  useEffect(() => {
    fetch(url)
      .then((response)=>{
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  },[url]);
  return {data, loading, error};
}