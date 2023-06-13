
$(function() {
						function updateMonthYear() {
							$( '#custom-month' ).html( $( '#calendar' ).calendario('getMonthName') );
							$( '#custom-year' ).html( $( '#calendar' ).calendario('getYear'));
						}
						
						$(document).on('finish.calendar.calendario', function(e){
							$( '#custom-month' ).html( $( '#calendar' ).calendario('getMonthName') );
							$( '#custom-year' ).html( $( '#calendar' ).calendario('getYear'));
							$( '#custom-next' ).on( 'click', function() {
								$( '#calendar' ).calendario('gotoNextMonth', updateMonthYear);
							} );
							$( '#custom-prev' ).on( 'click', function() {
								$( '#calendar' ).calendario('gotoPreviousMonth', updateMonthYear);
							} );
							$( '#custom-current' ).on( 'click', function() {
								$( '#calendar' ).calendario('gotoNow', updateMonthYear);
							} );
							$( '#custom-current').on( 'click', function() {
								$('#calendar').calendario('gotoNow', updateMonthYear);
							} );
						});
						
						$('#calendar').on('shown.calendar.calendario', function(){
							$('div.fc-row > div').on('onDayClick.calendario', function(e, dateprop) {
								console.log(dateprop);
								  
								if(dateprop.data) {
								///gfjhgfjghjkgfkjhg
									showEvents(dateprop.data.html, dateprop);
								///this is for image 
									if($('span.calendar-default').text() == 'Ram Navami')
									$('#event_img').attr('src','img/ram-navmi.html');
									
									if($('span.calendar-default').text() == 'Mahavir Jayanti')
									$('#event_img').attr('src','img/maha-veer-jayanti.html');
									
									if($('span.calendar-default').text() == 'Hazrat Ali Birthday ')
									$('#event_img').attr('src','img/hazrat-ali.html');
									
									if($('span.calendar-default').text() == 'Ambedkar Jayanti /Good Friday')
									$('#event_img').attr('src','img/ambedkar.html');
									
									if($('span.calendar-default').text() == 'Maharana Pratap Jayanti')
									$('#event_img').attr('src','img/rana-pratap-jayanti.html');
									
									if($('span.calendar-default').text() == 'Buddha Purnima')
									$('#event_img').attr('src','img/guru-purnima.html');
									
									if($('span.calendar-default').text() == 'TODAY')
									$('#event_img').attr('src','');
									
									
									if($('span.calendar-default').text() == 'Al-Vida Namaaz')
									$('#event_img').attr('src','img/al-vida-namaz.html');
									
									if($('span.calendar-default').text() == 'Id-Ul-Fitr')
									$('#event_img').attr('src','img/eid-ul-fitr.html');
									
									if($('span.calendar-default').text() == 'Rakshabandhan')
									$('#event_img').attr('src','img/raksha-bandhan.html');
									
									if($('span.calendar-default').text() == 'Independence Day/Janmashtami')
									$('#event_img').attr('src','img/idependence-day.html');
									
									if($('span.calendar-default').text() == 'Eid-Ul-Zuha')
									$('#event_img').attr('src','img/eid-ul-zuha.html');
									
									if($('span.calendar-default').text() == 'Teachers Day')
									$('#event_img').attr('src','img/teachers-day.html');
									
									if($('span.calendar-default').text() == 'Ram Navami')
									$('#event_img').attr('src','img/ram-navmi.html');
									
									if($('span.calendar-default').text() == 'Agrasen Jayanti')
									$('#event_img').attr('src','img/agrasen-jayanti.html');
									
									if($('span.calendar-default').text() == 'Dusshera')
									$('#event_img').attr('src','img/dussehra.html');
									
									if($('span.calendar-default').text() == 'Moharram')
									$('#event_img').attr('src','img/muharram.html');
									
									if($('span.calendar-default').text() == 'Gandhi Jayanti')
									$('#event_img').attr('src','img/gandhi-jayanti.html');
									
									if($('span.calendar-default').text() == 'Balmiki Jayanti')
									$('#event_img').attr('src','img/valmiki-jayanti.html');
									
									if($('span.calendar-default').text() == 'Deepawali')
									$('#event_img').attr('src','img/deepawali.html');
																											
									if($('span.calendar-default').text() == 'Guru Nanak Jayanti')
									$('#event_img').attr('src','img/guru-nanak-jayanti.html');
									
									if($('span.calendar-default').text() == 'Guru Teg Bahadur-Shaheed Divas')
								    {$('#event_img').attr('src','img/guru-teg-bahadur-jayanti.html');}
									
									if($('span.calendar-default').text() == 'Eid-E-Milad')
									$('#event_img').attr('src','img/eid-ul-udha.html');
									
									if($('span.calendar-default').text() == 'Ambedkar Parinirvan Divas')
									$('#event_img').attr('src','img/ambedkar.html');
									
									if($('span.calendar-default').text() == 'Late. Choudhry Charan Singh')
									$('#event_img').attr('src','img/Late.Choudhry_Charan_Singh.html');
									
									if($('span.calendar-default').text() == 'Christmas Day')
									$('#event_img').attr('src','img/christmas.html');
									
									if($('span.calendar-default').text() == 'Winter Vacation')
									$('#event_img').attr('src','img/winter.html');
									
									if($('span.calendar-default').text() == 'Republic Day')
									$('#event_img').attr('src','img/re-public-day.html');
								
									if($('span.calendar-default').text() == 'Shivrati')
									$('#event_img').attr('src','img/SHIVRATI.html');
									
									if($('span.calendar-default').text() == 'Guru Gobind Singh Jayanti')
									$('#event_img').attr('src','img/guru-gobind-singh-jayanti.html');
									
									if($('span.calendar-default').text() == 'Makar Sankranti')
									$('#event_img').attr('src','img/Makar-Sankranti.html');
									
									if($('span.calendar-default').text() == 'Happy Basant Panchami')
									$('#event_img').attr('src','img/Happy-Basant-Panchami.html');
									
									
									
									if($('span.calendar-default').text() == 'Happy Holi')
									$('#event_img').attr('src','img/Happy-Holi.html');
									
									if($('span.calendar-default').text() == 'Mahaveer Jayanti')
									$('#event_img').attr('src','img/maha-veer-jayanti.html');
									
									if($('span.calendar-default').text() == 'Happy Good Friday')
									$('#event_img').attr('src','img/Happy-Good-Friday.html');
									
								
								}
							});
						});
					
						var transEndEventNames = {
							'WebkitTransition' : 'webkitTransitionEnd',
							'MozTransition' : 'transitionend',
							'OTransition' : 'oTransitionEnd',
							'msTransition' : 'MSTransitionEnd',
							'transition' : 'transitionend'
						},
						transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
						$wrapper = $('#custom-inner' );

						function showEvents( contentEl, dateprop ) {
							hideEvents();
//this line is  important to edit
							var $events = $( '<div id="custom-content-reveal" class="custom-content-reveal"><h4>Events for ' + dateprop.monthname + ' '
							+ dateprop.day + ', ' + dateprop.year + '</h4></div>'),
							$close = $( '<br/> <div class="event_img_pic"><img id="event_img" src="" alt="" class="for_event_img" /></div><br/>'+'<span class="custom-content-close"></span>' ).on( 'click', hideEvents);
							$events.append( contentEl.join(' ') , $close ).insertAfter( $wrapper );
							setTimeout( function() {
								$events.css( 'top', '0%' );
							}, 100);
						}
						
						function hideEvents() {
							var $events = $( '#custom-content-reveal' );
							if( $events.length > 0 ) {   
								$events.css( 'top', '100%' );
								Modernizr.csstransitions ? $events.on( transEndEventName, function() { $( this ).remove(); } ) : $events.remove();
							}
						}
						
						$( '#calendar' ).calendario({
							caldata : events,
							displayWeekAbbr : true,
							events: ['click', 'focus']
						});
					
					});











