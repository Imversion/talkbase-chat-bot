import { fetchMetaScrape } from "../../network/botService/metaScrapeService";
import {
  FETCH_URL_META_DATA,
  FETCH_URL_META_DATA_FAILURE,
  FETCH_URL_META_DATA_SUCCESS,
} from "./actions";

export const fetchMetaScrapeAction = (id , url) => async (dispatch , getState) => {
  dispatch({ type: FETCH_URL_META_DATA });
  try {
    const response = await fetchMetaScrape([url]);
    dispatch({ type: FETCH_URL_META_DATA_SUCCESS, payload: {id:id , response : response[0]}});
  } catch (error) {
    dispatch({ type: FETCH_URL_META_DATA_FAILURE, payload: error.message });
  }
};
