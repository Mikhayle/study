const HOURS_TITLES = ['час', 'часа', 'часов'];
const MINUTES_TITLES = ['минута', 'минуты', 'минут'];
const SECONDS_TITLES = ['секунда', 'секунды', 'секунд'];
const TIME_TO_INTERVAL = 1000;
const OPTIONS = {day: 'numeric', month: 'long', weekday: 'long', year: 'numeric'};

function declOfNum(number, titles) {
  const cases = [2, 0, 1, 1, 1, 2];
  const declencion = (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5];
  return titles[declencion];
};

function showDate() {
  const d = new Date();
  const date = d.toLocaleString('ru', OPTIONS)
  const hour = d.getHours().toString();
  const hourPostFix = declOfNum(hour, HOURS_TITLES);
  const minutes = d.getMinutes().toString();
  const minutesPostFix = declOfNum(minutes, MINUTES_TITLES);
  const seconds = d.getSeconds().toString();
  const secondsPostFix = declOfNum(seconds, SECONDS_TITLES);
  const dateMassage = ('Сегодня ' + date + ', ' + hour + ' ' + hourPostFix + ' '
   + minutes + ' ' + minutesPostFix + ' ' + seconds + ' ' + secondsPostFix);
  console.log(dateMassage);
  return dateMassage;
};
alert( showDate() );

setInterval(showDate, TIME_TO_INTERVAL);
