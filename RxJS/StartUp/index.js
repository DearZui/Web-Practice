const appContainer = document.getElementById('app-container');
const zipcodeInput = document.getElementById('zipcode-input');
const addLocation = document.getElementById('add-location');

const btnClickStream = 
	Rx.Observable
		.fromEvent(addLocation, 'click')
		.map(() => true);

const zipInputStream = 
	Rx.Observable
		.fromEvent(zipcodeInput, 'input')
		.map(e => e.target.value)
		.filter(zip => zip.length === 5);

const zipcodeStream = 
	btnClickStream
		.withLatestFrom(zipInputStream, (click, zip) => zip)
		.distinct();

const getTemperature = zip =>
	fetch('http://api.openweathermap.org/data/2.5/weather?q=${zip},us&units=imperial&appid=96fc20735d29198f91136da8422e2338')
		.then(res => res.json());

const zipTemperatureStreamFactory = zip => 
	Rx.Observable
		.fromPromise(getTemperature(zip))
		.map(({ main: { temp } }) => ({ temp, zip }));