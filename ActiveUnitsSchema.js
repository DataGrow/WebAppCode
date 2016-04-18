var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Data = new Schema(
{
    waterTemp: { type: Number, required: true },
    airTemp: { type: Number, required: true },
    humidity: { type: Number, require: true },
    light: { type: Number, require: true }
});

var Hour = new Schema(
{
    data: [ Data ]
});

var Day = new Schema(
{
    hour: [ Hour ]
});

var Units = new Schema(
{
    name: { type: String, required: true },
    product: { type: String, required: true },
    harvest: {
        id: { type: Number, required: true},
        startTime: { type: Date, default: Date.now }
    }, 

    day: [ Day ]
});

var ActiveUnits = new Schema(
{
    numUnits: { type: Number, required: true },
    units: [ Units ]  
});

mongoose.model('ActiveUnits', ActiveUnits);


