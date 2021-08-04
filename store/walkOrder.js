import create from "zustand";

const store = (set) => ({
  order: {},
  setOrder: (orderDetails) => {
    set(() => ({
      walkServices: orderDetails,
    }));
  },
});

export const walkOrderProvider = create(store);