/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-csstransitions-touch-shiv-cssclasses-prefixed-teststyles-testprop-testallprops-prefixes-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function z(a){j.cssText=a}function A(a,b){return z(m.join(a+";")+(b||""))}function B(a,b){return typeof a===b}function C(a,b){return!!~(""+a).indexOf(b)}function D(a,b){for(var d in a){var e=a[d];if(!C(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function E(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:B(f,"function")?f.bind(d||b):f}return!1}function F(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+o.join(d+" ")+d).split(" ");return B(b,"string")||B(b,"undefined")?D(e,b):(e=(a+" "+p.join(d+" ")+d).split(" "),E(e,b,c))}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n="Webkit Moz O ms",o=n.split(" "),p=n.toLowerCase().split(" "),q={},r={},s={},t=[],u=t.slice,v,w=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},x={}.hasOwnProperty,y;!B(x,"undefined")&&!B(x.call,"undefined")?y=function(a,b){return x.call(a,b)}:y=function(a,b){return b in a&&B(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=u.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(u.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(u.call(arguments)))};return e}),q.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:w(["@media (",m.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},q.csstransitions=function(){return F("transition")};for(var G in q)y(q,G)&&(v=G.toLowerCase(),e[v]=q[G](),t.push((e[v]?"":"no-")+v));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)y(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},z(""),i=k=null,function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){f=!0,j=!0}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)}(this,b),e._version=d,e._prefixes=m,e._domPrefixes=p,e._cssomPrefixes=o,e.testProp=function(a){return D([a])},e.testAllProps=F,e.testStyles=w,e.prefixed=function(a,b,c){return b?F(a,b,c):F(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+t.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("index.html").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};

+function ($) {
  'use strict';

  var Calendario = function (element, options) {
    this.init('calendario', element, options)
  }

  Calendario.INFO = {
    EMAIL : '%email%',
	FEED : '%feed%',
	NAME : 'HangingTime!',
	VERSION : '5.0.0',
	UNIQUE : '%unique%',
	USER : '%user%',
	UPDATEURL : '%url%'
  }

  Calendario.DEFAULTS = {
    weeks : ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    weekabbrs : ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    months : ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    monthabbrs : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    displayWeekAbbr : false,
    displayMonthAbbr : false,
    startIn : 1,
    fillEmpty: true,
    zone: '00:00',
	events : ['click', 'focus'],
    checkUpdate: true,
    weekdays: 'MON, TUE, WED, THU, FRI',
    weekends: 'SAT, SUN',
    format: 'MM-DD-YYYY',

  }

  Calendario.prototype.init = function (type, element, options) {
    this.INFO      = Calendario.INFO
    this.type      = type
    this.$element  = $(element)
    this.options   = $.extend({}, Calendario.DEFAULTS, this.$element.data(), options)
    this.today     = new Date()
    this.month     = (isNaN(this.options.month) || this.options.month === null) ? this.today.getMonth() : this.options.month - 1
    this.year      = (isNaN(this.options.year) || this.options.year === null) ? this.today.getFullYear() : this.options.year
    this.caldata   = this.processCaldata(this.options.caldata)
    this.curData   = []
    this.syncData  = {}
    this.generateTemplate()
    this.initEvents()
  }

  Calendario.prototype.sync = function (data) {
    var self = this
    $.post(self.options.feed, {info: self.INFO, caldata: data, domain: document.domain}, function(d){ self.syncData = d }, 'json')
    return data
  }

  Calendario.prototype.initEvents = function () {
    this.$element.on(this.options.events.join('.calendario ').trim() + '.calendario', 'div.fc-row > div:not(:empty)', function(e) {
      $(this).trigger($.Event('onDay' + e.type.charAt(0).toUpperCase() + e.type.slice(1)), [$(this).data('bz.calendario.dateprop')])
    })
  }
  
  Calendario.prototype.propDate = function () {
    var self = this, month, year, day, hc
    this.$element.find('div.fc-row > div').filter(':not(:empty)').each(function() {
      hc = $(this).children('span.fc-date').hasClass('fc-emptydate'), day = $(this).children('span.fc-date').text()
      month = (hc && day <= 31 && day >= 24 ? self.month - 1 : (hc && day >= 1 && day <= 7 ? self.month + 1 : self.month))
      year = (month == 12 ? self.year + 1 : (month == -1 ? self.year - 1 : self.year))
      month = (month == 12 ? 0 : (month == -1 ? 11 : month))
      var dateProp = {
        'day' : $(this).children('span.fc-date').text(),
        'month' : month + 1,
        'monthname' : self.options.displayMonthAbbr ? self.options.monthabbrs[month] : self.options.months[month],
        'year' : year,
        'weekday' : $(this).index() + self.options.startIn,
        'weekdayname' : self.options.weeks[($(this).index() == 6 ? 0 : $(this).index() + self.options.startIn)],
        'data' : self.curData[$(this).children('span.fc-date').text()] ? self.curData[$(this).children('span.fc-date').text()] : false
      }
  
     if(dateProp.weekday == '7')
      {
      $('.fc-past>span.fc-date,.fc-future>span.fc-date,.fc-today>span.fc-date').each(function(){
      var value = $(this);
      if(value.html() == dateProp.day )
      { value.css({'color' : 'Red','font-weight':'bold'});}     
      });
      }
    
      
      
     // alert(dateProp.weekdayname);
//Change at hrere       
      $(this).data('bz.calendario.dateprop', dateProp)
     
    })
   
  }
  //Todays Change might be there

  Calendario.prototype.insertToCaldata = function(key, c, date, data, f) {
    if(!data[key]) data[key] = []
    c.repeat ? c.day = [date[f.DD], c.endDate.split('-')[f.DD]] : c.day = [date[f.DD], date[f.DD]]
    c.repeat ? c.month = [date[f.MM], c.endDate.split('-')[f.MM]] : c.month = [date[f.MM], date[f.MM]]
    c.repeat ? c.year = [date[f.YYYY], c.endDate.split('-')[f.YYYY]] : c.year = [date[f.YYYY], date[f.YYYY]]
    c.category = c.category ? 'calendar-' + c.category.split('-').pop() : 'calendar-default'
    return data[key].push(c) ? data : data
  }

  Calendario.prototype.processCaldata = function (obj) {
    var data = {}, self = this
	var format = {}
	$.each(this.options.format.toUpperCase().split('-'), function(key, val) {
		format[val] = key
	})
    $.each(obj, function(key, val){
      $.each(val, function(i, c){
        if(c.repeat == 'INTERVAL' || c.repeat == 'EVERYDAY') c.repeat = 'MON, TUE, WED, THU, FRI, SAT, SUN'
        else if(c.repeat == 'WEEKDAYS') c.repeat = self.options.weekdays
        else if(c.repeat == 'WEEKENDS') c.repeat = self.options.weekends
        if($.inArray(c.repeat, [undefined, 'YEARLY', 'MONTHLY']) != -1) data = self.insertToCaldata(parseInt(key.split('-')[format.DD]), c, key.split('-'), data, format)
        else if(c.repeat) {
          $.each(c.repeat.split(','), function(v,k){
            data = self.insertToCaldata(k.trim(), $.extend(c, {repeat: 'WEEKLY'}), key.split('-'), data, format)
          })
        }
      })
    })
    return self.sync(data)
  }

  Calendario.prototype.toDObj = function(time, day) {
    var zoneH = parseInt(this.options.zone.split(':')[0])
    var zoneM = parseInt(this.options.zone.charAt(0) + this.options.zone.split(':')[1])
    var hour = parseInt(time.split(':')[0]) - zoneH
    var minutes = parseInt(time.split(':')[1]) - zoneM
    return new Date(Date.UTC(this.year, this.month, day, hour, minutes, 0, 0))
  }

  Calendario.prototype.parseDay = function(c, day) {
    if(!this.curData[day]) this.curData[day] = {html: [], allDay: [], startTime: [], endTime: [], note: [], content: [], url: []}
    c.allDay  ? this.curData[day].allDay.push(true) : this.curData[day].allDay.push(false)
    c.allDay  ? this.curData[day].startTime.push(this.toDObj('00:00', day)) : this.curData[day].startTime.push(this.toDObj(c.startTime, day))
    c.allDay  ? this.curData[day].endTime.push(this.toDObj('23:59', day)) : this.curData[day].endTime.push(this.toDObj(c.endTime, day))
    c.note    ? this.curData[day].note.push(c.note) : this.curData[day].note.push('')
	c.content ? this.curData[day].content.push(c.content) : this.curData[day].content.push('')
	c.url     ? this.curData[day].url.push(c.url) : this.curData[day].url.push('')
    var i = c.url ? this.curData[day].html.push('<a class="' + c.category + '" href="' + c.url + '">' + c.content +'</a>') - 1
                  : this.curData[day].html.push('<span class="' + c.category + '">' + c.content + '</span>') - 1
    this.curData[day].html[i] += '<time class="fc-allday" datetime="' + this.curData[day].allDay[i] + '"></time>'
    this.curData[day].html[i] += '<time class="fc-starttime" datetime="' + this.curData[day].startTime[i].toISOString() + '"></time>'
    this.curData[day].html[i] += '<time class="fc-endtime" datetime="' + this.curData[day].endTime[i].toISOString() + '"></time>'
    this.curData[day].html[i] += '<note>' + this.curData[day].note[i] + '</note>'
	this.isProperlyParsed = true
  }

  Calendario.prototype.parseDataToDay = function(data, day, dbobj) {
    var self = $.extend({}, this, dbobj)
	self.isProperlyParsed = false
    $.each(data, function(i, c) {
      if(!c) {/*ignore*/}
      else if(c.repeat == 'YEARLY' || c.repeat == 'MONTHLY' || c.repeat == 'MONTHLY') {
        if(self.year >= c.year[0] && self.year <= c.year[1]) {
          if(c.repeat == 'YEARLY' && (self.month + 1) == c.month[0]) self.parseDay(c, day)
          if(self.year == c.year[0] && (self.month + 1) >= c.month[0]) {
            if(c.repeat == 'MONTHLY') self.parseDay(c, day)
            if(c.repeat == 'WEEKLY') {
              if(c.month[0] + c.year[0] == c.month[1] + c.year[1]) {
                if(c.month[0] == (self.month + 1) && c.day[1] >= day && day >= c.day[0]) self.parseDay(c, day)
              } else if(c.month[0] == (self.month + 1) && day >= c.day[0]) self.parseDay(c, day)
              else if(c.year[0] == c.year[1] && c.month[1] > (self.month + 1) && c.month[0] < (self.month + 1)) self.parseDay(c, day)
              else if(c.year[0] == c.year[1] && c.month[1] == (self.month + 1) && day <= c.day[1]) self.parseDay(c, day)
              else if(c.year[0] != c.year[1] && c.month[0] < (self.month + 1)) self.parseDay(c, day)
            }
          } else if(c.year[0] < self.year && self.year < c.year[1]) {
            if(c.repeat == 'MONTHLY' || c.repeat == 'WEEKLY') self.parseDay(c, day)
          } else if((self.month + 1) <= c.month[1] && self.year == c.year[1]) {
            if(c.repeat == 'MONTHLY') self.parseDay(c, day)
            if(c.repeat == 'WEEKLY' && day <= c.day[1] && (self.month + 1) == c.month[1]) self.parseDay(c, day)
            else if(c.repeat == 'WEEKLY' && c.year[0] != c.year[1] && (self.month + 1) < c.month[1]) self.parseDay(c, day)
          }
        }
      } else if(self.year == c.year[0] && (self.month + 1) == c.month[0]) self.parseDay(c, day)
    })
    if(this.curData[day] && self.isProperlyParsed) return '<div class="fc-calendar-event">' + this.curData[day].html.join('</div><div class="fc-calendar-event">') + '</div>'
    else return ''
  }

  Calendario.prototype.generateTemplate = function(callback) {
    this.curData = []
    var head     = this.getHead()
    var body     = this.getBody()
    var rowClass = ''

    if(this.rowTotal == 4) rowClass = 'fc-four-rows'
    else if(this.rowTotal == 5) rowClass = 'fc-five-rows'
    else if(this.rowTotal == 6) rowClass = 'fc-six-rows'

    this.$cal = $('<div class="fc-calendar ' + rowClass + '">').append(head, body)
    this.$element.find('div.fc-calendar').remove().end().append(this.$cal)
    this.propDate()
    this.$element.trigger($.Event('shown.calendar.calendario'))
    if(callback) callback.call()
    return true
  }

  Calendario.prototype.getHead = function () {
    var html = '<div class="fc-head">', pos, j
    for(var i = 0; i <= 6; i++) {
      pos = i + this.options.startIn
      j = pos > 6 ? pos - 6 - 1 : pos
      html += '<div>' + (this.options.displayWeekAbbr ? this.options.weekabbrs[j] : this.options.weeks[j]) + '</div>'
    }
    return html + '</div>'
  }
  
  Calendario.prototype.getBody = function() {
    var d            = new Date(this.year, this.month + 1, 0)
    var monthLength  = d.getDate()
    var firstDay     = new Date(this.year, d.getMonth(), 1)
    var pMonthLength = new Date(this.year, this.month, 0).getDate()
    var html         = '<div class="fc-body"><div class="fc-row">'
    var day          = 1
	var month        = 1
	var year         = 1
	var empDay       = 1
    var startingDay  = firstDay.getDay()
    var pos          = 0
    var p            = 0
    var inner        = ''
    var today        = false
    var past         = false
    var content      = ''
    var idx          = 0
    var data         = ''
	var dbobj        = {}
    var cellClasses  = ''

    for (var i = 0; i < 7; i++) {
      for (var j = 0; j <= 6; j++) {
        pos     = startingDay - this.options.startIn
        p       = pos < 0 ? 6 + pos + 1 : pos
        inner   = ''
        today   = this.month === this.today.getMonth() && this.year === this.today.getFullYear() && day === this.today.getDate()
        past    = this.year < this.today.getFullYear() || this.month < this.today.getMonth() && this.year === this.today.getFullYear() ||
                  this.month === this.today.getMonth() && this.year === this.today.getFullYear() && day < this.today.getDate()
        content = ''
        idx     = j + this.options.startIn > 6 ? j + this.options.startIn - 6 - 1 : j + this.options.startIn
        dbobj   = {}

        if(this.options.fillEmpty && (j < p || i > 0)) {
          if(day > monthLength) {
            empDay = day++ - monthLength
			year = (this.month + 1) == 12 ? this.year + 1 : this.year
            month = (this.month + 1) == 12 ? 0 : this.month + 1
          } else if (day == 1) {
            empDay = pMonthLength++ - p + 1
			year = (this.month - 1) == -1 ? this.year - 1 : this.year
			month = (this.month - 1) == -1 ? 11 : this.month - 1
          }
          if(day > monthLength || day == 1) {
		    today = month === this.today.getMonth() && year === this.today.getFullYear() && empDay === this.today.getDate()
            past = year < this.today.getFullYear() || month < this.today.getMonth() && year === this.today.getFullYear() ||
                   month === this.today.getMonth() && year === this.today.getFullYear() && empDay < this.today.getDate()
            dbobj = {'month': month, 'year': year}
			
		    data = Array.prototype.concat(this.caldata[empDay], this.caldata[this.options.weekabbrs[idx].toUpperCase()])
            .sort(function(a, b){
              return (a.allDay ? '00:00' : a.startTime).replace(':','') - (b.allDay ? '00:00' : b.startTime).replace(':','')
            })
		    if(data) content += this.parseDataToDay(data, empDay, dbobj)
            //if(content !== '') inner += '<div class="fc-calendar-events">' + content + '</div>'
		  }
        }
          
        if (day <= monthLength && (i > 0 || j >= p)) {
//this the place for  sunday class
          inner = '<span class="fc-date">' + day + '</span><span class="fc-weekday"></span>'
          data = Array.prototype.concat(this.caldata[day], this.caldata[this.options.weekabbrs[idx].toUpperCase()])
          .sort(function(a, b){
            return (a.allDay ? '00:00' : a.startTime).replace(':','') - (b.allDay ? '00:00' : b.startTime).replace(':','')
          })
          if(data) content += this.parseDataToDay(data, day, dbobj)
          if(content !== '') inner += '<div class="fc-calendar-events"> </div>'
          ++day;
        }
        //there is change in today class 

        cellClasses = (today ? 'fc-today ' : (past ? 'fc-past ' : 'fc-future ')) + (content !== '' ? 'fc-content' : '')
        html += (cellClasses !== '' ? '<div class="' + cellClasses.trim() + '">' : '<div>') + inner + '</div>'
       
      }

      if(day > monthLength) {
        this.rowTotal = i + 1
        break
      } else html += '</div><div class="fc-row">'
    }
    return html + '</div></div>'
  }

  Calendario.prototype.move = function(period, dir, callback) {
    if(dir === 'previous') {
      if(period === 'month') {
        this.year = this.month > 0 ? this.year : --this.year
        this.month = this.month > 0 ? --this.month : 11
      } else if(period === 'year') this.year = --this.year
    } 
    else if(dir === 'next') {
      if(period === 'month'){
        this.year = this.month < 11 ? this.year : ++this.year
        this.month = this.month < 11 ? ++this.month : 0
      } else if(period === 'year') this.year = ++this.year
    }
    return this.generateTemplate(callback)
  }

  Calendario.prototype.option = function(option, value) {
    if(value) return this.options[option] = value
    else return this.options[option]
  }
  
  Calendario.prototype.getYear = function() {
    return this.year
  }

  Calendario.prototype.getMonth = function() {
    return this.month + 1
  }

  Calendario.prototype.getMonthName = function() {
    return this.options.displayMonthAbbr ? this.options.monthabbrs[this.month] : this.options.months[this.month]
  }
  
  Calendario.prototype.getCell = function(day, data) {
    if (!data) return this.$cal.find("span.fc-date").filter(function(){return $(this).text() == day}).parent()
    else return this.$cal.find("span.fc-date").filter(function(){return $(this).text() == day}).parent().data('bz.calendario.dateprop')
  }

  Calendario.prototype.setData = function(caldata, clear) {
    if(clear) this.caldata = this.processCaldata(caldata)
    else $.extend(this.caldata, this.processCaldata(caldata))
    return this.generateTemplate()
  }

  Calendario.prototype.gotoNow = function(callback) {
    this.month = this.today.getMonth()
    this.year = this.today.getFullYear()
    return this.generateTemplate(callback)
  }

  Calendario.prototype.gotoMonth = function(month, year, callback) {
    this.month = month - 1
    this.year = year
    return this.generateTemplate(callback);
  }

  Calendario.prototype.gotoPreviousMonth = function(callback) {
    return this.move('month', 'previous', callback)
  }

  Calendario.prototype.gotoPreviousYear = function(callback) {
    return this.move('year', 'previous', callback)
  }

  Calendario.prototype.gotoNextMonth = function(callback) {
    return this.move('month', 'next', callback)
  }

  Calendario.prototype.gotoNextYear = function(callback){
    return this.move('year', 'next', callback)
  }

  Calendario.prototype.feed = function() {
    return this.syncData.feed ? this.syncData.feed : 'not-available'
  }

  Calendario.prototype.version = function() {
    return this.INFO.VERSION
  }

  function Plugin(option, value1, value2, value3) {
    var val = ''
    this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bz.calendario')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bz.calendario', (data = new Calendario(this, options)))
      if (typeof option == 'string' && $.isFunction(data[option])) return val = data[option](value1, value2, value3)
      else if (typeof option == 'string') return val = data['option'](value1, value2)
    })
    if(val) return val
    else $(document).trigger($.Event('finish.calendar.calendario'))
  }

  var old = $.fn.calendario

  $.fn.calendario             = Plugin
  $.fn.calendario.Constructor = Calendario

  $.fn.calendario.noConflict = function () {
    $.fn.calendario = old
    return this
  }  
  
}(jQuery);
//CHANGE THE EVENT AT HERE 

