function formatTime(passedMinutes) {
  const days = Math.floor(Math.floor(passedMinutes/60)/24);
  const hours = Math.floor(passedMinutes/60)%24;
  const minutes = passedMinutes%60;
  return `${days} day(s) ${hours} hour(s) ${minutes} minute(s).`;
}
console.log(formatTime(120)); // => 0 day(s) 2 hour(s) 0 minute(s).
console.log(formatTime(59)); // => 0 day(s) 0 hour(s) 59 minute(s).
console.log(formatTime(1441)); // => 1 day(s) 0 hour(s) 1 minute(s).
console.log(formatTime(3601)); // => 2 day(s) 12 hour(s) 1 minute(s).