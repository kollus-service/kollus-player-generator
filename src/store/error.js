import { create } from "zustand";

const useErrorCodeStore = create((set) => ({
  load: false,
  error: false,
  setLoad: (props) =>
    set((prevState) => {
      return {
        load: props,
      };
    }),
  setError: (props) =>
    set((prevState) => {
      return {
        error: props,
      };
    }),
  errorList: {
    19: {
      type: "NO_INIT",
      desc: "초기화 하지 않은 상태에서 해당 기능이 호출된 경우",
      msg: "",
    },
    22: {
      type: "BAD_VALUE",
      desc:
        "URL이 NULL이거나 해당 MediaContentKey로 다운로드된 컨텐츠가 없는 경우",
      msg: "",
    },
    38: {
      type: "INVALID_OPERATION",
      desc: "인자 오류",
      msg: "",
    },
    110: {
      type: "ERROR_CODEC_TIMED_OUT",
      desc: "H/W Codec(OMX)이상동작",
      msg: "",
    },
    1004: {
      type: "ERROR_IO",
      desc: "데이터 사용 오류",
      msg: "",
    },
    1007: {
      type: "ERROR_MALFORMED",
      desc: "URL이 http://나 https://로 시작하지 않는 경우",
      msg: "컨텐츠를 불러오는데 실패했습니다.",
    },
    1010: {
      type: "ERROR_UNSUPPORTED",
      desc: "미지원 컨텐츠",
      msg: "서비스 제공 업체에 문의하여 주시기 바랍니다.",
    },
    1015: {
      type: "ERROR_UNSUPPORTED_DEVICE",
      desc: "미지원 디바이스",
      msg: "지원되지 않는 컨텐츠입니다.",
    },
    1102: {
      type: "ERROR_CODEC_INIT",
      desc:
        "HW Codec 연동이 실패 시 서버로 에러 수집을 위해 있는 값으로 UI상으로는 Notify하지 않음",
      msg: "서비스 제공 업체에 문의해주시기 바랍니다.",
    },
    1103: {
      type: "ERROR_CODEC_DECODE",
      desc: "디코딩 실패 - 고객친화 문구로 대체함",
      msg: "지원되지 않는 단말기입니다. 서비스 제공 업체에 문의해주시기 바랍니다.",
    },
    1105: {
      type: "ERROR_SERVER_BLACK_OUT",
      desc: "블랙아웃",
      msg: "코덱 초기화에 실패하였습니다. 다시 시도해주시기 바랍니다.",
    },
    2001: {
      type: "ERROR_DRM_NO_LICENSE",
      desc: "DRM 프록시 서버 주소가 없거나 인증 실패 시",
      msg: "시스템 초기화로 재시도가 필요합니다.",
    },
    4000: {
      type: "ERROR_NETWORK_CON_BASE",
      desc:
        "네트워크 연결 오류 기본 값 아래에 없는 코드는 Curl 오류에 기본 값을 더한 코드임",
      msg: "현재 방송 중이 아니거나, 방송 신호가 정상적으로 수신되지 않습니다. 잠시 후, 다시 시도해주세요.",
    },
    4103: {
      type: "ERROR_NETWORK_CON_SOCKET_IO",
      desc: "네트워크 연결 시 ERROR_NETWORK_CON_TIMEOUT이외의 오류",
      msg: "",
    },
    4105: {
      type: "ERROR_NETWORK_CON_TIMEOUT",
      desc: "네트워크 연결 타임 아웃",
      msg: "",
    },
    5000: {
      type: "ERROR_NETWORK_SEND_BASE",
      desc: "네트워크 쓰기 오류 기본 값",
      msg: "",
    },
    5005: {
      type: "ERROR_NETWORK_SEND_SOCKET_IO",
      desc: "네트워크 쓰기 오류",
      msg: "",
    },
    6000: {
      type: "ERROR_NETWORK_RECV_BASE",
      desc: "네트워크 읽기 오류 기본 값",
      msg: "",
    },
    6005: {
      type: "ERROR_NETWORK_RECV_SOCKET_IO",
      desc: "네트워크 읽기 오류",
      msg: "",
    },
    "0x80000000": {
      type: "UNKNOWN_ERROR",
      desc: "기타 여러가지 오류",
      msg: "",
    },
    기타: {
      type: "ERROR_UNDEFINED_CODE",
      desc: "기타 에러 메세지를 통합하여 보여주는 메세지",
      msg: "일시적인 오류가 발생하였습니다. 잠시 후 다시 시도해 주세요.",
    },
    1000: {
      type: "ERROR_NOT_RESPONSE_AGENT",
      desc: "Kollus Agent로 요청시 응답이 3초동안 없는 경우",
      msg: "Kollus Agent가 실행되어 있지 않거나 응답이 없습니다.\n잠시 후 재시도 해 주세요.",
    },
    1001: {
      type: "ERROR_UNSUPPORTED_HTML5_VIDEO",
      desc: "HTML5가 지원되지 않을 경우.",
      msg: "현재 사용하시는 브라우저 환경에서 컨텐츠를 재생하실 수 없습니다.\nInternet Explorer 9 버전 이상으로 업그레이드 해주시거나, Chrome, Firefox 등의 브라우저를 통해 접속해주시기 바랍니다.",
    },
    1002: {
      type: "ERROR_CAPUTRE",
      desc: "캡쳐 프로그램이 감지됨",
      msg: "화면 녹화 또는 캡쳐 프로그램이 감지되었습니다. 해당 프로그램을 종료하신 후 다시 시도해주시기 바랍니다.",
    },
    1003: {
      type: "ERROR_TVOUT",
      desc: "TV OUT 감지(HDMI 감지 또는 Device 체크)",
      msg: "외부 디바이스로의 출력 시도가 감지되어 재생을 중단합니다. HDMI 등의 외부 연결을 해제하신 후 다시 시도해주시기 바랍니다.",
    },
    1004: {
      type: "ERROR_CHROME_EXTENTION_CAPTURE",
      desc: "크롬 확장 프로그램 중에 Video Recoder 설치 된 경우",
      msg: "크롬 확장 프로그램에 화면 녹화 또는 캡쳐 프로그램이 감지되었습니다. 해당 프로그램을 제거 후 다시 시도해주시기 바랍니다.",
    },
    1005: {
      type: "ERROR_REMOTE_CONNECT",
      desc: "원격 연결이 되어 있는 경우",
      msg: "원격 연결 프로그램이 감지되었습니다. 해당 프로그램을 종료하신 후 다시 시도해주시기 바랍니다.",
    },
    1011: {
      type: "ERROR_SCRIPT",
      desc: "security script 오류",
      msg: "인증 처리 과정에서 일시적인 오류가 발생하였습니다. 잠시 후 새로고침하여 다시 재생 시도해주세요.",
    },
    1012: {
      type: "ERROR_DUPLICATE_APP",
      desc: "플레이어가 동시에 두개 이상 재생 시도 되는 경우",
      msg: "플레이어를 동시에 하나 이상 실행할 수 없으므로 기존 재생을 종료합니다.",
    },
    1013: {
      type: "ERROR_CONTENTRAGE",
      desc: "서버의 응답이 지연되는 경우 발생.",
      msg: "기본 플레이어(HTML5)를 통한 영상 재생이 원활하지 않습니다.",
    },
    "": {
      type: "",
      desc: "허가되지않은 방법으로 다운로드 요청시 발생",
      msg: "아래의 확인 버튼을 클릭하시어 전용 플레이어를 통해 재생해주시기 바랍니다.",
    },
    1014: {
      type: "ERROR_USERAGENT",
      desc: "user-agent가 동일하지 않을때",
      msg: "",
    },
    1016: {
      type: "ERROR_HTML5_VIDEO_PLAY",
      desc: "HTML5Player가 지원되지 않을 경우.",
      msg: "본 컨텐츠는 전용 플레이어를 통해 재생됩니다. 잠시만 기다려주세요.",
    },
    1017: {
      type: "ERROR_DATA_READ",
      desc: "데이터 읽기 오류",
      msg: "영상 데이터를 읽어오지 못했습니다. 잠시 후 새로고침하여 다시 재생 시도해주세요.",
    },
    1018: {
      type: "ERROR_NETWORK_DISCONNECTED",
      desc: "재생중 Network가 끊겨서 Session이 닫히는 경우",
      msg: "세션 연결이 끊어졌습니다. 브라우저를 새로고침 해주시기 바랍니다.",
    },
    1019: {
      type: "ERROR_VIRTUALMACHINE",
      desc: "가상 머신에서 재생시",
      msg: "가상 머신에서는 영상을 재생하실 수 없습니다.",
    },
    1020: {
      type: "ERROR_BUFFERING_CONTENT",
      desc: "처음 재생시 버퍼링이 계속 발생해서 재생이 불가한 경우",
      msg: "현재 브라우저 환경에서는 영상을 원활하게 재생하실 수 없습니다. 다른 브라우저에서 다시 시도해주시기 바랍니다.",
    },
    1022: {
      type: "ERROR_SCRIPT_REF",
      desc:
        "connect count가 2개 이상이고 15초 동안 동시에 접속 할 때 오류",
      msg: "비정상적인 방법을 통하여 다운로드 하실 수 없습니다.",
    },
    2100: {
      type: "ERROR_DISABLED_BOOKMARK_CONTENT",
      desc: "북마크가 없는 컨텐트에서 북마크 조작 명령을 실행한 경우",
      msg: "북마크가 포함되지 않은 컨텐츠입니다.",
    },
    2101: {
      type: "ERROR_CONTENT_NOT_PREPARED",
      desc: "컨텐트 재생준비가 완료되지 않은 상태에서 컨텐츠 재생 시도",
      msg: "컨텐츠 재생 준비가 완료되지 않았습니다.",
    },
    2102: {
      type: "ERROR_COULD_NOT_SCROLL_MODE",
      desc: "화면을 이동할 수 있는 컨텐트 모드가 아님",
      msg: "현재 모드에서는 화면을 이동할 수 없습니다.",
    },
    2103: {
      type: "ERROR_INCORRECT_BUNDLE_ID",
      desc: "Bundle-ID가 상이함",
      msg: "입력된 Bundle ID가 정확하지 않습니다.",
    },
    2104: {
      type: "ERROR_EXPIRED_AUTH_DATE",
      desc: "SDK 사용기한 만료",
      msg: "SDK 사용기한이 만료되었습니다.",
    },
    2105: {
      type: "ERROR_INCORRECT_AUTH_DATE",
      desc: "SDK 사용기한 입력포맷이 상이함",
      msg: "입력된 SDK 사용기한이 정확하지 않습니다.",
    },
    2106: {
      type: "ERROR_INCORRECT_AUTH_KEY",
      desc: "SDK 인증 키가 상이함",
      msg: "입력된 SDK 인증 키가 정확하지 않습니다.",
    },
    2107: {
      type: "ERROR_NOT_ENOUGH_AUTH_INFO",
      desc: "SDK 인증정보가 모두 입력되지 않았음",
      msg: "SDK 인증을 위한 정보가 모두 입력되지 않았습니다.",
    },
    2108: {
      type: "ERROR_KOLLUS_STORAGE_IS_EMPTY",
      desc:
        "플레이어에 KollusStorage를 설정하지 않고, 재생을 시도한 경우",
      msg: "KollusStorage가 설정되지 않았습니다.",
    },
    2109: {
      type: "ERROR_CONTENT_URL_IS_EMPTY",
      desc:
        "재생할 컨텐츠의 URL또는 index를 설정하지 않고, 재생을 시도한 경우",
      msg: "재생할 컨텐츠의 URL이 설정되지 않았습니다.",
    },
    2110: {
      type: "ERROR_CONTENT_IS_MIRRORING",
      desc: "",
      msg: "",
    },
    2111: {
      type: "ERROR_DISCONNECT_PLAY_SESSION",
      desc: "내장 플레이어에서 Proxy Server와 세션이 끊어지는 경우",
      msg: "재생할 수 없습니다. 다시 재생 시도해주세요.",
    },
    9000: {
      type: "ERROR_ALREADY_DOWNLOADED",
      desc: "다운로드 완료된 파일을 다운로드 시도한 경우",
      msg: "이미 다운로드된 컨텐츠입니다.",
    },
    3000: {
      type: "ERROR_API_CONNECTION",
      desc: "API 호출에 실패할 경우",
      msg: "API 호출에 실패했습니다. 서비스 제공 업체에 문의하여 주시기 바랍니다.",
    },
    3001: {
      type: "MEDIA_ERR_ABORTED",
      desc: "비디오 재생을 취소한 경우",
      msg: "비디오 재생을 취소했습니다.",
    },
    3002: {
      type: "MEDIA_ERR_NETWORK",
      desc: "네트워크 오류",
      msg: "네트워크 오류로 인하여 비디오 일부를 다운로드하지 못 했습니다.",
    },
    3003: {
      type: "MEDIA_ERR_DECODE",
      desc: "지원되지 않는 형식의 미디어 요청",
      msg: "비디오를 로드할 수 없습니다. 서버 혹은 네트워크 오류 때문이거나 지원되지 않는 형식 때문일 수 있습니다.",
    },
    3004: {
      type: "MEDIA_ERR_SRC_NOT_SUPPORTED",
      desc: "브라우저 미지원",
      msg: "비디오 재생이 취소됐습니다. \n비디오가 손상되었거나 비디오가 사용하는 기능을 브라우저에서 지원하지 않는 것 같습니다.",
    },
    3005: {
      type: "MEDIA_ERR_SRC_NOT_SUPPORTED",
      desc: "브라우저 미지원",
      msg: "비디오에 호환되지 않는 소스가 있습니다.",
    },
    3006: {
      type: "ERROR_API_NOT_SUPPORT_BROWSER",
      desc: "API 호출 브라우저(<=IE9) 에러",
      msg: "북마크 기능은 인터넷 익스플로러 10 이상부터 지원합니다.",
    },
    3007: {
      type: "ERROR_CAPTURE_NOT_SUPPORT_BROWSER",
      desc: "화면캡쳐 미지원 브라우저",
      msg: "화면캡쳐 기능은 IE에서는 지원하지 않습니다.",
    },
    3008: {
      type: "ERROR_DUPLICATE_PLAYER",
      desc: "KollusPlayer 중복 재생일 경우",
      msg: "플레이어를 동시에 하나 이상 실행할 수 없으므로 기존 재생을 종료합니다.",
    },
    3012: {
      type: "MEDIA_ERR_LIVE_NOT_BROADCASTING",
      desc: "LIVE 재생을 실패한 경우",
      msg: "현재 방송 중이 아니거나, 방송 신호가 정상적으로 수신되지 않습니다. 잠시 후, 다시 시도해주세요.",
    },
    3013: {
      type: "ERROR_DUPLICATION_BLOCK_OR_EXPIRED_TIME_MEDIA_KEY",
      desc: "중복재생 또는 재생허용시간 초과 차단",
      msg: "ID중복 또는 재생허용시간 초과로 재생을 중단합니다. 페이지 새로고침 후 재시도해 주세요.",
    },
    3014: {
      type: "MEDIA_ERR_SRC_NOT_SUPPORTED",
      desc: "브라우저 미지원",
      msg: "비디오 재생이 취소됐습니다. 비디오가 손상되었거나 비디오가 사용하는 기능을 브라우저에서 지원하지 않는 것 같습니다.",
    },
    3015: {
      type: "ERROR_CONCURRENTLY_VIEWER_LIMIT",
      desc: "동시 시청자 수 제한",
      msg: "시청 가능 인원을 초과하여 재생을 중단합니다.",
    },
    4001: {
      type: "ERROR_INVALID_MEDIA_CONTENT_KEY",
      desc: "미디어 컨텐츠 키가 올바르지 않습니다.",
      msg: "컨텐츠를 불러오는데 실패했습니다. 서비스 제공 업체에 문의하여 주시기 바랍니다.",
    },
    4002: {
      type: "ERROR_INVALID_SECURITY_KEY",
      desc: "보안 키가 올바르지 않습니다.",
      msg: "컨텐츠를 불러오는데 실패했습니다. 서비스 제공 업체에 문의하여 주시기 바랍니다.",
    },
    4003: {
      type: "ERROR_INVALID_CHANNEL_KEY",
      desc: "채널 키가 올바르지 않습니다.",
      msg: "컨텐츠를 불러오는데 실패했습니다. 서비스 제공 업체에 문의하여 주시기 바랍니다.",
    },
    4004: {
      type: "ERROR_INVALID_USER_KEY",
      desc: "사용자 키가 올바르지 않습니다.",
      msg: "컨텐츠를 불러오는데 실패했습니다. 서비스 제공 업체에 문의하여 주시기 바랍니다.",
    },
    4005: {
      type: "ERROR_INVALID_TRANSCODING_FILE_PATH",
      desc: "동영상 파일의 물리 경로가 올바르지 않습니다.",
      msg: "컨텐츠를 불러오는데 실패했습니다. 서비스 제공 업체에 문의하여 주시기 바랍니다.",
    },
    4006: {
      type: "ERROR_INVALID_ALIAS_KEY",
      desc: "알리아스 키가 올바르지 않습니다.",
      msg: "컨텐츠를 불러오는데 실패했습니다. 서비스 제공 업체에 문의하여 주시기 바랍니다.",
    },
    4007: {
      type: "ERROR_INVALID_JWT",
      desc: "JSON 토큰이 올바르지 않습니다.",
      msg: "컨텐츠를 불러오는데 실패했습니다. 서비스 제공 업체에 문의하여 주시기 바랍니다.",
    },
    4008: {
      type: "ERROR_INVALID_MEDIA_TOKEN",
      desc: "미디어 토큰이 올바르지 않습니다.",
      msg: "컨텐츠를 불러오는데 실패했습니다. 서비스 제공 업체에 문의하여 주시기 바랍니다.",
    },
    4011: {
      type: "ERROR_NO_TRANSCODING_FILE",
      desc: "동영상 파일이 존재하지 않습니다.",
      msg: "컨텐츠를 불러오는데 실패했습니다. 서비스 제공 업체에 문의하여 주시기 바랍니다.",
    },
    4012: {
      type: "ERROR_NO_MEDIA_CONTENT",
      desc: "동영상이 존재하지 않습니다.",
      msg: "컨텐츠를 불러오는데 실패했습니다. 서비스 제공 업체에 문의하여 주시기 바랍니다.",
    },
    4013: {
      type: "ERROR_NO_CONTENT_OWNER",
      desc: "컨텐츠 공급자가 존재하지 않습니다.",
      msg: "컨텐츠를 불러오는데 실패했습니다. 서비스 제공 업체에 문의하여 주시기 바랍니다.",
    },
    4014: {
      type: "ERROR_NO_CONTENT_DISTRIBUTOR",
      desc: "컨텐츠 공급자가 존재하지 않습니다.",
      msg: "컨텐츠를 불러오는데 실패했습니다. 서비스 제공 업체에 문의하여 주시기 바랍니다.",
    },
    4015: {
      type: "ERROR_NO_CHANNEL",
      desc: "채널이 존재하지 않습니다.",
      msg: "컨텐츠를 불러오는데 실패했습니다. 서비스 제공 업체에 문의하여 주시기 바랍니다.",
    },
    4016: {
      type: "ERROR_NO_PAYMENT",
      desc: "과금 이력이 존재하지 않아 서비스가 중지되었습니다.",
      msg: "컨텐츠를 불러오는데 실패했습니다. 서비스 제공 업체에 문의하여 주시기 바랍니다.",
    },
    4019: {
      type: "ERROR_NO_DEFAULT_MAIN_SITE",
      desc: "서비스 제공자 설정에 오류가 발생하였습니다.",
      msg: "컨텐츠를 불러오는데 실패했습니다. 서비스 제공 업체에 문의하여 주시기 바랍니다.",
    },
    4020: {
      type: "ERROR_NO_MAIN_MEDIA_CONTENT",
      desc: "인트로 요청 내에 본 컨텐츠가 존재하지 않습니다.",
      msg: "컨텐츠를 불러오는데 실패했습니다. 서비스 제공 업체에 문의하여 주시기 바랍니다.",
    },
    4021: {
      type: "ERROR_UNAVAILABLE_TRANSCODING_FILE",
      desc: "동영상 파일이 서비스 중지되었습니다.",
      msg: "컨텐츠를 불러오는데 실패했습니다. 서비스 제공 업체에 문의하여 주시기 바랍니다.",
    },
    4022: {
      type: "ERROR_UNAVAILABLE_MEDIA_CONTENT",
      desc: "동영상이 서비스 중지되었습니다.",
      msg: "컨텐츠를 불러오는데 실패했습니다. 서비스 제공 업체에 문의하여 주시기 바랍니다.",
    },
    4023: {
      type: "ERROR_UNAVAILABLE_CONTENT_OWNER",
      desc: "컨텐츠 공급자가 서비스 중지되었습니다.",
      msg: "컨텐츠를 불러오는데 실패했습니다. 서비스 제공 업체에 문의하여 주시기 바랍니다.",
    },
    4024: {
      type: "ERROR_UNAVAILABLE_CONTENT_DISTRIBUTOR",
      desc: "컨텐츠 공급자가 서비스 중지되었습니다.",
      msg: "컨텐츠를 불러오는데 실패했습니다. 서비스 제공 업체에 문의하여 주시기 바랍니다.",
    },
    4025: {
      type: "ERROR_UNAVAILABLE_CHANNEL",
      desc: "채널이 서비스 중지되었습니다.",
      msg: "컨텐츠를 불러오는데 실패했습니다. 서비스 제공 업체에 문의하여 주시기 바랍니다.",
    },
    4026: {
      type: "ERROR_UNAVAILABLE_CHANNEL_DISTRIBUTION",
      desc: "위임된 채널이 서비스 중지되었습니다.",
      msg: "컨텐츠를 불러오는데 실패했습니다. 서비스 제공 업체에 문의하여 주시기 바랍니다.",
    },
    4031: {
      type: "ERROR_NOT_ALLOWED_REFERER",
      desc: "이 동영상은 제한된 도메인에서만 재생되도록 설정되었습니다.",
      msg: "본 컨텐츠는 허용되지 않은 도메인에서 재생하실 수 없습니다.",
    },
    4032: {
      type: "ERROR_NOT_ALLOWED_ACCESS_FOR_BLOCKING_CAPTURE",
      desc:
        "귀하는 무단 캡쳐 시도로 인해 서비스 담당자로부터 컨텐츠 접근이 차단된 상태입니다.자세한 내용은 담당자에게 문의 주시기 바랍니다.",
      msg: "귀하는 무단 캡쳐 시도로 인해 서비스 담당자로부터 컨텐츠 접근이 차단된 상태입니다. 자세한 내용은 서비스 제공 업체에 문의하여 주시기 바랍니다.",
    },
    4081: {
      type: "ERROR_NOT_PUBLIC_SHARED_CHANNEL",
      desc: "공개 컨텐츠가 아닙니다.",
      msg: "컨텐츠를 불러오는데 실패했습니다. 서비스 제공 업체에 문의하여 주시기 바랍니다.",
    },
    4082: {
      type: "ERROR_MISMATCH_USER_KEY",
      desc: "사용자 키가 설정된 것과 일치하지 않습니다.",
      msg: "컨텐츠를 불러오는데 실패했습니다. 서비스 제공 업체에 문의하여 주시기 바랍니다.",
    },
    4083: {
      type: "ERROR_ACCESS_WITHOUT_MEDIA_CONTENT_KEY",
      desc: "재생 요청이 올바르지 않습니다.",
      msg: "컨텐츠를 불러오는데 실패했습니다. 서비스 제공 업체에 문의하여 주시기 바랍니다.",
    },
    4084: {
      type: "ERROR_NOT_SUPPORT_DEVICE",
      desc: "이 동영상은 사용자의 기기에서 재생할 수 없습니다.",
      msg: "본 디바이스에서 재생할 수 없는 컨텐츠입니다. 서비스 제공 업체에 문의하여 주시기 바랍니다.",
    },
    4085: {
      type: "ERROR_TOKEN_EXPIRED",
      desc: "재생토큰이 만료되었습니다. 다시 시도하여 주십시요.",
      msg: "재생 가능한 유효시간이 지났습니다. 다시 시도하여 주시기 바랍니다.",
    },
    4100: {
      type: "ERROR_LOAD_SKIN_TEMPLETE",
      desc: "SkinTemplete SWF 로드 에러.",
      msg: "Skin Template을 불러오지 못했습니다.",
    },
    4101: {
      type: "ERROR_LOAD_SETTING_PANNEL",
      desc: "SettingPannel SWF 로드 에러.",
      msg: "Setting Pannel을 불러오지 못했습니다.",
    },
    4012: {
      type: "",
      desc: "VOD 재생을 실패한 경우",
      msg: "서버 오류가 발생했습니다. 잠시 후 재시도 해 주세요.",
    },
    4013: {
      type: "",
      desc: "LIVE 재생을 실패한 경우",
      msg: "현재 방송 중이 아니거나, 방송 신호가 정상적으로 수신되지 않습니다. 다시 시도해 주세요.",
    },
    7000: {
      type: "ERROR_MULTI_DRM_EXPIRED",
      desc: "재생중 컨텐츠의 사용기간이 만료된 경우",
      msg: "허용된 재생 시간이 초과되어 재생을 종료합니다.",
    },
    7001: {
      type: "ERROR_INVALID_CRYPTO_KEY",
      desc: "컨텐츠의 Crypto Key가 맞지 않는 경우",
      msg: "컨텐츠를 불러오는데 실패했습니다. 서비스 제공 업체에 문의하여 주시기 바랍니다.",
    },
    7002: {
      type: "ERROR_MULTI_DRM_EXPIRED_DOWNLOAD",
      desc: "다운로드 컨텐츠의 재생 허용기간이 만료된 경우",
      msg: "재생기간이 만료된 컨텐츠 입니다. 삭제 후 다시 다운로드 해 주세요.",
    },
    7028: {
      type: "ERROR_MULTI_DRM_OPERATION_TIMEDOUT",
      desc: "서버 연결중에 일정시간 동안 응답이 없는 경우",
      msg: "서버와의 통신이 불안정 합니다. 네트워크 상태를 확인 후 다시 재생 시도해 주세요.",
    },
    7101: {
      type: "ERROR_LICENSE_SERVER_CONNECTION_FAIL",
      desc: "FPS 라이센스 서버 접속 실패",
      msg: "서버와의 통신이 불안정 합니다. 네트워크 상태를 확인 후 다시 재생 시도해 주세요.",
    },
    7102: {
      type: "ERROR_LICENSE_SERVER_NETWORK",
      desc: "FPS 라이센스 서버 네트워크 에러",
      msg: "서버와의 통신이 불안정 합니다. 네트워크 상태를 확인 후 다시 재생 시도해 주세요.",
    },
    7103: {
      type: "ERROR_ACQUIRE_LICENSE_FAIL_FROME_SERVER",
      desc: "FPS 라이센스 서버로부터 얻지 못한 경우",
      msg: "인증 정보 확인 과정에서 오류가 발생하였습니다. 컨텐츠 제공업체 홈페이지 관리자에게 문의해주세요.",
    },
    7104: {
      type: "ERROR_LICENSE_DATABASE_PROCESS",
      desc: "FPS 데이터베이스 작업중 에러",
      msg: "인증 정보 확인 과정에서 오류가 발생하였습니다. 컨텐츠 제공업체 홈페이지 관리자에게 문의해주세요.",
    },
    7105: {
      type: "ERROR_LICENSE_SEVER_INTERNAL_EXCEPTION",
      desc: "FPS 라이센스 처리중 알 수 없는 에러",
      msg: "인증 정보 확인 과정에서 오류가 발생하였습니다. 컨텐츠 제공업체 홈페이지 관리자에게 문의해주세요.",
    },
    7106: {
      type: "ERROR_FPS_DOWNLOAD_UNKNOWN",
      desc: "FPS 다운로드 중 알 수 없는 에러",
      msg: "서버와의 통신이 불안정 합니다. 네트워크 상태를 확인 후 다시 재생 시도해 주세요.",
    },
    7107: {
      type: "ERROR_FPS_DOWNLOAD_NETWORK",
      desc: "FPS 다운로드 에러",
      msg: "서버와의 통신이 불안정 합니다. 네트워크 상태를 확인 후 다시 재생 시도해 주세요.",
    },
    7108: {
      type: "ERROR_FPS_DOWNLOAD_NOT_SUPPORT",
      desc: "FPS 다운로드를 지원하지 않는 iOS 버전",
      msg: "해당 컨텐츠는 iOS 11 이상에서만 다운로드가 가능합니다.",
    },
    7109: {
      type: "ERROR_WIDEVINE_NOT_SUPPORT",
      desc:
        "Widevine을 지원하지 않는 Android 버전 (재생, 다운로드 불가)",
      msg: "해당 컨텐츠는 Android 5.0 이상에서만 사용이 가능합니다.",
    },
    8400: {
      type: "ERROR_BAD_REQUEST",
      desc: "",
      msg: "컨텐츠를 불러오는데 실패했습니다. 서비스 제공 업체에 문의하여 주시기 바랍니다.",
    },
    8401: {
      type: "ERROR_UNAUTHORIZED_1",
      desc: "",
      msg: "컨텐츠를 불러오는데 실패했습니다. 서비스 제공 업체에 문의하여 주시기 바랍니다.",
    },
    8402: {
      type: "ERROR_UNAUTHORIZED_2",
      desc: "",
      msg: "컨텐츠를 불러오는데 실패했습니다. 서비스 제공 업체에 문의하여 주시기 바랍니다.",
    },
    8404: {
      type: "ERROR_NOT_EXIST_FILE",
      desc: "",
      msg: "컨텐츠를 불러오는데 실패했습니다. 서비스 제공 업체에 문의하여 주시기 바랍니다.",
    },
    8500: {
      type: "ERROR_INTERNAL_SERVER",
      desc: "",
      msg: "컨텐츠를 불러오는데 실패했습니다. 서비스 제공 업체에 문의하여 주시기 바랍니다.",
    },
    8501: {
      type: "ERROR_NOT_IMPLEMENTED",
      desc: "",
      msg: "컨텐츠를 불러오는데 실패했습니다. 서비스 제공 업체에 문의하여 주시기 바랍니다.",
    },
    8502: {
      type: "ERROR_BAD_GATEWAY",
      desc: "",
      msg: "컨텐츠를 불러오는데 실패했습니다. 서비스 제공 업체에 문의하여 주시기 바랍니다.",
    },
    8503: {
      type: "ERROR_SERVICE_UNAVAILABLE",
      desc: "",
      msg: "서버 점검 중입니다. 잠시 후에 다시 시도해주시기 바랍니다.",
    },
    8504: {
      type: "ERROR_GATEWAY_TIMEOUT",
      desc: "",
      msg: "서버 점검 중입니다. 잠시 후에 다시 시도해주시기 바랍니다.",
    },
    8505: {
      type: "ERROR_HTTP_VERSION_NOT_SUPPORTED",
      desc:
        "브라우저의 설정에 Http1.1 설정이 되어 있는지 확인 필요합니다.",
      msg: "컨텐츠를 불러오는데 실패했습니다. 서비스 제공 업체에 문의하여 주시기 바랍니다.",
    },
    8461: {
      type: "ERROR_REQUEST_URL",
      desc: "",
      msg: "알 수 없는 형식의 URL입니다.",
    },
    8462: {
      type: "ERROR_GET_USER_IP",
      desc: "",
      msg: "사용자의 IP를 확인할 수 없습니다.",
    },
    8463: {
      type: "ERROR_ACCESS_DENIED_FOLDER",
      desc: "",
      msg: "접근 권한이 없는 컨텐츠 또는 폴더입니다.",
    },
    8464: {
      type: "ERROR_DUPLICATION_BLOCK_PROCESS",
      desc: "",
      msg: "사용 가능한 기기 대수가 초과되었습니다.",
    },
    "": {
      type: "",
      desc: "",
      msg: "관리자에게 문의해주세요.",
    },
    8465: {
      type: "ERROR_VERIFY_MEDIA_KEY",
      desc: "",
      msg: "미디어 키 오류가 발생했습니다.",
    },
    8466: {
      type: "ERROR_REQEST_URL_BLOCK",
      desc: "",
      msg: "요청한 컨텐츠가 차단되었습니다.",
    },
    8467: {
      type: "ERROR_MEDIA_KEY_TIME_EXPIRE",
      desc: "",
      msg: "미디어 키 유효기간이 만료되었습니다.",
    },
    8468: {
      type: "ERROR_MEDIA_DOMAIN_VALIDATE",
      desc: "",
      msg: "미디어 도메인이 정확하지 않습니다.",
    },
    8469: {
      type: "ERROR_HEAVY_REQUEST",
      desc: "",
      msg: "서버 과부하가 발생했습니다. 잠시 후 재시도 해 주세요.",
    },
    8470: {
      type: "ERROR_PLYMENT",
      desc: "",
      msg: "과금 오류가 발생했습니다.",
    },
    8471: {
      type: "ERROR_GEO_RESTRICTION",
      desc: "",
      msg: "해당 국가에서 재생할 수 없는 컨텐츠입니다.",
    },
    8472: {
      type: "ERROR_PREVIEW_ERROR",
      desc: "",
      msg: "미리보기가 실패했습니다.",
    },
    8473: {
      type: "ERROR_USER_KEY",
      desc: "",
      msg: "사용자 키 오류가 발생했습니다.",
    },
    8474: {
      type: "ERROR_CONTENT_NOT_PUBLIC_CHANNEL",
      desc: "",
      msg: "공개 컨텐츠가 아닙니다.",
    },
    8475: {
      type: "ERROR_USED_MEDIA_KEY",
      desc: "",
      msg: "미디어 키가 사용중 입니다.",
    },
    8476: {
      type: "ERROR_MAX_REQUEST_SIZE",
      desc: "",
      msg: "인증 확인 최대 Request 길이를 초과했습니다.",
    },
    8477: {
      type: "ERROR_DIFFERENT_ES_KEY",
      desc: "",
      msg: "비정상적인 요청입니다.",
    },
    8478: {
      type: "ERROR_ACCESS_DENIED_MEMCACHE_SERVER",
      desc: "",
      msg: "서버에 연결할 수 없습니다. 잠시 후 재시도 해 주세요.",
    },
    8479: {
      type: "ERROR_DUPLICATION_BLOCK_MEDIA_KEY",
      desc: "",
      msg: "동일한 아이디로 중복 로그인되어 재생을 중단합니다.",
    },
    8480: {
      type: "ERROR_NOT_NORMAL_REQUEST_VIDEO_GATEWAY",
      desc: "",
      msg: "정상적인 접근 경로가 아닙니다.",
    },
    8481: {
      type: "ERROR_EDGE_RADIS_WRITING",
      desc: "",
      msg: "서버 오류가 발생했습니다. 잠시 후 재시도 해 주세요.",
    },
    8482: {
      type: "ERROR_EDGE_RADIS_READING",
      desc: "",
      msg: "서버 오류가 발생했습니다. 잠시 후 재시도 해 주세요.",
    },
    8006: {
      type: "ERROR_CURLE_COULDNT_RESOLVE_HOST",
      desc: "서버 HOST 리졸빙 실패시 발생",
      msg: "서버에 연결할 수 없습니다. 네트워크를 확인 후 재시도 해 주세요.",
    },
    8007: {
      type: "ERROR_CURLE_COULDNT_CONNECT",
      desc: "서버에 연결 실패시",
      msg: "서버에 연결할 수 없습니다. 네트워크를 확인 후 재시도 해 주세요.",
    },
    8018: {
      type: "ERROR_CURLE_PARTIAL_FILE",
      desc:
        "서버에 요청한 사이즈와 응답으로 받은 데이터의 사이즈가 상이한 경우",
      msg: "네트워크 환경이 불안정하여 데이터 수신에 실패하였습니다.",
    },
    8023: {
      type: "ERROR_CURLE_WRITE_ERROR",
      desc: "서버에서 전송받은 데이터를 파일로 저장하기 실패한 경우",
      msg: "",
    },
    8028: {
      type: "ERROR_CURLE_OPERATION_TIMEDOUT",
      desc: "서버 연결중에 일정시간 동안 응답이 없는 경우",
      msg: "서버와의 통신이 불안정 합니다. 네트워크 상태를 확인 후 다시 재생 시도해 주세요.",
    },
    8056: {
      type: "ERROR_CURLE_RECV_ERROR",
      desc: "서버 연결하여 응닫을 받는 도중 실패시",
      msg: "네트워크 상태를 확인하신 후 재시도 해 주세요.",
    },
    8600: {
      type: "ERROR_CREATE_DIRECTORY",
      desc: "단말에 컨텐츠를 저장할 디렉토리 생성 실패",
      msg: "파일 접근에 실패했습니다. 설정에서 저장소 위치를 확인해 주세요.",
    },
    8601: {
      type: "ERROR_CREATE_FILE",
      desc: "파일 생성 실패",
      msg: "파일 접근에 실패했습니다. 설정에서 저장소 위치를 확인해 주세요.",
    },
    8602: {
      type: "ERROR_SAVE_DATA",
      desc: "파일 데이타 저장 실패",
      msg: "파일 접근에 실패했습니다. 설정에서 저장소 위치를 확인해 주세요.",
    },
    8603: {
      type: "ERROR_OPEN_DB",
      desc: "DB 파일을 열기 실패",
      msg: "DB 오류가 발생했습니다. 설정에서 저장소 위치를 확인해 주세요.",
    },
    8604: {
      type: "ERROR_CREATE_TABLE",
      desc: "DB 테이블 생성 실패",
      msg: "DB 오류가 발생했습니다. 설정에서 저장소 위치를 확인해 주세요.",
    },
    8605: {
      type: "ERROR_SELECT_TABLE",
      desc: "DB 테이블 select 실패",
      msg: "DB 오류가 발생했습니다. 설정에서 저장소 위치를 확인해 주세요.",
    },
    8606: {
      type: "ERROR_DELETE_RECORD",
      desc: "DB 레코드 삭제 실패",
      msg: "DB 오류가 발생했습니다. 설정에서 저장소 위치를 확인해 주세요.",
    },
    8607: {
      type: "ERROR_INSERT_RECORD",
      desc: "DB 레코드 추가 실패",
      msg: "DB 오류가 발생했습니다. 설정에서 저장소 위치를 확인해 주세요.",
    },
    8608: {
      type: "ERROR_OPEN_FILE",
      desc: "파일 열기 실패",
      msg: "파일 접근에 실패했습니다. 설정에서 저장소 위치를 확인해 주세요.",
    },
    8609: {
      type: "ERROR_OUT_OF_MEMORY",
      desc: "메모리 부족",
      msg: "메모리가 부족합니다. 사용하지 않는 어플리케이션을 종료후 재시도 해 주세요.",
    },
    8610: {
      type: "ERROR_READ_FILE",
      desc: "파일 읽기 실패",
      msg: "파일 접근에 실패했습니다. 설정에서 저장소 위치를 확인해 주세요.",
    },
    8611: {
      type: "ERROR_WRITE_FILE",
      desc: "파일 쓰기 실패",
      msg: "파일 접근에 실패했습니다. 설정에서 저장소 위치를 확인해 주세요.",
    },
    8613: {
      type: "ERROR_PARAM_VALUE",
      desc:
        "엣지 서버로 부터 얻은 컨텐츠 길이가 음수일때 V3 HTML5 Player를 지원하지 않는 브라우저에서 재생시도 시",
      msg: "컨텐츠 정보 확인 과정에서 오류가 발생하였습니다.",
    },
    8614: {
      type: "ERROR_NOT_LOAD",
      desc:
        "사용하고자 하는 컨텐츠에 대해 load 함수를 호출후 사용할 API를 load 전에 호출시",
      msg: "컨텐츠 정보 확인 과정에서 오류가 발생하였습니다.",
    },
    8615: {
      type: "ERROR_CANCEL_DOWNLOAD",
      desc: "파일 다운로드 중에 취소시",
      msg: "일시적인 오류가 발생하였습니다. 잠시 후 다시 시도해 주세요.",
    },
    8617: {
      type: "ERROR_GET_CONTENTS_LENGTH",
      desc: "엣지 서버로 부터 얻은 컨텐츠 길이가 음수일때",
      msg: "컨텐츠 정보 확인 과정에서 오류가 발생하였습니다.",
    },
    8618: {
      type: "ERROR_GET_ENCODE_LEVEL",
      desc:
        "엣지 서버로 부터 얻은 컨텐츠 인코딩 레밸 정보가 유효하지 않을때",
      msg: "컨텐츠 정보 확인 과정에서 오류가 발생하였습니다.",
    },
    8619: {
      type: "ERROR_GET_MEDIA_URL",
      desc:
        "엣지 서버에 요청 응답 결과 HTTP 302 코드를 받은 상태에서 LOCATION 해더로 미디어 url을 얻지 못한 경우",
      msg: "컨텐츠가 존재하지 않습니다.",
    },
    8621: {
      type: "ERROR_NOT_FOUND_ID",
      desc: "스토리지 매니저 API를 존재하지 않는 컨텐츠 ID로 호출시",
      msg: "컨텐츠 정보 확인 과정에서 오류가 발생하였습니다.",
    },
    8622: {
      type: "ERROR_DECODE_HEADER",
      desc:
        "엣지 서버에 요청 응답 결과 XHTTP_ENC_DATA 해더의 데이타를 복호화 실패시",
      msg: "컨텐츠 정보 확인 과정에서 오류가 발생하였습니다. 잠시 후 재시도 해 주세요.",
    },
    8623: {
      type: "ERROR_STORAGE_FULL",
      desc: "기기에 저장할 저장공간 부족시",
      msg: "저장공간이 부족합니다. 저장공간을 확보 후 재시도 해 주세요.",
    },
    8624: {
      type: "ERROR_UPDATE_RECORD",
      desc: "DB 레코드 갱신 실패",
      msg: "DB 오류가 발생했습니다. 설정에서 저장소 위치를 확인해 주세요.",
    },
    8626: {
      type: "ERROR_NOT_FOUND_SNAPSHOT_FILENAME",
      desc:
        "비디오 게이트웨이로 Media info 정보 요청후 얻은 스냅샷 url 문자열에서 파일명을 찾지 못함",
      msg: "컨텐츠 정보 확인 과정에서 오류가 발생하였습니다.",
    },
    8627: {
      type: "ERROR_NOT_FOUND_THUMBNAIL_FILENAME",
      desc:
        "비디오 게이트웨이로 Media info 정보 요청후 얻은 썸내일 url 문자열에서 파일명을 찾지 못함",
      msg: "컨텐츠 정보 확인 과정에서 오류가 발생하였습니다.",
    },
    8628: {
      type: "ERROR_NOT_FOUND_RECORD",
      desc: "DB 레코드를 찾지 못함",
      msg: "DB 오류가 발생했습니다. 설정에서 저장소 위치를 확인해 주세요.",
    },
    8629: {
      type: "ERROR_NOT_DOWNLOAD_COMPLETE_ALL",
      desc:
        "다운로드 타입의 컨텐츠를 전부 받지 않은 상태에서 재생 시도시",
      msg: "컨텐츠 다운로드가 완료되지 않았습니다.",
    },
    8630: {
      type: "ERROR_NOT_DOWNLOAD_TYPE",
      desc:
        "다운로드 타입이 아닌 컨텐츠 ID로 다운로드 관련 스토리지 매니저 API를 호출해서 사용하려는 경우",
      msg: "다운로드 받으실 수 없는 컨텐츠입니다.",
    },
    8631: {
      type: "ERROR_ALREADY_DOWNLOADING",
      desc: "다운로드 중에 다운로드 요청 api를 호출시",
      msg: "이미 다운로드 중입니다.",
    },
    8632: {
      type: "ERROR_DECRYPT_CONTENT_INFO_LINK",
      desc:
        "비디오 게이트웨이로 Media info 정보 요청후 응답받은 데이타를 복호화 실패시",
      msg: "컨텐츠 정보 확인 과정에서 오류가 발생하였습니다.",
    },
    8633: {
      type: "ERROR_PARSE_CONTENT_INFO_LINK",
      desc:
        "비디오 게이트웨이로 Media info 정보 요청후 응답받은 데이타를 JSON 파싱 실패시",
      msg: "컨텐츠 정보 확인 과정에서 오류가 발생하였습니다.",
    },
    8634: {
      type: "ERROR_DECRYPT_COMPANY_AUTH_INFO",
      desc: "DRM 콜백 호출후 응답받은 데이타를 복호화 실패시",
      msg: "인증 정보 확인 과정에서 오류가 발생하였습니다. 컨텐츠 제공업체 홈페이지 관리자에게 문의해주세요.",
    },
    8635: {
      type: "ERROR_PARSE_COMPANY_AUTH_INFO",
      desc: "DRM 콜백 요청후 응답받은 데이타를 JSON 파싱 실패시",
      msg: "인증 정보 확인 과정에서 오류가 발생하였습니다. 컨텐츠 제공업체 홈페이지 관리자에게 문의해주세요.",
    },
    8636: {
      type: "ERROR_NOT_VAILD_COMPANY_AUTH_INFO",
      desc:
        "DRM 콜백 호출(Kind 1)후 응답받은 만료 정보가 적절하지 않은 경우",
      msg: "인증 정보 확인 과정에서 오류가 발생하였습니다. 컨텐츠 제공업체 홈페이지 관리자에게 문의해주세요.",
    },
    8637: {
      type: "ERROR_NO_USE_CONTENT_URL",
      desc: '/i"나 "/si" 링크가 아닌 url로 컨텐츠를 load 하는 경우',
      msg: "인증 정보 확인 과정에서 오류가 발생하였습니다. 컨텐츠 제공업체 홈페이지 관리자에게 문의해주세요.",
    },
    8638: {
      type: "ERROR_NOT_EXIST_DOWNLOADED_CONTENTS",
      desc: "다운로드 되기전에 호출 되는 경우 또는 존재하지 않는 경우",
      msg: "다운로드 된 컨텐츠가 존재하지 않습니다.스트리밍하여 재생하시겠습니까?",
    },
    8638: {
      type: "ERROR_NOT_EXIST_DOWNLOADED_CONTENTS",
      desc: "다운로드 되기전에 호출 되는 경우 또는 존재하지 않는 경우",
      msg: "다운로드 된 컨텐츠가 존재하지 않습니다. 먼저 다운로드를 받으신 후 컨텐츠를 재생해주시기 바랍니다.",
    },
    8639: {
      type: "Unknown Error",
      desc: "단말기 타입을 설정값이 유효하지 않습니다.",
      msg: "알 수 없는 오류가 발생했습니다.",
    },
    8640: {
      type: "ERROR_NOT_VAILD_DEVICE_LEVEL",
      desc: "단말기 래밸을 설정값이 유효하지 않습니다.",
      msg: "알 수 없는 오류가 발생했습니다.",
    },
    8642: {
      type: "ERROR_INIT_NETWORK_LIBRARY",
      desc: "네트웍 라이브러리 초기화 실패",
      msg: "알 수 없는 오류가 발생했습니다.",
    },
    8643: {
      type: "ERROR_EXPIRATION_DATE",
      desc: "DRM 다운로드 컨텐츠 재생시 유효기간이 지났을 경우",
      msg: "재생 유효기간(%s)이 지났습니다.",
    },
    8644: {
      type: "ERROR_EXPIRATION_COUNT",
      desc: "DRM 다운로드 컨텐츠 재생 유효횟수를 모두 소진했을 경우",
      msg: "재생 유효 회수(%d회)를 모두 소진했습니다. 삭제 후 다시 다운로드 해 주세요.",
    },
    8645: {
      type: "ERROR_REQUEST_CONTENT_URL",
      desc:
        "다 받지 않은 다운로드 컨텐츠를 index로 컨텐츠를 load 한 경우",
      msg: "다운로드가 완료되지 않은 파일입니다. 컨텐츠 제공 페이지에서 다시 다운로드 시 이어받기가 가능합니다.",
    },
    8646: {
      type: "ERROR_NOT_VAILD_CONTENTS_INFO",
      desc: "저장된 컨텐츠 관련 정보가 손상되었습니다.",
      msg: "파일 접근에 실패했습니다. 설정에서 저장소 위치를 확인해 주세요. 저장공간이 부족한지 확인해주십시오.",
    },
    8647: {
      type: "ERROR_CREATE_NO_MEDIA_FILE",
      desc: ".nomedia 파일 생성 실패시",
      msg: "파일 접근에 실패했습니다. 설정에서 저장소 위치를 확인해 주세요.",
    },
    8648: {
      type: "ERROR_NOT_REMOVE_TYPE",
      desc: "삭제 가능한 컨텐츠 타입이 아닌 경우",
      msg: "삭제가 허용되지 않는 컨텐츠입니다.",
    },
    8649: {
      type: "ERROR_DECRYPT",
      desc: "kollus 암호화 문자열 복호화 실패시",
      msg: "서버 오류가 발생했습니다. 잠시 후 재시도 해 주세요.",
    },
    8650: {
      type: "ERROR_NOT_ALLOW_DOWNLOAD",
      desc: "해당 컨텐츠 URL 링크로는 다운로드를 허용하지 않습니다.",
      msg: "다운로드 받으실 수 없는 컨텐츠입니다.",
    },
    8651: {
      type: "ERROR_EMPTY_COMPANY_AUTH_INFO",
      desc: "DRM 콜백 요청후 응답은 받았지만 수신 데이타가 없는 경우",
      msg: "인증 정보 확인 과정에서 오류가 발생하였습니다. 컨텐츠 제공업체 홈페이지 관리자에게 문의해주세요.",
    },
    8652: {
      type: "ERROR_EMPTY_CONTEMT_INFO",
      desc:
        "비디오 게이트웨이로 Media info 정보 요청후 응답은 받았지만 수신 데이타가 없는 경우",
      msg: "컨텐츠 정보 확인 과정에서 오류가 발생하였습니다. 잠시 후 재시도 해 주세요.",
    },
    8653: {
      type: "ERROR_NOT_FOUND_DOMAIN",
      desc:
        "엣지 서버로 요청시 사용한 URL 도메인이 엣지서버의 응답 정보중 도메인 목록과 일치하는 도메인이 없는 경우",
      msg: "컨텐츠 정보 확인 과정에서 오류가 발생하였습니다. 잠시 후 재시도 해 주세요.",
    },
    8654: {
      type: "ERROR_NOT_RECEIVE_DOMAIN",
      desc: "엣지 서버로 도메인 목록 정보를 받지 못한 경우",
      msg: "컨텐츠 정보 확인 과정에서 오류가 발생하였습니다. 잠시 후 재시도 해 주세요.",
    },
    8655: {
      type: "ERROR_ABNORMAL_DRM_INFO",
      desc:
        "DRM 컨텐츠 다운로드 전에 DRM 콜백 호출(Kind 1)하고 응답 받은 내용의 result 값이 0(에러)인 경우 (고객사에서 지정한 메시지가 노출될 수 있습니다.)",
      msg: "인증 정보 확인 과정에서 오류가 발생하였습니다. 컨텐츠 제공업체 홈페이지 관리자에게 문의해주세요.",
    },
    8656: {
      type: "ERROR_ABNORMAL_DRM_COMPLETE",
      desc:
        "DRM 컨텐츠 다운로드 후에 DRM 콜백 호출(Kind 2)하고 응답 받은 내용의 result 값이 0(에러)인 경우(고객사에서 지정한 메시지가 노출될 수 있습니다.)",
      msg: "인증 정보 확인 과정에서 오류가 발생하였습니다. 컨텐츠 제공업체 홈페이지 관리자에게 문의해주세요.",
    },
    8657: {
      type: "ERROR_ABNORMAL_DRM_PLAY",
      desc:
        "DRM 컨텐츠 재생전에 DRM 콜백 호출(Kind 3)하고 응답 받은 내용의 result 값이 0(에러)인 경우 (고객사에서 지정한 메시지가 노출될 수 있습니다.)",
      msg: "인증 정보 확인 과정에서 오류가 발생하였습니다. 컨텐츠 제공업체 홈페이지 관리자에게 문의해주세요.",
    },
    8658: {
      type: "ERROR_FORCE_EXPIRED",
      desc:
        "DRM 콜백 서버로 부터 강제 만료된 컨텐츠를 재생하려고 한 경우",
      msg: "컨텐츠 사용이 제한되었습니다.",
    },
    8659: {
      type: "ERROR_NOT_RECEIVE_ENC_DATA",
      desc: "엣지 서버로 XHTTP_ENC_DATA 정보를 받지 못한 경우",
      msg: "인증 정보 확인 과정에서 오류가 발생하였습니다. 컨텐츠 제공업체 홈페이지 관리자에게 문의해주세요.",
    },
    8660: {
      type: "ERROR_NOT_FOUND_MOBILE_LOGO_FILENAME",
      desc:
        "비디오 게이트웨이로 Media info 정보를 얻은 항목중에 모바일 로고 url 문자열에서 파일명을 찾지 못함",
      msg: "컨텐츠 정보 확인 과정에서 오류가 발생하였습니다. 잠시 후 재시도 해 주세요.",
    },
    8661: {
      type: "ERROR_CANNOT_CALL_API",
      desc:
        "스토리지 매니저 API를 호출할 수 없습니다.(내부 객체를 종료하는 시점)",
      msg: "API를 호출할 수 없습니다.(내부 객체를 종료하는 시점)",
    },
    8662: {
      type: "ERROR_NOT_FOUND_THUMBNAIL_URL",
      desc:
        "비디오 게이트웨이로 Media info 정보를 얻은 항목중에 썸내일 url이 없는 경우",
      msg: "컨텐츠 정보 확인 과정에서 오류가 발생하였습니다.",
    },
    8663: {
      type: "ERROR_ALTER_TABLE",
      desc: "DB 테이블 변경에러",
      msg: "DB 오류가 발생했습니다. 설정에서 저장소 위치를 확인해 주세요.",
    },
    8664: {
      type: "ERROR_DIFFERENT_TIME",
      desc: "기기와 서버간의 시간이 일치하지 않습니다.",
      msg: "시스템시간이 정확하지 않습니다. 시간설정을 확인하세요.",
    },
    8665: {
      type: "ERROR_EMPTY_POSTER_UPLOAD_FILE_INFO",
      desc:
        "포스터 파일 업로드 후, 서버로 부터 응답은 받았지만 수신 데이타가 없는 경우",
      msg: "서버 오류가 발생했습니다. 잠시 후 재시도 해 주세요.",
    },
    8666: {
      type: "ERROR_PARSE_POSTER_UPLOAD_FILE_INFO",
      desc:
        "포스터 파일 업로드 후, 서버로 부터 응답받은 데이타를 JSON 파싱 실패시",
      msg: "서버 오류가 발생했습니다. 잠시 후 재시도 해 주세요. 잠시 후 재시도 해 주세요.",
    },
    8667: {
      type: "ERROR_NOT_FOUND_POSTER_URL",
      desc:
        "비디오 게이트웨이로 Media info 정보를 얻은 항목중에 poster url을 찾지 못함",
      msg: "업로드할 포스터 url이 없습니다.",
    },
    8668: {
      type: "ERROR_GET_MEDIA_ID",
      desc: "엣지 서버로 부터 미디어 ID를 얻기 실패",
      msg: "서버 오류가 발생했습니다. 잠시 후 재시도 해 주세요.",
    },
    8669: {
      type: "ERROR_NOT_FOUND_SUBTITLE_FILENAME",
      desc:
        "비디오 게이트웨이로  Media info 정보를 얻은 항목중에 자막 url 문자열에서 파일명을 찾지 못함",
      msg: "서버 오류가 발생했습니다. 잠시 후 재시도 해 주세요.",
    },
    8670: {
      type: "ERROR_EMPTY_PLAY_CALLBACK_INFO",
      desc: "Play 콜백 호출후 응답은 받았지만 수신 데이타가 없는 경우",
      msg: "서버 오류가 발생했습니다. 잠시 후 재시도 해 주세요.",
    },
    8671: {
      type: "ERROR_DECRYPT_PLAY_CALLBACK_INFO",
      desc: "Play 콜백 호출후 응답받은 데이타를 복호화 실패시",
      msg: "컨텐츠 정보가 정확하지 않습니다.",
    },
    8672: {
      type: "ERROR_PARSE_PLAY_CALLBACK_INFO",
      desc: "Play 콜백 호출후 응답받은 데이타를 JSON 파싱 실패시",
      msg: "컨텐츠 정보가 정확하지 않습니다.",
    },
    8673: {
      type: "ERROR_ABNORMAL_PLAY_CALLBACK_INFO",
      desc:
        "Play 콜백 호출(Kind 1)하고 응답 받은 내용의 result 값이 0(에러)인 경우 (고객사에서 지정한 메시지가 노출될 수 있습니다.)",
      msg: "서버 오류가 발생했습니다. 잠시 후 재시도 해 주세요.",
    },
    8674: {
      type: "ERROR_PLAY_CALLBACK_EXPIRED",
      desc:
        "Play 콜백 호출(Kind 3)하고 응답 받은 내용의 expire 값이 1인(강제만료) 경우",
      msg: "컨텐츠 사용이 제한되었습니다.",
    },
    8675: {
      type: "ERROR_ABNORMAL_PLAY_CALLBACK_INFO_PLAY",
      desc:
        "Play 콜백 호출(Kind 3)하고 응답 받은 내용의 result 값이 0(에러)인 경우(고객사에서 지정한 메시지가 노출될 수 있습니다.)",
      msg: "서버 오류가 발생했습니다. 잠시 후 재시도 해 주세요.",
    },
    8676: {
      type: "ERROR_ABNORMAL_UPLOAD_POSTER_INFO",
      desc:
        "poster 업로드 후 서버로 응답 받은 내용중 error 값이 ture인 경우",
      msg: "컨텐츠 정보 확인 과정에서 오류가 발생하였습니다.",
    },
    8677: {
      type: "ERROR_GET_CONTENT_TYPE",
      desc:
        "엣지 서버로 부터 미디어 컨텐츠의 CONTENT-TYPE 정보 얻기 실패",
      msg: "컨텐츠 정보 확인 과정에서 오류가 발생하였습니다.",
    },
    8678: {
      type: "ERROR_GET_CONTENT_LAST_MODIFIED",
      desc:
        "엣지 서버로 부터 미디어 컨텐츠의 LAST-MODIFIED 정보 얻기 실패",
      msg: "컨텐츠 정보 확인 과정에서 오류가 발생하였습니다.",
    },
    8679: {
      type: "ERROR_ENCRYPT_KEY",
      desc: "DB에 저장하는 데이타를 암호화하는 객체 생성 실패시",
      msg: "인증 정보 확인 과정에서 오류가 발생하였습니다.",
    },
    8680: {
      type: "ERROR_FORCE_DELETE",
      desc:
        "DRM 콜백 호출후 응답으로 다운로드한 컨텐츠 삭제하라고 응답받은 경우",
      msg: "사용하실 수 없는 컨텐츠이므로 다운로드된 파일을 삭제합니다.",
    },
    8681: {
      type: "ERROR_DIFFERENT_EXPIRE_RESET",
      desc:
        "DRM 콜백 호출후 응답으로 강제 리셋하라고 응답받았으나 호출시 전달할 session_key 값과 응답시 받은 session_key값이 다른 경우",
      msg: "인증 정보 확인 과정에서 오류가 발생하였습니다. 컨텐츠 제공업체 홈페이지 관리자에게 문의해주세요.",
    },
    8682: {
      type: "ERROR_NOT_FOUND_DRM_KIND",
      desc:
        "DRM 콜백 요청시 서버 전달한 항목에 대한 응답 정보를 받지 못한 경우",
      msg: "인증 정보 확인 과정에서 오류가 발생하였습니다. 컨텐츠 제공업체 홈페이지 관리자에게 문의해주세요.",
    },
    8683: {
      type: "ERROR_EXPIRATION_PLAY_TIME",
      desc:
        "DRM 다운로드 컨텐츠 재생 유효 재생시간을 모두 소진했을 경우",
      msg: "재생 유효 시간(%s)을 모두 소진했습니다. 삭제 후 다시 다운로드 해 주세요.",
    },
    8686: {
      type: "ERROR_PLAY_CALLBACK_EXPIRATION_PLAY_TIME",
      desc:
        "Play Callback에서 전달받은 재생 유효시간이 만료된 경우(재생 종료 처리)",
      msg: "허용된 재생 시간이 초과되어 재생을 종료합니다.",
    },
    8687: {
      type: "ERROR_CHECK_EXPIRATION_DATE",
      desc:
        "DRM 다운로드 컨텐츠 재생 유효 재생시간을 소진하기전 네트워크 연결에서 중간에 체크 확인",
      msg: "재생 유효 시간 체크가 필요합니다. 네트워크 연결하여 재생해주세요.",
    },
    8800: {
      type: "ERROR_NOT_FOUND_COMMON_INFO",
      desc: "컨텐츠 목록에서 공통 정보를 찾지 못함",
      msg: "컨텐츠 정보 확인 과정에서 오류가 발생하였습니다.",
    },
    8801: {
      type: "ERROR_NOT_FOUND_ITEM_IN_PLAYLIST",
      desc: "컨텐츠 목록에서 해당 항목을 찾지 못한 경우",
      msg: "컨텐츠 정보 확인 과정에서 오류가 발생하였습니다.",
    },
    8802: {
      type: "ERROR_EMPTY_PLAYLIST_INFO",
      desc:
        "플래이 리스트 요청후 응답은 받았지만 수신 데이타가 없는 경우",
      msg: "컨텐츠 정보 확인 과정에서 오류가 발생하였습니다.",
    },
    8803: {
      type: "ERROR_INTRO_CANNOT_DOWNLOAD",
      desc: "인트로 컨텐츠는 다운로드 할 수 없음",
      msg: "인트로 영상은 다운로드 하실 수 없습니다.",
    },
    8804: {
      type: "ERROR_DUPLICATION_NETWORK_ERR",
      desc: "중복차단 체크시 네트워크 불안전하여 실패 하는 경우",
      msg: "서버와의 통신이 불안정 합니다. 네트워크 상태를 확인 후 다시 재생 시도해 주세요.",
    },
    8900: {
      type: "ERROR_VIDEO_GATEWAY_ABNORMAL_RESPONSE",
      desc:
        "비디오 게이트웨이에 Media info를 요청했을 때 error값이 true인 경우 (정상 재생이 불가한 상황임)",
      msg: "컨텐츠 정보 확인 과정에서 오류가 발생하였습니다. 잠시 후 재시도 해 주세요.",
    },
    9006: {
      type: "ERROR_CURLE_COULDNT_RESOLVE_HOST",
      desc: "서버 HOST 리졸빙 실패시 발생",
      msg: "서버에 연결할 수 없습니다. 네트워크를 확인 후 재시도 해 주세요.",
    },
    9007: {
      type: "ERROR_CURLE_COULDNT_CONNECT",
      desc: "서버에 연결 실패시",
      msg: "서버에 연결할 수 없습니다. 네트워크를 확인 후 재시도 해 주세요.",
    },
    9018: {
      type: "ERROR_CURLE_PARTIAL_FILE",
      desc:
        "서버에 요청한 사이즈와 응답으로 받은 데이터의 사이즈가 상이한 경우",
      msg: "네트워크 환경이 불안정하여 데이터 수신에 실패하였습니다.",
    },
    9028: {
      type: "ERROR_CURLE_OPERATION_TIMEDOUT",
      desc: "서버 연결중에 일정시간 동안 응답이 없는 경우",
      msg: "네트워크 상태 불안정으로 서버와의 통신이 정상 연결되지 못했습니다. 네트워크 상태를 확인 후 다시 재생 시도해 주세요.",
    },
    9056: {
      type: "ERROR_CURLE_RECV_ERROR",
      desc: "서버 연결하여 응닫을 받는 도중 실패시",
      msg: "네트워크 상태를 확인하신 후 재시도 해 주세요.",
    },
    "94XX": {
      type: "HTTP SEVER ERROR",
      desc:
        "에러코드의 마지막 세자리수는 DRM Callback 서버에서 응답코드로 내려준 코드입니다.",
      msg: "",
    },
    "95XX": {
      type: "HTTP SEVER ERROR",
      desc:
        "에러코드의 마지막 세자리수는 DRM Callback 서버에서 응답코드로 내려준 코드입니다.",
      msg: "",
    },
    "90XX": {
      type: "",
      desc: "Curl Error",
      msg: "",
    },
    10006: {
      type: "ERROR_CURLE_COULDNT_RESOLVE_HOST",
      desc: "서버 HOST 리졸빙 실패시 발생",
      msg: "서버에 연결할 수 없습니다. 네트워크를 확인 후 재시도 해 주세요.",
    },
    10007: {
      type: "ERROR_CURLE_COULDNT_CONNECT",
      desc: "서버에 연결 실패시",
      msg: "서버에 연결할 수 없습니다. 네트워크를 확인 후 재시도 해 주세요.",
    },
    10018: {
      type: "ERROR_CURLE_PARTIAL_FILE",
      desc:
        "서버에 요청한 사이즈와 응답으로 받은 데이터의 사이즈가 상이한 경우",
      msg: "네트워크 환경이 불안정하여 데이터 수신에 실패하였습니다.",
    },
    10028: {
      type: "ERROR_CURLE_OPERATION_TIMEDOUT",
      desc: "서버 연결중에 일정시간 동안 응답이 없는 경우",
      msg: "서버에 연결할 수 없습니다. 네트워크를 확인 후 재시도 해 주세요.",
    },
    10056: {
      type: "ERROR_CURLE_RECV_ERROR",
      desc: "서버 연결하여 응닫을 받는 도중 실패시",
      msg: "네트워크 상태를 확인하신 후 재시도 해 주세요.",
    },
    "104XX": {
      type: "HTTP SERVER ERROR",
      desc:
        "에러코드의 마지막 세자리수는 Play Callback 서버에서 응답코드로 내려준 코드입니다.",
      msg: "",
    },
    "105XX": {
      type: "",
      desc: "",
      msg: "",
    },
    "100XX": {
      type: "",
      desc: "Curl Error",
      msg: "",
    },
  },
  addErrorCode: (props) =>
    set((prevState) => {
      let addCode = {};
      addCode[props.code] = props.msg;

      return { ...prevState, ...addCode };
    }),
}));

export default useErrorCodeStore;
