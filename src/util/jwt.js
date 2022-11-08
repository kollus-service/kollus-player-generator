import jwt from "jsonwebtoken";

const generateVodJwt = (info) => {
  if(!info.mckey || !info.cuid || !info.vodSecurity || !info.vodCustomer) return;
  
  const expt =
    Math.round(new Date().getTime() / 1000) + 60 * 60 * 24 * 365 * 100;

  let payload = {
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
    expiresIn: expt,
  });

  const customer = info.vodCustomer;

  return `https://v.kr.kollus.com/sr?jwt=${token}&custom_key=${customer}`;
};

const generateLiveJwt = (info) => {
  if(!info.lmckey || !info.cuid || !info.liveSecurity || !info.liveCustomer) return;
  
  const expt =
    Math.round(new Date().getTime() / 1000) + 60 * 60 * 24 * 365 * 100;

  let payload = {
    mc: [
      {
        mckey: info.mckey,
      },
    ],
    client_user_id: info.cuid,
    client_user_name: info.cuid,
    expire_time: expt,
    play_expt: expt,
    live_media_channel_key: info.lmckey,
  };

  const token = jwt.sign(payload, info.liveSecurity, {
    algorithm: "HS256",
    expiresIn: expt,
  });

  const customer = info.liveCustomer;

  return `https://v.kr.kollus.com/s?jwt=${token}&custom_key=${customer}`;
};

const generateMultiDrmVodJwt = (info) => {
  if(!info.mckey || !info.cuid || !info.upkey || !info.vodSecurity || !info.vodCustomer) return;
  
  const expt =
    Math.round(new Date().getTime() / 1000) + 60 * 60 * 24 * 365 * 100;

  let payload = {
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
    expiresIn: expt,
  });

  const customer = info.vodCustomer;

  return `https://v.kr.kollus.com/s?jwt=${token}&custom_key=${customer}`;
};

module.exports = {
  generateVodJwt,
  generateLiveJwt,
  generateMultiDrmVodJwt
};