exports.in = function(location) {
	var map = {
		'Helsinki' : 'Helsingissä',
		'Oulu' : 'Oulussa',
		'Turku' : 'Turussa',
		'Tampere' : 'Tampereella',
		'Rovaniemi' : 'Rovaniemellä',
		'Kuopio' : 'Kuopiossa',
		'Jyväskylä' : 'Jyväskylässä',
		'Vaasa' : 'Vaasassa',
		'Pori' : 'Porissa',
		'Lappeenranta' : 'Lappeenrannassa',
		'Joensuu' : 'Joensuussa',
		'Vantaa' : 'Vantaalla',
		'Espoo' : 'Espoossa'
	};
	var location = map[location];
	if(!location) {
		throw new Error('Location not found from location map');
	}
	return location;
}