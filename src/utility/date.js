export function getWeek(day) {
  var date = new Date(day);
  var formatDate = new Date(date.getFullYear(), 0, 1);
  return Math.ceil(((date - formatDate) / 86400000 + formatDate.getDay()) / 7);
}
