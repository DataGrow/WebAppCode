var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Data = new Schema(
{
    waterTemp = { type: Number, required: true },
    airTemp = { type: Number, required: true },
    ph = { type: Number, required: true },
    humidity = { type: Number, require: true },
    ligth = { type: Number, require: true }

});

var Hour = new Schema(
{
    data = [ Data ]
});

var Day = new Schema(
{
    hour = [ Hour ]
});

var Units = new Schema(
{
    name: { type: String, required: true, default: "Unit00"},
    product: { type: String, required: true, default: "Micro Greens"},
    harvest: {
        id: { type: Number, required: true},
        startTime: { type: Date, default: Date.now }
    },


    day: [ Day ]
});

var Active = new Schema(
{
    numUnits: { type: Number, required: true },
    units: [ Units ]  
});

mongoose.model('ActiveUnits', ActiveUnits);

var user = db.model('UserInfo');


var admin = new user();
admin.username = "sss";
admin.password = "ee";
admin.save();