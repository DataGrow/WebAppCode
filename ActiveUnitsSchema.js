let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let Data = new Schema(
{
    waterTemp : { type: Number, required: true },
    airTemp : { type: Number, required: true },
    ph : { type: Number, required: true },
    humidity : { type: Number, require: true },
    light : { type: Number, require: true }

});

let Hour = new Schema(
{
    data : [ Data ]
});

let Day = new Schema(
{
    hour : [ Hour ]
});

let Units = new Schema(
{
    name: { type: String, required: true, default: "Unit00"},
    product: { type: String, required: true, default: "Micro Greens"},
    harvest: {
        id: { type: Number, required: true},
        startTime: { type: Date, default: Date.now }
    },
    day: [ Day ]
});

let Active = new Schema(
{
    numUnits: { type: Number, required: true },
    units: [ Units ]  
});

module.exports = mongoose.model('ActiveUnits', Active);


