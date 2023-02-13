import { create } from "zustand";
import { generateVodJwt, generateMultiDrmVodJwt } from "../util/jwt";

const useInfoStore = create((set, get) => ({
  src: "",
  cuid: "test",
  mckey: "9G6jKGi5",
  vodSecurity: "catenoid1",
  vodCustomer:
  "a40d063281341497de47a050da5bf80b431842fb9c6300b0fe35a3a1f6cfb2dd",
  liveSecurity: "catenoid1",
  liveCustomer:
  "a40d063281341497de47a050da5bf80b431842fb9c6300b0fe35a3a1f6cfb2dd",
  upkey: "",
  inkaAccessKey: "",
  inkaSiteKey: "",
  inkaSiteID: "",
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
  multiDrmOption: false,
  setMultiDrmOption: (props) =>
    set((prevState) => {
      return {
        multiDrmOption: props,
      };
    }),
  advancedOption: false,
  setAdvancedOption: (props) =>
    set((prevState) => {
      return {
        advancedOption: props,
      };
    }),
  setVodInfo: (props) =>
    set((prevState) => {
      let updateInfo = {
        mckey: props.mckey,
        vodSecurity: props.vodSecurity,
        vodCustomer: props.vodCustomer
      }

      if(prevState.multiDrmOption) {
        updateInfo.uploadKey = props.uploadKey;
        updateInfo.inkaAccessKey = props.inkaAccessKey;
        updateInfo.inkaSiteKey = props.inkaSiteKey;
        updateInfo.inkaSiteID = props.inkaSiteID;
      }

      if(prevState.advancedOption) {
        updateInfo.payload = props.payload;
      }

      return updateInfo;
    }),
  setLiveInfo: (props) =>
    set((prevState) => {
      // Live 정보 setter 만들기
    }),
  setSrc: (props) =>
    set((prevState) => {
      return {
        src: props,
      };
    }),
  generateVodSrc: async () => {
    let info = {
      cuid: get().cuid,
      mckey: get().mckey,
      vodSecurity: get().vodSecurity,
      vodCustomer: get().vodCustomer,
      path: get().path,
    }

    if(get().advancedOption === true) info.payload = get().payload;

    let result;
    if (get().multiDrmOption === true) {
      info.uploadKey = get().uploadKey;
      info.inkaAccessKey = get().inkaAccessKey;
      info.inkaSiteKey = get().inkaSiteKey;
      info.inkaSiteID = get().inkaSiteID;
      set(await generateMultiDrmVodJwt(info));
    } else {
      set(await generateVodJwt(info));
    }
  },
  generateLiveSrc: () =>
    set((prevState) => {
      // Live 정보를 사용한 JWT 메서드 추가
    })
}));

export default useInfoStore;
