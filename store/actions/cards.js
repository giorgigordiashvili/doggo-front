import Toast from "react-native-toast-message";
import { apiCall } from "../../services/api";

const API = "https://api.doggoapp.ge";

export const addCard = (id, returnUri, setPayUrl, setPayId, setLoading) => {
  return apiCall("POST", `${API}/api/customers/${id}/process-card`, {
    return_url: returnUri,
  })
    .then((res) => {
      console.log(res);
      setPayUrl(res.payment_url);
      setPayId(res.pay_id);
      setLoading(false);
    })
    .catch((err) => {
      console.log(err);
      setLoading(false);
    });
};

export const finishProccessing = (id, payId, cards, callback, setLoading) => {
  setLoading(true);
  return apiCall("POST", `${API}/api/customers/${id}/add-card`, {
    pay_id: payId,
  })
    .then((res) => {
      console.log(res);
      Toast.show({
        text2: "Card added successfully",
        type: "success",
        position: "top",
        visibilityTime: 1500,
        autoHide: true,
        topOffset: 50,
      });
      callback([...cards, res.card]);
      setLoading(false);
    })
    .catch((err) => {
      Toast.show({
        text2: "Card adding failed",
        type: "error",
        position: "top",
        visibilityTime: 1500,
        autoHide: true,
        topOffset: 50,
      });
      setLoading(false);
    });
};

export const updateDefaultCard = (userId, cardId, cards, setCards) => {
  return new Promise(() => {
    return apiCall(
      "PATCH",
      `${API}/api/customers/${userId}/cards/${cardId}/set-as-default`
    )
      .then((res) => {
        console.log(res);
        let newArr = cards.map((item, key) => {
          if (item.id === cardId) {
            item = res.card;
          }
        });
        setCards(newArr);
      })
      .catch((err) => {
        console.log(err);
      });
  });
};
