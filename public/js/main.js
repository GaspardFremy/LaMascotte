
// SCROLL DOWN ARROW

$('#arrow').click(function(){
    $("html, body").animate({ scrollTop:$('#info_pratiques').offset().top}, 2000);
    return false;
 });

 /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


 /* global FLOATING_TEXT */

 $(function() {

 	//Launch on body element


    FLOATING_TEXT.float($('body'), true);

 	//This launch on element targeted
 	//FLOATING_TEXT.float('#my-element');

 });


//SMOOTHSCROLL

 $('a').click(function(){
     $('html, body').animate({
         scrollTop: $( $(this).attr('href') ).offset().top
     }, 500);
     return false;
 });


 //DATE AND TIME PICKER


         	// used in demos later on to merge default options with demo options...
         	function extend(a, b) { // extend a with properties of b not in a; simple version
         		for(var key in b) {
         			if(!a.hasOwnProperty(key)) {
         				a[key] = b[key];
         			}
         		}
         		return a;
         	}

         	/**
         	 * returns a string used in <input> fields to mark the min date
         	 * for one of the range demos...
         	 *
         	 * @return {String} String of date in format 'YYYY-MM-DD'
         	 */
         	var getTodayString = function() {
         			var today = new Date();

         			return today.getFullYear() + '-' +
         				((today.getMonth() + 1) + '').replace(/^(\d)$/, '0$1') + '-' +
         				(today.getDate() + '').replace(/^(\d)$/, '0$1');
         		};

         		/**
         		 * The following options are for demos from datePicker
         		 * these options render events, today icon and icons for
         		 * the amount of events per day (excl 'disabled'), etc.
         		 * Will be used in all other examples as well (extendet).
         		 */
         	var options = {
         			weekDays: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
         			months: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni',
         				'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],

         			sundayBased: false,
         			renderWeekNo: true,
         			equalHight: true,
         		// 	events: events,     external data... see events.js

         			template: {
         				row: '<td class=""><span class=""{{event}} data-day=\'{"day":"{{day}}", "month":"{{month}}", "year":"{{year}}"}\'>{{day-event}}{{today}}</span></td>',
         				/**
         				 * rendering events, replacing {{event}} in template.row
         				 */
         				event: function(day, date, event) {
         					var text = [],
         						uuids = [],
         						someExtra = '';

         					for (var n = 0, m = event.length; n < m; n++) {
         						event[n].text && text.push('- ' + event[n].text);

         						uuids.push(event[n]._id);

         						if (event[n].extra) { // extend functionality...
         							someExtra = event[n].extra;
         						}
         					}
         					text = text.join("\n");

         					return text ? ' title="' + text + '"' +
         						' data-uuids=\'[' + uuids.join(', ') + ']\'' +
         						(someExtra ? ' data-name="' + someExtra + '"' : '') : '';
         				},
         				/**
         				 * rendering today; just for fun..., replacing {{today}} in template.row
         				 */
         				today: function(day, date) {
         					return '<span class="today-icon">+</span>';
         				},
         				/**
         				 * rendering every day, replacing {{day-event}} in template.row
         				 */
         				day: function(day, date, event) {
         					var length = event.length;

         					for (var n = length; n--; ) { // check if it's only a 'disabled' event
         						if (event[n].type && event[n].type === 'disabled') { // or event[n].disabled
         							length--;
         						}
         					}
         					if (length > 1) {
         						return day + '<span class="count-icon">' + length + '</span>';
         					}
         				}
         			},
         			/**
         			 * Some testings for input with no value but it should be time only picker...
         			 * @param  {[type]} element [description]
         			 * @return {String}         The value of the input field
         			 */
         			readValue: function(element) {
         				if (!element.value && element.getAttribute('data-type') === 'time') { // initial time if empty
         					return new Date().toTimeString().split(' ')[0]; // triggers default behavior
         				}

         				return element.value; // triggers default behavior
         			}
         		},
         		/**
         		 * Can be used in options.renderCallback;
         		 * Call like: funcName.call(this, container, element, toggled);
         		 * Adds a class name options.rangeClass or 'range' to days in calender that define a range
         		 *
         		 * @param  {Element} container The datePicker container
         		 * @param  {Element} element   The current input field (or other trigger element)
         		 * @param  {Boolean} toggled   Toggle indicator of datePicker (see API docu)
         		 */
         		markRangeDays = function(container, element, toggled) {
         			var calOptions = this.calendar.options,
         				value_1 = +this.currentInput.value.split(' ')[0].replace(/-/g, ''),
         				value_2 = this.currentPartner &&
         					+this.currentPartner.value.split(' ')[0].replace(/-/g, ''),
         				dates = container.querySelectorAll( // get all displayed days
         					'.' + calOptions.prevMonthClass + ', ' +
         					'.' + calOptions.nextMonthClass + ', ' +
         					'.' + calOptions.currentMonthClass),
         				data = '';

         			if (this.isOpen && toggled !== undefined && value_2)  {
         				for (var n = 0, m = dates.length; n < m; n++) {
         					if (data = dates[n].getAttribute(this.options.pickerAttribute)) {
         						data = +data.replace(/-(\d)(?=(?:-|$))/g, '0$1').replace(/-/g, '');
         						if (value_1 && value_2 && value_1 !== value_2 && (
         								(value_1 <= data && value_2 >= data) ||
         								(value_1 >= data && value_2 <= data))) {
         							dates[n].className += ' ' + (this.options.rangeClass || 'range') +
         							(value_1 === data || value_2 === data ? ' range-' +
         								(value_1 >= data && value_2 >= data? 'begin' : 'end') : '');
         						}
         					}
         				}
         			}
         		},
         		/**
         		 * Can be used in options.renderCallback;
         		 * Call like: funcName.call(this, container, element, toggled);
         		 * Renders 3 buttons to the end of datePicker with event listener for
         		 * clearing the input, jumping to today and for closing the date picker.
         		 * Adds 'disabled' attribute in case they can't be used (hide in CSS).
         		 * Uses options.clearText, options.todayText and options.closeText (optional).
         		 * Today button has an attribute data-picker="", so it works like day in calender
         		 * where click event is picked up internaly.
         		 *
         		 * @param  {[type]} container [description]
         		 * @param  {[type]} element   [description]
         		 * @param  {[type]} toggled   [description]
         		 * @return {[type]}           [description]
         		 */
         		addButtons = function(container, element, toggled) {
         			var _today = new Date(),
         				today = _today.getFullYear() + '-' + (_today.getMonth() + 1) + '-' + _today.getDate(),
         				date = this.date.year + '-' + +this.date.month + '-' + +this.date.day,
         				isFrom = element.hasAttribute(this.options.rangeStartAttribute),
         				isRange = this.currentPartner,
         				value_2 = isRange && +this.currentPartner.value.split(' ')[0].replace(/-/g, ''),
         				minDate = +(element.getAttribute(this.options.minDateAttribute) || this.options.minDate).replace(/-/g, ''),
         				maxDate = +(element.getAttribute(this.options.maxDateAttribute) || this.options.maxDate).replace(/-/g, ''),
         				_today = +today.replace(/-(\d)(?=(?:-|$))/g, '0$1').replace(/-/g, ''),
         				todayPossible = (today !== date || !element.value) && minDate <= _today && _today <= maxDate && (
         					isRange ? (isFrom ? !value_2 || value_2 >= _today : !value_2 || value_2 <= _today) : true);

         			this.isOpen && toggled !== undefined && container.insertAdjacentHTML('beforeend', // render buttons...
         				'<div class="dp-footer">' +
         					'<button class="action clear"' + (this.currentInput.value ? '' : ' disabled') +
         						' type="button">' + (this.options.clearText || 'clear') + '</button>' +
         					'<button class="action today"' + (todayPossible ? '' : ' disabled') +
         						' data-picker="' + today + '" type="button">' + (this.options.todayText || 'today') + '</button>' +
         					'<button class="action close" type="button">' + (this.options.closeText || 'close') + '</button>' +
         				'</div>');

         			this._hasListeners = this._hasListeners || (function(_this) { // ...and add event listeners (once)
         				container.addEventListener('click', function(e) {
         					var target = e.target,
         						className = target.className;

         					if (/action/.test(className)) {
         						if (/close/.test(className)) {
         							_this.toggle();
         						} else if (/clear/.test(className)) {
         							_this.currentInput.value = '';
         							_this.toggle(true);
         						}
         					}
         				});

         				return true; // make this._hasListeners true for next call of renderCallback
         			})(this);
         		};




