// 时间格式化 转换年/月/日 时:分:秒
export const formatTime = (time: number, format: string = "yyyy-MM-dd HH:mm:ss"): string => {
  let date = new Date(time);
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  return format
    .replace(/yyyy/g, year.toString())
    .replace(/MM/g, month.toString().padStart(2, "0"))
    .replace(/dd/g, day.toString().padStart(2, "0"))
    .replace(/HH/g, hour.toString().padStart(2, "0"))
    .replace(/mm/g, minute.toString().padStart(2, "0"))
    .replace(/ss/g, second.toString().padStart(2, "0"));
};