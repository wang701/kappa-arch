'use strict';

let avro = require('avsc');

let raw_isobus_type = avro.parse({
	name: 'rawisobus',
	type: 'record',
	fields: [
		{ name: 'timestamp', type: 'long' },
		{ name: 'pgn', type: 'int' },
		{ name: 'data', type: 'bytes' }
	]
});

let gps_latlon_type = avro.parse({
	name: 'gpslatlon',
	type: 'record',
	fields: [
		{ name: 'timestamp', type: 'long' },
		{ name: 'lat', type: 'float' },
		{ name: 'lon', type: 'float' }
	]
});

let fuel_rate_type = avro.parse({
	name: 'fuelrate',
	type: 'record',
	fields: [
		{ name: 'timestamp', type: 'long' },
		{ name: 'fuelrate', type: 'float' }
	]
});

exports.raw_isobus_type = raw_isobus_type;
exports.gps_latlon_type = gps_latlon_type;
exports.fuel_rate_type = fuel_rate_type;
