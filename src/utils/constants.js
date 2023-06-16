// GUI Pages
export const LANDING_PATH = "/";
export const ABOUT_PATH = "/about";
export const AUTH_PATH = "/auth";

// APIs
export const API_SIGN_IN = "/api/v1/sign-in";
export const API_SIGN_OUT = "/api/v1/sign-out";
export const API_FIND_CUSTOMER_LIST = "/api/v1/find";
export const API_UPDATE_CUSTOMER = "/api/v1/update";
export const UNPROTECTED_PATHS = [API_SIGN_IN];

// Network
export const NETWORK_ERROR_TEXT =
  "ไม่สามารถเชื่อมต่อระบบได้ กรุณาตรวจสอบเครือข่ายอินเตอร์เน็ตที่ใช้งาน";
export const EXPIRED_TOKEN_TEXT = "Token is expired";
export const SUCCESS_TEXT = "บันทึกข้อมูลสำเร็จ";
export const BAD_REQUEST_TEXT =
  "ข้อมูลไม่ถูกต้อง กรุณาตรวจสอบข้อมูลและลองใหม่อีกครั้ง";
export const NOT_FOUND_TEXT = "ไม่พบข้อมูล";
export const CONFLICT_TEXT = "เลขที่คำสั่ง มีอยู่แล้วในระบบ";
export const SERVER_INTERNAL_ERROR_TEXT =
  "ระบบขัดข้อง กรุณาลองใหม่อีกครั้งในภายหลัง";

// Documents
// export const DOC_LINK = "/docs/UserManual.pdf";

// Notification Config
export const DEFAULT_NOTIFICATION_CONFIG = {
  style: {
    top: 75, // px
  },
  duration: 5, // second
};

// STORAGE
// export const STORAGE_KEY_TOKEN = "tkn";
// export const STORAGE_KEY_EMPLOYEE_INFO = "emi";
