function countDays(){
var today = new Date();
var examDay = new Date(2021, 10, 15);

var todayString = today.getDate() + "/" + (today.getMonth()+1) + "/" + today.getFullYear();
var examDayString = examDay.getDate() + "/" + (examDay.getMonth()+1) + "/" + examDay.getFullYear();

document.getElementById("examDay-text").innerHTML = "Last exam : " + examDayString;
document.getElementById("today-text").innerHTML = "Today : " + todayString;

var diffDays = dateDiffInDays(examDay, today);
document.getElementById("countDays-text").innerHTML = diffDays + " Days";

}
const _MS_PER_DAY = 1000 * 60 * 60 * 24;

// a and b are javascript Date objects
function dateDiffInDays(a, b) {
  // Discard the time and time-zone information.
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}