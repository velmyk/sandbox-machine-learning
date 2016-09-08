const fs = require('fs');

fs.readFile('../data/source.json', 'utf8', (err, data) => {
	const players = JSON.parse(data);
	const positions = players.reduce((all, player)  => {
		return all.indexOf(player.position) < 0
			? [ ...all, player.position ]
			: all;
	}, []);

	let index = 1,
		result = {};

	positions.forEach(position => result[position] = index++);
	console.log(result);
});