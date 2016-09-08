const
	fs = require('fs'),
	Client = require('node-rest-client').Client,
	client = new Client();

let allPlayers = [];

[...Array(60).keys()].forEach(getTeamPlayers);

function getTeamPlayers(teamId) {
	const args = {
		headers: {
			'X-Auth-Token': '506fded9507f4d35a31fae98edad9e02'
		}
	};

	client.get(`http://api.football-data.org/v1/teams/${teamId}/players`, args, data => {
		if (data._links && data.players.length) {
			allPlayers = [
				...allPlayers,
				...applyTeamToPlayer(teamId, data.players)
			];
		} else {
			console.log(`no data for team #${teamId}`);
		}		
	});
}

setTimeout(() => {
	console.log(allPlayers.length);
	writeDataToFile(allPlayers);
}, 5000);

function applyTeamToPlayer(teamId, players) {
	return players.map(player => Object.assign(player, { teamId }));
}

function writeDataToFile(data) {
	const players = JSON.stringify(data);
	fs.writeFile('../data/sourse.json', players, err => {
		if (err) console.error(err);
	});
}
