import { apiCall } from "../../services/api";
import Toast from "react-native-toast-message";

const API = "https://api.doggoapp.ge";

export const addAddress = (
  id,
  addressData,
  setLoading,
  addresses,
  callback
) => {
  return new Promise(() => {
    return apiCall(
      "POST",
      `${API}/api/customers/${id}/add-address`,
      addressData
    )
      .then((res) => {
        callback([...addresses, addressData]);
        setLoading(false);
        Toast.show({
          text2: "Address added successfully",
          type: "success",
          position: "top",
          visibilityTime: 1500,
          autoHide: true,
          topOffset: 50,
        });
      })
      .catch((err) => {
        console.log(err);
        Toast.show({
          text2: "Address adding failed",
          type: "error",
          position: "top",
          visibilityTime: 1500,
          autoHide: true,
          topOffset: 50,
        });
        setLoading(false);
      });
  });
};

export const updateDefaultAddress = (
  userId,
  addressId,
  addresses,
  setAddresses
) => {
  return new Promise(() => {
    return apiCall(
      "PATCH",
      `${API}/api/customers/${userId}/adresses/${addressId}/set-as-default`
    )
      .then((res) => {
        let newArr = addresses.map((item, key) => {
          if (item.id === addressId) {
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
