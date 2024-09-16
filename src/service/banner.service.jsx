import { httpGet } from "./axios.service";

export const GetAllBanners = async () => {
  try {
    let result = await httpGet("/banner", null, true);
    if (result.status) {
      return result;
    } else {
      throw result.message;
    }
  } catch (error) {
    throw error;
  }
};
