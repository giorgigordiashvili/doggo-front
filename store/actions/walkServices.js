import { apiCall } from "../../services/api";

const API = "https://api.doggoapp.ge";

export const fetchWalkServices = (store, callback) => {
  return new Promise(() => {
    return apiCall("GET", `${API}/api/walk-services`)
      .then((res) => {
        const isUpdated =
          JSON.stringify(store) !== JSON.stringify(res.services);
        if (!isUpdated) {
          console.log("nothing to update");
          return;
        }
        callback(res.services);
      })
      .catch((err) => {
        console.log(err);
      });
  });
};