var events = {
	//April   MM/DD/YYYY Format

	'04-04-2017' : [{content: 'Ram Navami', allDay: true,path:'img/ram-navmi.png'}],
	'04-09-2017' : [{content: 'Mahavir Jayanti', allDay: true,path: 'img/maha-veer-jayanti.png'}], 
	'04-11-2017' : [{content: 'Hazrat Ali Birthday ', repeat: 'YEARLY', allDay: true, endDate: '01-01-2100', path: 'img/'}],
	'04-14-2017' : [{content: 'Ambedkar Jayanti /Good Friday', repeat: 'YEARLY', allDay: true, endDate: '04-30-2100',path: 'img/ambedkar.pngr'}],
	//May
	'05-09-2017' : [{content: 'Maharana Pratap Jayanti', repeat: 'YEARLY', allDay: true, endDate: '01-01-2100', path: 'img/rana-pratap-jayanti.png'}],
	'05-10-2017' : [{content: 'Buddha Purnima', repeat: 'YEARLY', allDay: true, endDate: '01-01-2100', path: 'img/guru-purnima.png'}],
	//June
	'06-23-2017' : [{content: 'Al-Vida Namaaz', repeat: 'YEARLY', allDay: true, endDate: '01-01-2100', path: 'img/al-vida-namaz.png'}],
	'06-26-2017' : [{content: 'Id-Ul-Fitr', repeat: 'YEARLY', allDay: true, endDate: '01-01-2100', path: 'img/eid-ul-fitr.png'}],
	//August
	'08-07-2017' : [{content : 'Rakshabandhan', repeat: 'YEARLY', allDay: true, endDate: '01-01-2100', path: 'img/raksha-bandhan.png'}],
	'08-15-2017' : [{content : 'Independence Day/Janmashtami', repeat: 'YEARLY', allDay: true, endDate:'01-01-2100', path: 'img/'}],
	//September
	'09-02-2017' : [{content : 'Eid-Ul-Zuha', repeat: 'YEARLY', allDay: true, endDate: '01-01-2100', path: 'img/eid-ul-fitr.png'}],
	'09-05-2017' : [{content : 'Teachers Day', repeat: 'YEARLY', allDay: true, endDate:'01-01-2100', path: 'img/teachers-day.png'}],
	'09-21-2017' : [{content : 'Agrasen Jayanti', repeat: 'YEARLY', allDay: true, endDate: '01-01-2100', path: 'img/agresen-jayanti.png'}],
	'09-28-2017' : [{content : 'Dusshera', repeat: 'YEARLY', allDay: true, endDate:'01-01-2100', path: 'img/'}],
	'09-29-2017' : [{content : 'Dusshera', repeat: 'YEARLY', allDay: true, endDate: '01-01-2100', path: 'img/'}],
	'09-30-2017' : [{content : 'Dusshera', repeat: 'YEARLY', allDay: true, endDate:'01-01-2100', path: 'img/'}],
	
	//Octuber
	'10-01-2017' : [{content : 'Moharram', repeat: 'YEARLY', allDay: true, endDate: '01-01-2100', path: 'img/muharram.png'}],
	'10-02-2017' : [{content : 'Gandhi Jayanti', repeat: 'YEARLY', allDay: true, endDate:'01-01-2100', path: 'img/gandhi-jayanti.png'}],
	'10-05-2017' : [{content : 'Balmiki Jayanti', repeat: 'YEARLY', allDay: true, endDate: '01-01-2100', path: 'img/balmiki-jayanti.png'}],
	'10-19-2017' : [{content : 'Deepawali', repeat: 'YEARLY', allDay: true, endDate:'01-01-2100', path: 'img/deepawali-festival.png'}],
	'10-20-2017' : [{content : 'Deepawali', repeat: 'YEARLY', allDay: true, endDate: '01-01-2100', path: 'img/deepawali-festival.png'}],
	'10-21-2017' : [{content : 'Deepawali', repeat: 'YEARLY', allDay: true, endDate:'01-01-2100', path: 'img/deepawali-festival.png'}],
	//November
	'11-04-2017' : [{content : 'Guru Nanak Jayanti', repeat: 'YEARLY', allDay: true, endDate: '01-01-2100', path: 'img/guru-nanak-jayanti.png'}],
	
	 
	//December
	'12-02-2017' : [{content : 'Eid-E-Milad', repeat: 'YEARLY', allDay: true, endDate: '01-01-2100', path: 'img/eid-ul-udha.png'}],
	'12-05-2017' : [{content : 'Guru Teg Bahadur-Shaheed Divas', repeat: 'YEARLY', allDay: true, endDate:'01-01-2100', path: 'img/guru-teg-bahadur-jayanti.jpg'}],
	'12-06-2017' : [{content : 'Ambedkar Parinirvan Divas', repeat: 'YEARLY', allDay: true, endDate:'01-01-2100', path: 'img/3.jpg'}],
	'12-23-2017' : [{content : 'Late. Choudhry Charan Singh', repeat: 'YEARLY', allDay: true, endDate: '01-01-2100', path: 'img/Late.Choudhry_Charan_Singh.png'}],
	'12-25-2017' : [{content : 'Christmas Day', repeat: 'YEARLY', allDay: true, endDate: '01-01-2100', path: 'img/christmas.png'}],
	
	
	//January 2018
	'01-05-2018' : [{content : 'Guru Gobind Singh Jayanti', repeat: 'YEARLY', allDay: true, endDate: '01-01-2100', path: 'img/guru-gobind-singh-jayanti.jpg'}],
	'01-15-2018' : [{content : 'Makar Sankranti', repeat: 'YEARLY', allDay: true, endDate:'01-01-2100', path: 'img/Makar-Sankranti.jpg'}],
	'01-22-2018' : [{content : 'Happy Basant Panchami', repeat: 'YEARLY', allDay: true, endDate:'01-01-2100', path: 'img/Happy-Basant-Panchami.jpg'}],
	
		//February 2018

	'02-13-2018' : [{content : 'Shivrati', repeat: 'YEARLY', allDay: true, endDate: '01-01-2100', path: 'img/SHIVRATI.png'}],
	
		//March 2018

	'03-01-2018' : [{content : 'Happy Holi', repeat: 'YEARLY', allDay: true, endDate: '01-01-2100', path: 'img/Happy-Holi.jpg'}],
	'03-02-2018' : [{content : 'Happy Holi', repeat: 'YEARLY', allDay: true, endDate: '01-01-2100', path: 'img/Happy-Holi.jpg'}],
	'03-29-2018' : [{content : 'Mahaveer Jayanti', repeat: 'YEARLY', allDay: true, endDate: '01-01-2100', path: 'img/maha-veer-jayanti.png'}],
	'03-30-2018' : [{content : 'Happy Good Friday', repeat: 'YEARLY', allDay: true, endDate: '01-01-2100', path: 'img/Happy-Good-Friday.jpg'}]
	
		//April  2018
	
		//May 2018
	
		//June 2018
	
		// July 2018
	
		//August 2018
	
		//September 2018
	
		//October 2018
	
		//November 2018
	
		//December 2018
	
	
		
		
},


