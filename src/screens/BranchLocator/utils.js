export function isCurrentDayOfWeek(dayOfWeek) {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  const currentDay = new Date().getDay();
  return dayOfWeek === daysOfWeek[currentDay];
}
