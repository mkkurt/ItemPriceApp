export default function getTime() {
  var d = new Date();
  var nmonth = d.getMonth(),
    ndate = d.getDate(),
    nyear = d.getFullYear();
  var nhour = d.getHours(),
    nmin = d.getMinutes();
  if (nmin <= 9) nmin = '0' + nmin;

  var clocktext =
    '' +
    (nmonth + 1) +
    '/' +
    ndate +
    '/' +
    nyear +
    ' ' +
    nhour +
    ':' +
    nmin +
    '';
  return clocktext;
}
