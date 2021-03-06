/* https://github.com/JachymBambuch */

document.addEventListener("DOMContentLoaded", function() {
  var osVersion = 'unknown';
  var osList = [
    {os: 'Windows 10', ua: /(Windows 10.0|Windows NT 10.0)/},
    {os: 'Windows 8.1', ua: /(Windows 8.1|Windows NT 6.3)/},
    {os: 'Windows 8', ua: /(Windows 8|Windows NT 6.2)/},
    {os: 'Windows 7', ua: /(Windows 7|Windows NT 6.1)/},
    {os: 'Windows Vista', ua: /Windows NT 6.0/},
    {os: 'Windows Server 2003', ua: /Windows NT 5.2/},
    {os: 'Windows XP', ua: /(Windows NT 5.1|Windows XP)/},
    {os: 'Windows 2000', ua: /(Windows NT 5.0|Windows 2000)/},
    {os: 'Windows ME', ua: /(Win 9x 4.90|Windows ME)/},
    {os: 'Windows 98', ua: /(Windows 98|Win98)/},
    {os: 'Windows 95', ua: /(Windows 95|Win95|Windows_95)/},
    {os: 'Windows NT 4.0', ua: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/},
    {os: 'Windows CE', ua: /Windows CE/},
    {os: 'Windows 3.11', ua: /Win16/},
    {os: 'Mac OS X', ua: /Mac OS X/},
    {os: 'Mac OS', ua: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/},
    {os: 'Linux', ua: /(Linux|X11)/},
    {os: 'iOS', ua: /(iPhone|iPad|iPod)/},
    {os: 'Android', ua: /Android/},
    {os: 'Open BSD', ua: /OpenBSD/},
    {os: 'Sun OS', ua: /SunOS/},
    {os: 'QNX', ua: /QNX/},
    {os: 'UNIX', ua: /UNIX/},
    {os: 'BeOS', ua: /BeOS/},
    {os: 'OS/2', ua: /OS\/2/},
    {os: 'Search Bot', ua: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/}
  ];

  for (var i in osList) {
    if (osList[i].ua.test(navigator.userAgent)) {
      osVersion = osList[i].os;
      break;
    }
  }

  console.log(navigator);
  if (osVersion == 'Linux' || osVersion == 'Windows 8.1' || osVersion == 'Windows 8' || osVersion == 'Windows 7' || osVersion == 'Windows Vista' || osVersion == 'Windows XP' || osVersion == 'Windows 2000') {
    var gEmoji = document.getElementsByTagName('g-emoji');
    for (var i = 0; i < gEmoji.length; i++) {
      var el = gEmoji[i];
      el.classList.add('g-emoji-replaced');
      el.innerHTML = '<img src="' + el.getAttribute('fallback-src') + '" alt="emoji">';
    }
  }
});
