import create from "zustand";

const useInfoStore = create((set) => ({
  info: {
    cuid: "test",
    mckey: "3zleDxnN",
    security: "catenoid1",
    custom: "a40d063281341497de47a050da5bf80b431842fb9c6300b0fe35a3a1f6cfb2dd",
  },
  setInfo: (props) =>
    set((prevState) => {
      return { mckey: props.mckey, security: props.security, custom: props.custom };
    }),
}));

export default useInfoStore;
