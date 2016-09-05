const
	normalizer = require('./normalizer'),
	fs = require('fs');

fs.readFile('./players.json', 'utf8', (err, data) => {
	const players = JSON.parse(data);

	const mappedPlayers = players.map(player => {
		return {
			position: player.position && normalizer.positionsMap[player.position],
			dateOfBirth: player.dateOfBirth && normalizer.date(player.dateOfBirth),
			nationality: player.nationality && normalizer.nationalityMap[player.nationality],
			marketValue: player.marketValue && normalizer.price(player.marketValue),
			teamId: player.teamId
		};
	});

	fs.writeFile('./mappedPlayers.json', JSON.stringify(mappedPlayers));
});