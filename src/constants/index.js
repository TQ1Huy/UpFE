export const BASE_URL = "http://localhost:8000";
export const convertToVND = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
});
