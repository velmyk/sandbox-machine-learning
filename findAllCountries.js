const fs = require('fs');

fs.readFile('./players.json', 'utf8', (err, data) => {
	const players = JSON.parse(data);
	const countries = players.reduce((all, player)  => {
		return all.indexOf(player.nationality) < 0
			? [ ...all, player.nationality ]
			: all;
	}, []);

	let index = 1,
		result = {};

	countries.forEach(country => result[country] = index++);
	console.log(result);
});