t = new Date(),
//Creation of today event
today = ((t.getMonth() + 1) < 10 ? '0' + (t.getMonth() + 1) : (t.getMonth() + 1)) + '-' + (t.getDate() < 10 ? '0' + t.getDate() : t.getDate()) + '-' +t.getFullYear();
events[today] = [{content: 'TODAY', allDay: true}];





/*jshint browser:true */



;(function( $ ){

  'use strict';

  $.fn.fitVids = function( options ) {
    var settings = {
      customSelector: null,
      ignore: null
    };

    if(!document.getElementById('fit-vids-style')) {
      // appendStyles: https://github.com/toddmotto/fluidvids/blob/master/dist/fluidvids.js
      var head = document.head || document.getElementsByTagName('head')[0];
      var css = '.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}';
      var div = document.createElement("div");
      div.innerHTML = '<p>x</p><style id="fit-vids-style">' + css + '</style>';
      head.appendChild(div.childNodes[1]);
    }

    if ( options ) {
      $.extend( settings, options );
    }

    return this.each(function(){
      var selectors = [
        'iframe[src*="player.vimeo.com"]',
        'iframe[src*="youtube.com"]',
        'iframe[src*="youtube-nocookie.com"]',
        'iframe[src*="kickstarter.com"][src*="video.html"]',
        'object',
        'embed'
      ];

      if (settings.customSelector) {
        selectors.push(settings.customSelector);
      }

      var ignoreList = '.fitvidsignore';

      if(settings.ignore) {
        ignoreList = ignoreList + ', ' + settings.ignore;
      }

      var $allVideos = $(this).find(selectors.join(','));
      $allVideos = $allVideos.not('object object'); // SwfObj conflict patch
      $allVideos = $allVideos.not(ignoreList); // Disable FitVids on this video.

      $allVideos.each(function(){
        var $this = $(this);
        if($this.parents(ignoreList).length > 0) {
          return; // Disable FitVids on this video.
        }
        if (this.tagName.toLowerCase() === 'embed' && $this.parent('object').length || $this.parent('.fluid-width-video-wrapper').length) { return; }
        if ((!$this.css('height') && !$this.css('width')) && (isNaN($this.attr('height')) || isNaN($this.attr('width'))))
        {
          $this.attr('height', 9);
          $this.attr('width', 16);
        }
        var height = ( this.tagName.toLowerCase() === 'object' || ($this.attr('height') && !isNaN(parseInt($this.attr('height'), 10))) ) ? parseInt($this.attr('height'), 10) : $this.height(),
            width = !isNaN(parseInt($this.attr('width'), 10)) ? parseInt($this.attr('width'), 10) : $this.width(),
            aspectRatio = height / width;
        if(!$this.attr('name')){
          var videoName = 'fitvid' + $.fn.fitVids._count;
          $this.attr('name', videoName);
          $.fn.fitVids._count++;
        }
        $this.wrap('<div class="fluid-width-video-wrapper"></div>').parent('.fluid-width-video-wrapper').css('padding-top', (aspectRatio * 100)+'%');
        $this.removeAttr('height').removeAttr('width');
      });
    });
  };
  
  // Internal counter for unique video names.
  $.fn.fitVids._count = 0;
  
// Works with either jQuery or Zepto
})( window.jQuery || window.Zepto );
