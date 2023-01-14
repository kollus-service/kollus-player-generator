import {create} from "zustand";

const useErrorCodeStore = create((set) => ({
  error: {
    8661: {
      msg: "스마트 폰에서 주로 발생하며, 개발자 옵션 중 [활동보관 안 함] 을 OFF로 설정합니다.",
      url: "https://catenoid-support.atlassian.net/wiki/spaces/SUP/pages/3312005/8661"
    },
    8804: {
      msg: "서버와의 통신이 불안정 합니다.",
      url: "https://catenoid-support.atlassian.net/wiki/spaces/SUP/pages/3311633/8804"
    },
    8613: {
      msg: "Support 링크를 참고 해주세요.",
      url: "https://catenoid-support.atlassian.net/wiki/spaces/SUP/pages/3312197/8613"
    },
    8678: {
      msg : "재생 버튼을 여러 번 클릭해야 하는 경우가 발생될 수 있습니다.",
      url : "https://catenoid-support.atlassian.net/wiki/spaces/SUP/pages/3311931/8678"
    },
    8636: {
      msg : "콘텐츠 인증 혹은 DRM 인증을 제대로 받지 못할 경우 발생할 수 있습니다.",
      url : "https://catenoid-support.atlassian.net/wiki/spaces/SUP/pages/3310603/8636"
    },
    1094995529: {
      msg : "특정 콘텐츠에 이상이 있을 가능성이 높습니다.",
      url : "https://catenoid-support.atlassian.net/wiki/spaces/SUP/pages/3311878/1094995529"
    },
    8673: {
      msg: "기기대수가 초과 되었습니다.",
      url: "https://catenoid-support.atlassian.net/wiki/spaces/SUP/pages/3311626/8673"
    },
    8614: {
      msg: "콘텐츠 정보 확인과정에서 오류가 발생 했습니다.",
      url: "https://catenoid-support.atlassian.net/wiki/spaces/SUP/pages/3310225/8614"
    },
    8658: {
      msg: "컨텐츠 사용이 제한되었습니다.",
      url: "https://catenoid-support.atlassian.net/wiki/spaces/SUP/pages/3312531/8658"
    },
    8749: {
      msg: "네트워크 품질 혹은 속도 손실이 발생 했습니다.",
      url: "https://catenoid-support.atlassian.net/wiki/spaces/SUP/pages/3312206/8749"
    },
    9500: {
      msg : "IE 에서 에러가",
      url : "https://catenoid-support.atlassian.net/wiki/spaces/SUP/pages/3311987/9500"
    },
    8686: {
      msg: "재생시간 혹은 허용된 재생 시간이 초과되었습니다.",
      url: "https://catenoid-support.atlassian.net/wiki/spaces/SUP/pages/3311638/8686"
    },
    8657: {
      msg: "Support 링크를 참고 해주세요.",
      url: "https://catenoid-support.atlassian.net/wiki/spaces/SUP/pages/3311849/8657"
    },
    8655: {
      msg : "인증 정보 확인 과정에서 오류가 발생했습니다.",
      url : "https://catenoid-support.atlassian.net/wiki/spaces/SUP/pages/3311912/8655"
    },
    8672: {
      msg : "사용자 환경-방화벽 정책 및 VPN프로그램 설치가 원인이 될 수 있습니다.",
      url : "https://catenoid-support.atlassian.net/wiki/spaces/SUP/pages/3312067/8672"
    },
    8664: {
      msg: "Kollus Player는 PC의 날짜와 시간이 부정확할 경우 컨텐츠 재생 시 오류가 발생합니다. 날짜/시간을 표준 시간대로 설정해주세요.",
      url: "https://catenoid-support.atlassian.net/wiki/spaces/SUP/pages/3311898/8664"
    },
    8645: {
      msg : "콘텐츠를 삭제 후 다시 다운로드 해주세요.",
      url : "https://catenoid-support.atlassian.net/wiki/spaces/SUP/pages/3312013/8645"
    },
    404: {
      msg : "스크립트가 정상적으로 로딩되지 않았습니다. 콘텐츠를 허용 해주세요.",
      url : "https://catenoid-support.atlassian.net/wiki/spaces/SUP/pages/3310338/404"
    },
    409: {
      msg: "플러그인을 불러오지 못했습니다",
      url: "https://catenoid-support.atlassian.net/wiki/spaces/SUP/pages/3312211/409"
    },
    604: {
      msg : "플레이어 초기화 실패 시 발생할 수 있습니다.",
      url : "https://catenoid-support.atlassian.net/wiki/spaces/SUP/pages/3311668/604"
    },
    1000: {
      msg : "디바이스를 재부팅 후 재시도 합니다.",
      url : "https://catenoid-support.atlassian.net/wiki/spaces/SUP/pages/3312037/1000"
    },
    1007: {
      msg : "캐시 삭제 후 재생기기를 재부팅하고 영상 재생을 시도합니다.",
      url : "https://catenoid-support.atlassian.net/wiki/spaces/SUP/pages/3312329/1007"
    },
    1011: {
      msg : "보안스크립트 오류 시 발생합니다",
      url : "https://catenoid-support.atlassian.net/wiki/spaces/SUP/pages/3311854/1011"
    },
    1016: {
      msg : "Windows N (또는KN) 버전에서 미디어 기능팩이 설치되어 있지 않은 경우 발생합니다.",
      url : "https://catenoid-support.atlassian.net/wiki/spaces/SUP/pages/3311940/1016"
    },
    1017: {
      msg: "영상데이터를 읽어오지 못했습니다.",
      url: "https://catenoid-support.atlassian.net/wiki/spaces/SUP/pages/3312060/1017"
    },
    1022: {
      msg: "콜러스 플레이어의 캐시비우기 이후 재시도 해주세요.",
      url: "https://catenoid-support.atlassian.net/wiki/spaces/SUP/pages/3310623/1022"
    },
    1103: {
      msg : "Support 링크를 참고 해주세요.",
      url : "https://catenoid-support.atlassian.net/wiki/spaces/SUP/pages/3312243/1103"
    },
    2001: {
      msg: "동영상 재생 도중 이를 강제로 종료하였을 경우 에러가 발생됩니다.",
      url: "https://catenoid-support.atlassian.net/wiki/spaces/SUP/pages/3311919/2001+not+found+agent+2001"
    },
    3003: {
      msg : "스마트폰 영상을 TV에 미러링 (Mirroring)하거나 TV OUT 시도 시 해당 에러코드가 발생할 수 있습니다.",
      url : "https://catenoid-support.atlassian.net/wiki/spaces/SUP/pages/3310596/3003"
    },
    3004: {
      msg : "제어판-인터넷 옵션 초기화가 필요합니다. (크롬 브라우저 사용 권장)",
      url : "https://catenoid-support.atlassian.net/wiki/spaces/SUP/pages/3311969/3004"
    },
    3012: {
      msg: "현재 방송 중이 아니거나 방송 신호가 정상적으로 수신되지 않습니다.",
      url: "https://catenoid-support.atlassian.net/wiki/spaces/SUP/pages/3311657/3012"
    },
    4012: {
      msg : "해당 영상이 Flash player로 재생되는 컨텐츠일 경우에 해당하며, 접속한 웹사이트의 호환성 보기 설정을 제거하거나 해제한 뒤 재시도 합니다.",
      url : "https://catenoid-support.atlassian.net/wiki/spaces/SUP/pages/3312021/4012"
    },
    4085: {
      msg : "Support 링크를 참고 해주세요.",
      url: "https://catenoid-support.atlassian.net/wiki/spaces/SUP/pages/3311996"
    },
    8006: {
      msg: "서버에 연결할 수 없습니다",
      url: "https://catenoid-support.atlassian.net/wiki/spaces/SUP/pages/3312287/8006"
    },
    8007: {
      msg: "서버 접속이 원활하지 않거나 모바일의 경우 IP를 할당해 주는 인터넷 장비 쪽의 DNS 설정을 확인 해주세요.",
      url: "https://catenoid-support.atlassian.net/wiki/spaces/SUP/pages/3312221/8007"
    },
    8035: {
      msg: "동영상 시청을 위한 접속서버의 인증 IP가 접속되는지 확인 해주세요.",
      url: "https://catenoid-support.atlassian.net/wiki/spaces/SUP/pages/3312032/8035"
    },
    8056: {
      msg: "방화벽 및 보안 프로그램에 의해 차단되었는지 확인 해주세요.",
      url: "https://catenoid-support.atlassian.net/wiki/spaces/SUP/pages/3312265/8056"
    },
    8066: {
      msg : "Support 링크를 참고 해주세요.",
      url: "https://catenoid-support.atlassian.net/wiki/spaces/SUP/pages/3312216/8066"
    },
    8200: {
      msg : "핫스팟 연결 권장하거나 해당 장소의 네트워크 관리자에게 문의 해주세요.",
      url: "https://catenoid-support.atlassian.net/wiki/spaces/SUP/pages/3311645/8200"
    },
    8302: {
      msg : "Support 링크를 참고 해주세요.",
      url: "https://catenoid-support.atlassian.net/wiki/spaces/SUP/pages/3311673/8302"
    },
    8303: {
      msg : "모바일에서 발생하는 에러코드로, 콜러스 플레이어 앱 설정 내 'SW 코덱 우선' 사용 으로 설정 확인 후 재부팅 한 뒤 확인 해주세요.",
      url: "https://catenoid-support.atlassian.net/wiki/spaces/SUP/pages/3310589/8303+8402"
    },
    8402: {
      msg : "모바일에서 발생하는 에러코드로, 콜러스 플레이어 앱 설정 내 'SW 코덱 우선' 사용 으로 설정 확인 후 재부팅 한 뒤 확인 해주세요.",
      url: "https://catenoid-support.atlassian.net/wiki/spaces/SUP/pages/3310589/8303+8402"
    },
    8305: {
      msg : "프록시 호스트(Proxy Host)를 확인할 수 없을 경우 나타날 수 있습니다.",
      url: "https://catenoid-support.atlassian.net/wiki/spaces/SUP/pages/3311652/8305"
    },
    8400: {
      msg : "미디어 URL의 토큰(token) 유효 시간이 짧아서 발생한 상황입니다. 해당 메시지가 팝업될 경우 브라우저를 리프레쉬(refresh) 한 후 재시도 합니다.",
      url: "https://catenoid-support.atlassian.net/wiki/spaces/SUP/pages/3311763/8400+."
    },
    8403: {
      msg : "Support 링크를 참고 해주세요.",
      url: "https://catenoid-support.atlassian.net/wiki/spaces/SUP/pages/3312231/8403"
    },
    8479: {
      msg : "중복 차단된 동영상 컨텐츠 접속 시 발생할 수 있습니다. DRM 혹은 보안 정책 상 Kollus Player 실행이 가능한 디바이스 대수가 한정되어 있을 수 있습니다.",
      url: "https://catenoid-support.atlassian.net/wiki/spaces/SUP/pages/3311885/8479"
    },
    8481: {
      msg : "DNS 설정 문제로 재생이 되지 않는 경우입니다.",
      url: "https://catenoid-support.atlassian.net/wiki/spaces/SUP/pages/3311873/8481+DNS"
    }
  },
  addErrorCode: (props) =>
    set((prevState) => {
      let addCode = {};
      addCode[props.code] = props.msg;

      return { ...prevState, ...addCode };
    }),
}));

export default useErrorCodeStore;
