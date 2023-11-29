export const timeStampConversion = (timeStamp) => {
  const date = new Date(timeStamp * 1000);

  let hours = date.getHours();
  let minutes = date.getMinutes();

  // Convert to 12-hour format
  let period = "AM";
  if (hours >= 12) {
    period = "PM";
    if (hours > 12) {
      hours -= 12;
    }
  } else if (hours === 0) {
    hours = 12;
  }

  // Ensure two-digit minute and second values
  minutes = ("0" + minutes).slice(-2);

  const convertedTime = hours + ":" + minutes + " " + period;

  return convertedTime;
};
