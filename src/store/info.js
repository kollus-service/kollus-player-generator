import create from "zustand";
import { generateJwt } from "../util/jwt";

const useInfoStore = create((set) => ({
  src: "",
  cuid: "test",
  mckey: "3zleDxnN",
  security: "catenoid1",
  customer: "a40d063281341497de47a050da5bf80b431842fb9c6300b0fe35a3a1f6cfb2dd",
  setInfo: (props) =>
    set((prevState) => {
      return {
        mckey: props.mckey,
        security: props.security,
        customer: props.customer,
      };
    }),
    generateSrc: () =>
    set((prevState) => {
      return {
        src: generateJwt({
          cuid: prevState.cuid,
          mckey: prevState.mckey,
          security: prevState.security,
          customer: prevState.customer,
        }),
      };
    }),
}));

export default useInfoStore;
