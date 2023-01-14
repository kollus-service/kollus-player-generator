import { create } from "zustand";
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
  payload: {
    cuid: "test",
    expt: Math.round(new Date().getTime() / 1000) + 60 * 60 * 24 * 365 * 100,
    mc: [
      {
        mckey: "9G6jKGi5",
      },
    ],
  },
  advancedOption: false,
  setAdvancedOption: (props) =>
    set((prevState) => {
      return {
        advancedOption: !prevState.advancedOption,
      };
    }),
  setVodInfo: (props) =>
    set((prevState) => {
      let updateInfo = {
        mckey: props.mckey,
        vodSecurity: props.vodSecurity,
        vodCustomer: props.vodCustomer
      }

      if(props.payload) {
        updateInfo.payload = props.payload;
      }

      return updateInfo;
    }),
  setSrc: (props) =>
    set((prevState) => {
      return {
        src: props,
      };
    }),
  generateVodSrc: () =>
    set((prevState) => {
      let info = {
        cuid: prevState.cuid,
        mckey: prevState.mckey,
        vodSecurity: prevState.vodSecurity,
        vodCustomer: prevState.vodCustomer,
        path: prevState.path,
      }

      if(prevState.advancedOption === true) info.payload = prevState.payload;

      return {
        src: generateVodJwt(info),
      };
    }),
}));

export default useInfoStore;
