import jwt from "jsonwebtoken";

const generateVodJwt = (info) => {
  if(!info.cuid || !info.vodSecurity || !info.vodCustomer || (!info.mckey && !info.payload) ) return;
  
  // ??= : 값이 비어있는 경우, s로 할당
  let path = info.path ??= 's';
  
  const expt =
    Math.round(new Date().getTime() / 1000) + 60 * 60 * 24 * 365 * 100;

  let payload = info.payload ??= {
    mc: [
      {
        mckey: info.mckey,
      },
    ],
    cuid: info.cuid,
    expt: expt,
  };

  
  const token = jwt.sign(payload, info.vodSecurity, {
    algorithm: "HS256",
    expiresIn: payload.expt,
  });
  
  const customer = info.vodCustomer;
  
  return `https://v.kr.kollus.com/${path}?jwt=${token}&custom_key=${customer}`;
};

const generateLiveJwt = () => {
  /**
   * @todo 나중에 기능 구현 예정
  */
  return false;
};

const generateMultiDrmVodJwt = () => {
  /**
   * @todo 나중에 기능 구현 예정
  */
  return false;
};

module.exports = {
  generateVodJwt,
  generateLiveJwt,
  generateMultiDrmVodJwt
};