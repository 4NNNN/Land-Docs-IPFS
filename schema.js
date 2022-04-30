const mongoose = require("mongoose");

var LandSchema = new mongoose.Schema({
ownername: {
type: String,
required: "This field is required",
},

ownertype:{
type: String,
required: "This field is required",
},

ownerlandaddress: {
type: String,
required: "This field is required",
},

ownerlandsq: {
type: String,
required: "This field is required",
},
});

mongoose.model("Land", LandSchema);