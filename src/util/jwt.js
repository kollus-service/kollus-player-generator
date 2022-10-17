import jwt from "jsonwebtoken";

const generateJwt = (info) => {
  if(!info.mckey || !info.cuid || !info.security || !info.customer) return;
  
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

  const token = jwt.sign(payload, info.security, {
    algorithm: "HS256",
    expiresIn: expt,
  });

  const customer = info.customer;

  return `https://v.kr.kollus.com/s?jwt=${token}&custom_key=${customer}`;
};

module.exports = {
  generateJwt
};