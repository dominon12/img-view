import axios, { AxiosRequestHeaders, Method } from "axios";

import { baseUrl } from "./config";

async function makeRequest<T>({
  url = "/",
  method = "GET",
  params = {},
  data = {},
  headers = {},
}: {
  url?: string;
  method?: Method;
  params?: any;
  data?: any;
  headers?: AxiosRequestHeaders;
}) {
  let result: {
    data: T | null;
    error: string | null;
  } = {
    data: null,
    error: null,
  };

  try {
    const res = await axios({
      url: baseUrl + url,
      params,
      method,
      data,
      headers,
    });
    result.data = res.data;
  } catch (e) {
    result.error = (e as Error).toString();
  }
  return result;
}

export default makeRequest;
