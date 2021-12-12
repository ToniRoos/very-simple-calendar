!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("react"));else if("function"==typeof define&&define.amd)define(["react"],t);else{var a="object"==typeof exports?t(require("react")):t(e.React);for(var n in a)("object"==typeof exports?exports:e)[n]=a[n]}}(self,(function(e){return(()=>{"use strict";var t={383:t=>{t.exports=e}},a={};function n(e){var r=a[e];if(void 0!==r)return r.exports;var o=a[e]={exports:{}};return t[e](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};return(()=>{n.r(r),n.d(r,{Calendar:()=>D});var e,t=n(383),a=n.n(t);!function(e){e.left="left",e.right="right"}(e||(e={}));var o=function(e){var t=e.type,n=e.onClick;return a().createElement("div",{className:"calendar-btn",onClick:n},a().createElement("div",{className:"calendar-"+t}))},l=function(e){var t=e.children;return a().createElement("div",{className:"calendar-container"},t)},i=function(e){var n=e.eventsOfDay,r=e.day,o=n.filter((function(e){return e.description})).map((function(e){return e.description})).map((function(e,t){return a().createElement("div",{key:r.getTime()+t,className:"calendar-event "},e)}));return a().createElement(t.Fragment,null,o)},c=function(e){for(var t=e.weekDayNames?e.weekDayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],n=0;n<=e.shiftWeekStartDay;n++){var r=t.shift();t.push(r)}var o=t.map((function(e){return a().createElement("td",{key:e,className:"calendar-header"},e)}));return a().createElement("thead",null,a().createElement("tr",null,o))},u=function(e,t){return t>=e.start&&t<=e.end},s=function(e){var t=e.children,n=e.title,r=e.onClick;return a().createElement("td",{title:n,onClick:function(){return r}},t)},d=function(e){var t=e.eventsOfDay.length,n=e.eventsOfDay.filter((function(e){return e.description})).map((function(e){return e.description})).join("\n"),r="";if(e.eventConditions){var o=e.eventConditions.filter((function(e){return u(e.range,t)})),l=0===o.length?e.eventConditions[t]:o[0];l.description&&(n=l.description),r=l.className}var i=e.active?"calendar-item-active":"calendar-item-inactive",c=t>0?"calendar-item-busy":"";return a().createElement(s,{title:n,onClick:function(){e.onCalendarDayClicked&&e.onCalendarDayClicked(e)}},e.calendarDayTemplate?e.calendarDayTemplate(e):a().createElement("div",{className:"calendar calendar-item "+i+" "+c+" "+r},e.day.getDate(),e.calendarDayContent?e.calendarDayContent(e):void 0))},f=function(){return(f=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},p=function(e){var t=e.calendarDays;return a().createElement("tr",null,t.map((function(e){return a().createElement(d,f({key:e.day.getTime()},e))})))},m=function(e){for(var t,n,r,o,l=(null===(t=e.options)||void 0===t?void 0:t.monthNames)?e.options.monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],i=e.startDate?e.startDate:new Date,s=new Date(i.getTime()),d=s.getMonth(),f=s.getFullYear(),m=new Date(f,d,1,12),y=0==m.getDay()?6:m.getDay()-1,v=[],D=[],g=(null===(n=e.options)||void 0===n?void 0:n.shiftWeekStartDay)?e.options.shiftWeekStartDay:0,h=-y+g,T=function(t){var n=new Date(m.getTime()+864e5*(t+h)),o=e.events.filter((function(e){return function(e,t){var a=t.getTime();return e.endDate?u({start:e.startDate.getTime(),end:e.endDate.getTime()},a):e.startDate.getFullYear()===t.getFullYear()&&e.startDate.getMonth()===t.getMonth()&&e.startDate.getDate()===t.getDate()}(e,n)})),l={day:n,eventsOfDay:o,eventConditions:e.eventConditions,active:n.getMonth()===i.getMonth(),calendarDayContent:null===(r=e.options)||void 0===r?void 0:r.calendarDayContent};v.push(l),t>0&&(t+1)%7==0&&(D.push(a().createElement(p,{key:n.getTime(),calendarDays:v})),v=[])},b=0;b<42;b++)T(b);return a().createElement("div",null,a().createElement("div",{className:"title"},l[d]," ",f),a().createElement("table",{className:"calendar"},a().createElement(c,{weekDayNames:null===(o=e.options)||void 0===o?void 0:o.weekDayNames,shiftWeekStartDay:g}),a().createElement("tbody",null,D)))},y=function(){return(y=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},v=function(e){var t,n,r,o=e.calendarDateToShow,l=e.calendarData,c=(null===(t=l.options)||void 0===t?void 0:t.numberCalendarsToShow)?l.options.numberCalendarsToShow:1,u=1===(null===(n=l.options)||void 0===n?void 0:n.type),s=u?"calendar-big":"",d=y({},l.options);u&&!(null===(r=l.options)||void 0===r?void 0:r.calendarDayContent)&&(d.calendarDayContent=i);for(var f=[],p=0;p<c;p++){var v=new Date(o.getFullYear(),o.getMonth()+p);f.push(a().createElement(m,y({key:v.getTime()},l,{options:d,startDate:v})))}return a().createElement("div",{className:s+" calendar-flex"},f)},D=function(n){var r=(0,t.useState)({dateToDisplay:n.startDate?n.startDate:new Date}),i=r[0],c=r[1];return a().createElement(l,null,a().createElement(o,{type:e.left,onClick:function(){var e=new Date;(i.dateToDisplay.getFullYear()>e.getFullYear()||i.dateToDisplay.getMonth()>e.getMonth()&&i.dateToDisplay.getFullYear()===e.getFullYear())&&c({dateToDisplay:new Date(i.dateToDisplay.getFullYear(),i.dateToDisplay.getMonth()-1)})}}),a().createElement(v,{calendarData:n,calendarDateToShow:i.dateToDisplay}),a().createElement(o,{type:e.right,onClick:function(){c({dateToDisplay:new Date(i.dateToDisplay.getFullYear(),i.dateToDisplay.getMonth()+1)})}}))}})(),r})()}));
//# sourceMappingURL=index.js.map