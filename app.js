const DSB = require('dsbapi');

const dsb = new DSB('160902', 'GvB63');

dsb.fetch()
	.then(data => {
		const timetables = DSB.findMethodInData('timetable', data);
		const tiles = DSB.findMethodInData('tiles', data);

		console.trace(timetables)
		// Work with it
	})
	.catch(e => {
		// An error occurred :(
		console.log(e);
	});
