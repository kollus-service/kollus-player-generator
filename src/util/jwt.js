import jwt from "jsonwebtoken";
import multiDrm from "./multiDrm";

const generateVodJwt = (info) => {
  if (
    !info.cuid ||
    !info.vodSecurity ||
    !info.vodCustomer ||
    (!info.mckey && !info.payload)
  )
    return;

  // ??= : 값이 비어있는 경우, s로 할당
  let path = (info.path ??= "s");

  const expt =
    Math.round(new Date().getTime() / 1000) + 60 * 60 * 24 * 365 * 100;

  let payload = (info.payload ??= {
    mc: [
      {
        mckey: info.mckey,
      },
    ],
    cuid: info.cuid,
    expt: expt,
  });

  const token = jwt.sign(payload, info.vodSecurity, {
    algorithm: "HS256",
    expiresIn: payload.expt,
  });

  const customer = info.vodCustomer;

  let result = {
    src: `https://v.kr.kollus.com/${path}?jwt=${token}&custom_key=${customer}&purge_cache`,
    payload: payload,
  };

  return result;
};

const generateMultiDrmVodJwt = async (info) => {
  if (
    !info.cuid ||
    !info.vodSecurity ||
    !info.vodCustomer ||
    (!info.mckey && !info.payload)
  )
    return;

  // ??= : 값이 비어있는 경우, s로 할당
  let path = (info.path ??= "s");

  const expt =
    Math.round(new Date().getTime() / 1000) + 60 * 60 * 24 * 365 * 100;

  const streamType = multiDrm.getStreamingType()[1];
  const inkaPayload = await multiDrm.createInkaPayload(info);

  let payload = info.payload ??= {
    mc: [{
      mckey: info.mckey,
      drm_policy: {
        kind: "inka",
        streaming_type: streamType,
        data: {
          license_url: "https://license.pallycon.com/ri/licenseManager.do",
          certificate_url:
            "https://license.pallycon.com/ri/fpsKeyManager.do?siteId=" +
            info.inkaSiteID,
          custom_header: {
            key: "pallycon-customdata-v2",
            value: inkaPayload,
          },
        },
      }
    }],
    cuid: info.cuid,
    expt: expt,
  };

  const token = jwt.sign(payload, info.vodSecurity, {
    algorithm: "HS256",
    expiresIn: payload.expt,
  });

  const customer = info.vodCustomer;

  let result = {
    src: `https://v.kr.kollus.com/${path}?jwt=${token}&custom_key=${customer}&purge_cache`,
    payload: payload,
  };

  return result;
};

const generateLiveJwt = () => {
  /**
   * @todo 나중에 기능 구현 예정
   */
  return false;
};

module.exports = {
  generateVodJwt,
  generateMultiDrmVodJwt,
  generateLiveJwt,
};
