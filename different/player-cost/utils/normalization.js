const
	normalizer = require('./normalizer'),
	fs = require('fs');

fs.readFile('../data/source.json', 'utf8', (err, data) => {
	const players = JSON.parse(data);

	const mappedPlayers = players
		.filter(filterNoPrice)
		.map(normalizeFields);

	console.log(mappedPlayers.length);

	fs.writeFile('./mappedPlayers.json', JSON.stringify(mappedPlayers));

	function filterNoPrice(player) {
		return player.marketValue;
	}

	function normalizeFields(player) {
		const
			position = player.position && normalizer.position(player.position),
			dateOfBirth = player.dateOfBirth && normalizer.date(player.dateOfBirth),
			nationality = player.nationality && normalizer.nationality(player.nationality),
			teamId = player.teamId && normalizer.team(player.teamId),
			marketValue = player.marketValue && normalizer.price(player.marketValue);

		return {
			input: [
				...position,
				...dateOfBirth,
				...nationality,
				...teamId
			],
			output: marketValue
		};
	}
});