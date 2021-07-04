import { useState, useEffect } from "react";


const useFetch = (url) => {

  //state handlers
  const [data, setData] = useState(null);
  const [isDataPending, setIsDataPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    fetch(url, {signal: abortCont.signal})
    .then(res => {
      if (!res.ok) {
        throw Error("Something went wrong while loading data");  //handles incoming data error
      }
      return res.json();
    })
    .then(data => {
      setData(data);
      setIsDataPending(false);
      setError(false);
    })
    .catch(error => {
      //handles abort sequence
      if (error.name === "AbortError") {
        console.log("data fetch aborted");
      }
      else {
        //handles connection error/data error
        setIsDataPending(false);
        setError(error.message);
      }

    })

    //fetch abort
    return () => abortCont.abort();
  }, [url])

  return { data, isDataPending, error };
}

export default useFetch;