// GOOGLE MAP API + SNAZZY MAP CUSTOM

 var map;
 var marker;
 function initMap() {
     map = new google.maps.Map(document.getElementById('map'), {
         center: {lat: 48.885713, lng: 2.335819},
         zoom: 17 ,
         styles : style,
         scrollwheel: false,
         streetViewControl: false,
         mapTypeControl: false
     });
     marker = new google.maps.Marker({
         map: map,
         icon: '/static/img/lobster.png',
         draggable: true,
         animation: google.maps.Animation.DROP,
         position: {lat: 48.8856, lng: 2.335810}
     });
     marker.addListener('click', toggleBounce);
 }

 function toggleBounce() {
     if (marker.getAnimation() !== null) {
         marker.setAnimation(null);
     } else {
         marker.setAnimation(google.maps.Animation.BOUNCE);
     }
 }

 var style =
 [
{
"featureType": "administrative",
"elementType": "all",
"stylers": [
    {
        "visibility": "on"
    },
    {
        "lightness": 33
    }
]
},
{
"featureType": "administrative",
"elementType": "labels",
"stylers": [
    {
        "saturation": "-100"
    }
]
},
{
"featureType": "administrative",
"elementType": "labels.text",
"stylers": [
    {
        "gamma": "0.75"
    }
]
},
{
"featureType": "administrative.neighborhood",
"elementType": "labels.text.fill",
"stylers": [
    {
        "lightness": "-37"
    }
]
},
{
"featureType": "landscape",
"elementType": "geometry",
"stylers": [
    {
        "color": "#f9f9f9"
    }
]
},
{
"featureType": "landscape.man_made",
"elementType": "geometry",
"stylers": [
    {
        "saturation": "-100"
    },
    {
        "lightness": "40"
    },
    {
        "visibility": "off"
    }
]
},
{
"featureType": "landscape.natural",
"elementType": "labels.text.fill",
"stylers": [
    {
        "saturation": "-100"
    },
    {
        "lightness": "-37"
    }
]
},
{
"featureType": "landscape.natural",
"elementType": "labels.text.stroke",
"stylers": [
    {
        "saturation": "-100"
    },
    {
        "lightness": "100"
    },
    {
        "weight": "2"
    }
]
},
{
"featureType": "landscape.natural",
"elementType": "labels.icon",
"stylers": [
    {
        "saturation": "-100"
    }
]
},
{
"featureType": "poi",
"elementType": "all",
"stylers": [
    {
        "visibility": "off"
    }
]
},
{
"featureType": "poi",
"elementType": "geometry",
"stylers": [
    {
        "saturation": "-100"
    },
    {
        "lightness": "80"
    }
]
},
{
"featureType": "poi",
"elementType": "labels",
"stylers": [
    {
        "saturation": "-100"
    },
    {
        "lightness": "0"
    }
]
},
{
"featureType": "poi.attraction",
"elementType": "geometry",
"stylers": [
    {
        "lightness": "-4"
    },
    {
        "saturation": "-100"
    }
]
},
{
"featureType": "poi.park",
"elementType": "geometry",
"stylers": [
    {
        "color": "#c5dac6"
    },
    {
        "visibility": "on"
    },
    {
        "saturation": "-95"
    },
    {
        "lightness": "62"
    }
]
},
{
"featureType": "poi.park",
"elementType": "labels",
"stylers": [
    {
        "visibility": "on"
    },
    {
        "lightness": 20
    }
]
},
{
"featureType": "road",
"elementType": "all",
"stylers": [
    {
        "lightness": 20
    },
    {
        "visibility": "on"
    }
]
},
{
"featureType": "road",
"elementType": "labels",
"stylers": [
    {
        "saturation": "-100"
    },
    {
        "gamma": "1.00"
    }
]
},
{
"featureType": "road",
"elementType": "labels.text",
"stylers": [
    {
        "gamma": "0.50"
    }
]
},
{
"featureType": "road",
"elementType": "labels.icon",
"stylers": [
    {
        "saturation": "-100"
    },
    {
        "gamma": "0.50"
    }
]
},
{
"featureType": "road.highway",
"elementType": "geometry",
"stylers": [
    {
        "color": "#c5c6c6"
    },
    {
        "saturation": "-100"
    }
]
},
{
"featureType": "road.highway",
"elementType": "geometry.stroke",
"stylers": [
    {
        "lightness": "-13"
    }
]
},
{
"featureType": "road.highway",
"elementType": "labels.icon",
"stylers": [
    {
        "lightness": "0"
    },
    {
        "gamma": "1.09"
    }
]
},
{
"featureType": "road.arterial",
"elementType": "geometry",
"stylers": [
    {
        "color": "#e4d7c6"
    },
    {
        "saturation": "-100"
    },
    {
        "lightness": "47"
    }
]
},
{
"featureType": "road.arterial",
"elementType": "geometry.stroke",
"stylers": [
    {
        "lightness": "-12"
    }
]
},
{
"featureType": "road.arterial",
"elementType": "labels.icon",
"stylers": [
    {
        "saturation": "-100"
    }
]
},
{
"featureType": "road.local",
"elementType": "geometry",
"stylers": [
    {
        "color": "#fbfaf7"
    },
    {
        "lightness": "77"
    }
]
},
{
"featureType": "road.local",
"elementType": "geometry.fill",
"stylers": [
    {
        "lightness": "-5"
    },
    {
        "saturation": "-100"
    }
]
},
{
"featureType": "road.local",
"elementType": "geometry.stroke",
"stylers": [
    {
        "saturation": "-100"
    },
    {
        "lightness": "-15"
    }
]
},
{
"featureType": "transit.station.airport",
"elementType": "geometry",
"stylers": [
    {
        "lightness": "47"
    },
    {
        "saturation": "-100"
    }
]
},
{
"featureType": "water",
"elementType": "all",
"stylers": [
    {
        "visibility": "on"
    },
    {
        "color": "#a6c2cd"
    }
]
},
{
"featureType": "water",
"elementType": "geometry",
"stylers": [
    {
        "saturation": "53"
    }
]
},
{
"featureType": "water",
"elementType": "labels.text.fill",
"stylers": [
    {
        "lightness": "-42"
    },
    {
        "saturation": "17"
    }
]
},
{
"featureType": "water",
"elementType": "labels.text.stroke",
"stylers": [
    {
        "lightness": "61"
    }
]
}
] ;
