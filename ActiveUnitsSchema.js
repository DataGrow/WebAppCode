let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let Data = new Schema(
{
    waterTemp: { type: Number, required: true },
    airTemp: { type: Number, required: true },
    humidity: { type: Number, require: true },
    light: { type: Number, require: true }
});

let Hour = new Schema(
{
<<<<<<< HEAD
    data: [ Data ]
=======
    data : [ Data ]
>>>>>>> 57a67d6e30331c6a38b8386b8f72f5516211f29a
});

let Day = new Schema(
{
<<<<<<< HEAD
    hour: [ Hour ]
=======
    hour : [ Hour ]
>>>>>>> 57a67d6e30331c6a38b8386b8f72f5516211f29a
});

let Units = new Schema(
{
    name: { type: String, required: true },
    product: { type: String, required: true },
    harvest: {
        id: { type: Number, required: true},
        startTime: { type: Date, default: Date.now }
<<<<<<< HEAD
    }, 

    day: [ Day ]
});

var ActiveUnits = new Schema(
=======
    },
    day: [ Day ]
});

let Active = new Schema(
>>>>>>> 57a67d6e30331c6a38b8386b8f72f5516211f29a
{
    numUnits: { type: Number, required: true },
    units: [ Units ]  
});

module.exports = mongoose.model('ActiveUnits', Active);


