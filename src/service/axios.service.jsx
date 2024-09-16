import axios from "axios";
import { StatusCodes } from "http-status-codes";
import { notify } from "../utilities/helpers";
import { API_URL } from "../constant/constant";

export const http = axios.create({
  baseURL: "http://localhost/9000/api",
  timeout: 30000,
  timeoutErrorMessage: "Server time out", //500 response
  headers: {
    "context-type": "application/json",
  },
});

http.interceptors.response.use((response) => {
  if (response.status === StatusCodes.NOT_FOUND) {
    notify("API does not exists", "error");
  } else if (response.status === StatusCodes.UNAUTHORIZED) {
    notify("Unauthorized access", "error");
  } else if (response.status === StatusCodes.FORBIDDEN) {
    notify("Access denied", "error");
  }

  return response;
});

const getHeaders = (strict) => {
  let headers = {
    "context-type": "application/json",
  };

  if (strict) {
    let token = JSON.parse(localStorage.getItem("intern_token"));
    headers["headers"] = {
      authorization: "Bearer " + token,
    };
  }

  return headers;
};

export const httpPost = async (url, data, is_strict = false) => {
  try {
    let result = await http.post(url, data, getHeaders(is_strict));
    return result.data;
  } catch (error) {
    return error;
  }
};

export const httpGet = async (url, params = null, is_strict = false) => {
  try {
    let headers = getHeaders(is_strict);
    if (params) {
      headers["params"] = params;
    }
    let result = await http.get(url, headers);
    return result.data;
  } catch (error) {
    return error;
  }
};

export const httpPut = async (url, data, is_strict = false) => {
  try {
    let headers = getHeaders(is_strict);
    let result = await http.put(url, data, headers);
    return result.data;
  } catch (error) {
    return error;
  }
};

export const httpDelete = async (url, is_strict = false) => {
  try {
    let headers = getHeaders(is_strict);
    let result = await http.delete(url, headers);
    return result.data;
  } catch (error) {
    return error;
  }
};

export const uploader = (
  url,
  method,
  data,
  field_name,
  file,
  is_strict = false
) => {
  return new Promise((res, rej) => {
    let xmlhttp = new XMLHttpRequest();
    let form_data = new FormData();

    //blob ko lagi
    if (file.length) {
      file.map((image) => {
        form_data.append(field_name, image, image.name);
      });
    }

    //data => {title : "", description : ""}
    Object.keys(data).map((key) => {
      form_data.append(key, data[key]);
    });

    xmlhttp.onreadystatechange = (event) => {
      if (xmlhttp.readyState === 4) {
        // console.log(xmlhttp.response);
        res(JSON.parse(xmlhttp.response));
      }
    };

    xmlhttp.open(method, API_URL + url);
    if (is_strict) {
      let token = JSON.parse(localStorage.get("intern_token"));
      xmlhttp.setRequestHeader(
        "authorization",
        localStorage.getItem("intern_token", token)
      );
    }

    xmlhttp.send(form_data);
  });
};
