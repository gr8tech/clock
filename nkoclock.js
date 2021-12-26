jQuery(function(e){function p(){var i=Math.floor(Math.random()*t.length),s=t
[i];e.ajax(s+"/?nko_now=1",{timeout:1e3}).done(function(t){if(parseFloat(t))
{var s=0;typeof performance!="undefined"&&typeof
performance.timing!="undefined"&&performance.timing.responseEnd&&
(s=performance.timing.responseEnd-performance.timing.responseStart),window.t_diff=(new
Date).getTime()-(parseFloat(t)+s);if(window.t_diff>0)var o=r[n].fast;else var
o=r[n].slow;e("#nkoclockstatus")&&e("#nkoclockstatus").prepend("<p>"+r[n].ok+
(Math.abs(window.t_diff)/1e3).toFixed(5)+r[n].sec+" "+o+r
[n].server+i+"</p>")}else e("#nkoclockstatus")&&e("#nkoclockstatus").prepend
("<p>"+r[n].err1+r[n].server+i+"</p>"),setTimeout(function(){p()},500)}).fail
(function(){e("#nkoclockstatus")&&e("#nkoclockstatus").prepend("<p>"+r
[n].err1+r[n].server+i+"</p>"),setTimeout(function(){p()},500)})}var t=
["//time1.nko.kr","//time2.nko.kr","//time3.nko.kr"],n=window.navigator.language||window.navigator.browserLanguage||window.navigator.userLanguage||"en";n.toLowerCase().indexOf("ko")>-1?n="ko":n="en";var
r={ko:{txt1:"엔코 원자시계",txt2:"엔코
초시계",day:"일",sec:"초",fast:"빠름",slow:"느림",left:"남은 시간",elapsed:"지난 시간",err1:"
[오류] 동기화 실패",ok:"[동기화 성공] ",server:" - 서버 "},en:{txt1:"NKO Atomic
Clock",txt2:"NKO Stopwatch",day:"D",sec:"s",fast:"fast",slow:"slow",left:"Time
left",elapsed:"Time elapsed",err1:"[ERROR] Fetching data failed",ok:"
[Synchronized] ",server:" - server "}},i=document.getElementById
("nkoclockdisplay");window.t_diff=0;var s=0,o=1,u=(new Date).getTimezoneOffset
()*6e4,a=typeof i.textContent=="string",f="textContent"in
i?"textContent":"innerText",l=function(e,t){e[f]=t},c=!0,h=function(){var e=new
Date(((new Date).getTime()-window.t_diff-s)*o),t=Math.floor((e.getTime
()-u)/864e5),a=e.getHours(),f=e.getMinutes(),c=e.getSeconds();a<10&&
(a="0"+a),f<10&&(f="0"+f),c<10&&(c="0"+c);if(nkoisms=="true")
{var h=e.getMilliseconds();h<10?h=".00"+h:h<100?h=".0"+h:h="."+h}else var
h="";t<15e3&&t!=0?l(i,t+r[n].day+" "+a+":"+f+":"+c+h):l
(i,a+":"+f+":"+c+h)};setTimeout(function(){p()},1e3);var d=setInterval(h,1);e
("#nkoclockrefresh").click(function(){nkoclockmode="3",e
("#nkoclockdescription").text(r[n].txt1),s=0,o=1,clearInterval(d),p
(),setTimeout(function(){clearInterval(d),d=setInterval(h,1),c=!0},500)}),e
("#nkoclockstopwatch").click(function(){nkoclockmode=="1"&&c?(clearInterval
(d),c=!1):(clearInterval(d),d=setInterval(h,1),c=!0),nkoclockmode="1",e
("#nkoclockdescription").text(r[n].txt2),window.t_diff=0,s=(new Date).getTime
()-u,o=1}),e("#nkoclockdday").click(function(){p(),nkoclockmode="2",e
("#nkoclockdatetimepicker").show(),e("#nkoclockdatetimepicker").focus
()});var v=function(t){t>(new Date).getTime()-window.t_diff?(e
("#nkoclockdescription").text(r[n].left),s=t+u,o=-1):(e
("#nkoclockdescription").text(r[n].elapsed),s=t-u,o=1)};e
("#nkoclockdatetimepicker").datetimepicker({lang:n,i18n:{ko:{months:
["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],dayOfWeek:
["일","월","화","수","목","금","토"]}},step:10,lazyInit:!0,timepicker:!0,onSelectTime:function(e,t){v(e.getTime())},onClose:function(t,n){e("#nkoclockdatetimepicker").hide(),clearInterval(d),d=setInterval(h,1),c=!0},format:"Y-m-d
H:i"}),nkoclockmode=="1"?e("#nkoclockstopwatch").trigger
("click"):nkoclockmode=="2"&&v(parseInt
(nkoclockuserinput)),typeof nkoclockdescription!="string"?e
("#nkoclockdescription").text(r[n].txt1):e("#nkoclockdescription").text
(nkoclockdescription)});

https://nko.kr/nkoclock.js