import { useEffect } from "react";
import UseAppContext from "./UseAppContext";
import axios from "axios";

const UseFetch = ({ url, successAction }) => {
  const abortController = new AbortController();
  const signal = abortController.signal;
  const { dispatch } = UseAppContext();

  const fetchData = async () => {
    const id = Math.floor(Math.random() * 9999);
    try {
      dispatch({
        type: "FETCH_START",
        successActionType: successAction.type,
        taskId: id,
      });
      const res = await axios.get(url, { signal });
      const resData = await res.data;
      dispatch({ ...successAction, payload: resData, taskId: id });
    } catch (err) {
      console.log(err);
      dispatch({ type: "FETCH_FAIL", error: err.message, taskId: id });
    }
  };

  useEffect(() => {
    const asyncDataFetch = async () => {
      if (url) {
        await fetchData();
      }
    };

    asyncDataFetch();

    return () => {
      abortController.abort();
    };
  }, [url, successAction.type]);

  return null;
};

export default UseFetch;
