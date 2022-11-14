import create from "zustand";
import { generateVodJwt } from "../util/jwt";

const useInfoStore = create((set) => ({
  src: "",
  cuid: "test",
  mckey: "9G6jKGi5",
  vodSecurity: "catenoid1",
  vodCustomer:
    "a40d063281341497de47a050da5bf80b431842fb9c6300b0fe35a3a1f6cfb2dd",
  liveSecurity: "catenoid1",
  liveCustomer:
    "a40d063281341497de47a050da5bf80b431842fb9c6300b0fe35a3a1f6cfb2dd",
  path: "s",
  setVodInfo: (props) =>
    set((prevState) => {
      return {
        mckey: props.mckey,
        vodSecurity: props.vodSecurity,
        vodCustomer: props.vodCustomer,
      };
    }),
  setSrc: (props) =>
    set((prevState) => {
      return {
        src: props,
      };
    }),
  generateVodSrc: () =>
    set((prevState) => {
      return {
        src: generateVodJwt({
          cuid: prevState.cuid,
          mckey: prevState.mckey,
          vodSecurity: prevState.vodSecurity,
          vodCustomer: prevState.vodCustomer,
          path: prevState.path,
        }),
      };
    }),
}));

export default useInfoStore;
