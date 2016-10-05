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

zipcodeStream
	.flatMap(zipTemperatureStreamFactory)
	.forEach(({ zip, temp }) => {
		const locationEle = document.createElement('div');
		locationEle.id = `zip-${zip}`;
		locationEle.classList.add(`location`);

		const zipEle = document.createElement('p');
		zipEle.classList.add('zip');
		zipEle.innerText = zip;

		const tempEle = document.createElement('p');
		tempEle.classList.add('temp');
		tempEle.innerHTML = `${temp}&deg;F`;

		locationEle.appendChild(zipEle);
		locationEle.appendChild(tempEle);
		appContainer.appendChild(locationEle);

		zipcodeInput.value = '';
	});

const replayZipStream = new Rx.ReplaySubject();
zipcodeStream.subscribe(replayZipStream);

Rx.Observable
	.interval(20000)
	.flatMapLatest(() => replayZipStream)
	.flatMap(zipTemperatureStreamFactory)
	.forEach(({ zip, temp }) => {
		console.log('Updating!', zip, temp);

		const locationEle = document.getElementById(`zip-${zip}`);
		const tempEle = locationEle.querySelector('.temp');

		tempEle.innerHTML = `${temp}&deg;F`;
	});