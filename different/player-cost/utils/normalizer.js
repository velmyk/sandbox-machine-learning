const positionsMap = {
	'Centre Forward': 1,
	'Left-Back': 2,
	Keeper: 3,
	'Centre Back': 4,
	'Right-Back': 5,
	'Defensive Midfield': 6,
	'Central Midfield': 7,
	'Left Wing': 8,
	'Right Wing': 9,
	'Right Midfield': 10,
	'Attacking Midfield': 11,
	'Secondary Striker': 12,
	Defence: 13,
	'Left Midfield': 14
};

const nationalityMap = {
	Germany: 1,
	Kazakhstan: 2,
	Albania: 3,
	Slovenia: 4,
	'United States': 5,
	Brazil: 6,
	Nigeria: 7,
	Iran: 8,
	Austria: 9,
	Spain: 10,
	Chile: 11,
	France: 12,
	Netherlands: 13,
	Poland: 14,
	Portugal: 15,
	Japan: 16,
	Australia: 17,
	'Bosnia-Herzegovina': 18,
	Argentina: 19,
	Romania: 20,
	'Czech Republic': 21,
	Ukraine: 22,
	Ghana: 23,
	Switzerland: 24,
	Turkey: 25,
	Norway: 26,
	Cameroon: 27,
	Israel: 28,
	Paraguay: 29,
	Denmark: 30,
	Croatia: 31,
	Greece: 32,
	Serbia: 33,
	Sweden: 34,
	'Korea, South': 35,
	'The Gambia': 36,
	Senegal: 37,
	Kosovo: 38,
	Finland: 39,
	Hungary: 40,
	Slovakia: 41,
	England: 42,
	'Costa Rica': 43,
	Tunisia: 44,
	Gabon: 45,
	Colombia: 46,
	Italy: 47,
	Belgium: 48,
	Peru: 49,
	Russia: 50,
	Latvia: 51,
	Iceland: 52,
	Mexico: 53,
	Jamaica: 54,
	Uruguay: 55,
	Ireland: 56,
	Scotland: 57,
	Benin: 58,
	Montenegro: 59,
	Algeria: 60,
	'Cote d\'Ivoire': 61,
	Lithuania: 62,
	Estonia: 63,
	'Congo DR': 64,
	Egypt: 65,
	Wales: 66,
	Togo: 67,
	Armenia: 68,
	Canada: 69,
	Morocco: 70,
	Mali: 71,
	Uganda: 72,
	Venezuela: 73,
	Georgia: 74
};

function date(stringDate) {
	const
		startDate = 1960,
		endDate = 2002;

	const arr = Array(endDate - startDate).fill(0);
	const index =  Number(stringDate.substr(0, 4)) - startDate;
	arr[index] = 1;

	return arr;
}

function price(stringPrice) {
	const price = stringPrice && Number(stringPrice.replace(/\D/g, ''));
	const arr = Array(12).fill(0);

	if (price < 1000000) {
		arr[0] = 1;
	} else if (price > 50000000) {
		arr[11] = 1;
	} else {
		let index = Math.ceil(price / 5000000);
		arr[index] = 1;
	}

	return arr;

}

function nationality (stringNationality) {
	const arr = Array(Object.keys(nationalityMap).length).fill(0);
	arr[nationalityMap[stringNationality]] = 1;
	
	return arr;
}

function team (teamId) {
	const arr = Array(60).fill(0);
	arr[teamId] = 1;

	return arr;
}

function position (stringPosition) {
	const arr = Array(Object.keys(positionsMap).length).fill(0);
	arr[positionsMap[stringPosition]] = 1;
	
	return arr;
}

module.exports = {
	date,
	team,
	price,
	position,
	nationality,
	positionsMap
};