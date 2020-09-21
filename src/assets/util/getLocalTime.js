export const getLocalTime = (off, type) => {
  const convertedOffset = off.split("UTC")[1].split(":");

  const d = new Date();
  const localTime = d.getTime();
  const localOffset = d.getTimezoneOffset() * 60000;
  const utc = localTime + localOffset;
  const offset = parseFloat(convertedOffset);

  const time = utc + 3600000 * offset;

  const countryLocalTime = new Date(time).toLocaleTimeString();
  const countryLocalDate = new Date(time).toDateString();

  return type === "time" ? countryLocalTime : countryLocalDate;
};
