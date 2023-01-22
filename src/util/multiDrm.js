import CryptoJS from "crypto-js";

// 브라우저 별 지원 타입 리턴
const getStreamingType = () => {
  let browsers = [
    "CriOS",
    "Edge",
    "Edg",
    "Firefox",
    "Chrome",
    "Safari",
    "Opera",
    "MSIE",
    "Trident",
  ];

  let agent = window.navigator.userAgent;
  let userBrowser;

  for (let browser of browsers) {
    if (agent.includes(browser)) {
      userBrowser = browser;
      break;
    }
  }

  let drmType, streamingType;

  switch (userBrowser) {
    case "MSIE":
    case "Trident":
    case "Edge":
    case "Edg":
    case "Opera":
      drmType = "PlayReady";
      streamingType = "dash";
      break;
    case "Chrome":
    case "Firefox":
      drmType = "Widevine";
      streamingType = "dash";
      break;
    case "Safari":
    case "CriOS":
      drmType = "FairPlay";
      streamingType = "hls";
      break;
  }

  if (agent.includes("Macintosh") && agent.includes("Edg")) {
    drmType = "Widevine";
    streamingType = "dash";
  }

  return [drmType, streamingType];
};

const createInkaPayload = async (info) => {
  let timestamp = new Date().toISOString(); // inkaDRM TimeStemp
  let drmType = getStreamingType()[0]; // inkaDRM DRM Type

  let token = {
    playback_policy: {
      limit: true,
      persistent: false,
      duration: 86400,
    },
    allow_mobile_abnormal_device : false,
    playready_security_level : 10,
  };

  token = JSON.stringify(token);
  token = CryptoJS.AES.encrypt(token, CryptoJS.enc.Utf8.parse(info.inkaSiteKey), {
      iv: CryptoJS.enc.Utf8.parse("0123456789abcdef"),
      mode: CryptoJS.mode.CBC,
    }).ciphertext.toString(CryptoJS.enc.Base64);

  let hash = `${info.inkaAccessKey}${drmType}${info.inkaSiteID}${info.cuid}${info.uploadKey}${token}${timestamp}`;
  hash = CryptoJS.SHA256(hash).toString(CryptoJS.enc.Base64);

  let inka_payload = {
    drm_type: drmType,
    site_id: info.inkaSiteID,
    user_id: info.cuid,
    cid: info.uploadKey,
    token: token,
    timestamp: timestamp,
    hash: hash,
  };

  inka_payload = JSON.stringify(inka_payload);
  inka_payload = CryptoJS.enc.Base64.stringify((CryptoJS.enc.Utf8.parse(inka_payload)));

  return inka_payload;
};

module.exports = {
  getStreamingType,
  createInkaPayload,
};
