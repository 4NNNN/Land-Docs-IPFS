const express = require('express')
const mongoose=require('mongoose');
// import './schema.js';
require('dotenv')
const app = express()
app.use(express.json())

const pinataSDK = require('@pinata/sdk');
const pinata = pinataSDK('66d6f8de0872842a71d7', 'b72598bf6bf2cab8655f653439b9af17a3816dabc9048255b3c225b76022babc');
 
mongoose.connect('mongodb+srv://charan1905013:Passion21!@cluster0.b4tdm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',()=>{
    console.log("database connected");
})

function insertRecord (req, res){
var Land = new Land ();
Land. fullName = req.body.name;
Land.email = req.body.ownerName;
Land.mobile= req.body.ownerType;
Land.city = req.body.ownerLandsq;
Land.save((err,doc) => {
    if(!err){
        console.log("inserted succesfully")
    }
    else
    {
        console.log("problem in code");
    }
})
}



app.get('/', 

function (name) {


//test Auth
pinata.testAuthentication().then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});


//pinning file
const sourcePath = './text.txt';
const metadata = {
    name: 'Charan - Saravampatti document',
    keyvalues: {
        ownername: name,
        ownertype: '1st-owner',
        ownerlandsq: '526sq-address'
    }
};

insertRecord(Land);

pinata.pinFromFS(sourcePath, metadata).then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});
console.log(metadata);
})

//metadata update
app.get('/metadata-hashing', 
function (metavalue) {
//hasing metadata
const metadata = {
    //name: 'Charan - Saravampatti document',
    keyvalues: {
       metakey : metavalue
    }
};

pinata.hashMetadata(hash, metadata).then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});

})

//hash file delete
app.get('/file-delete', 
function (hashToUnpin) {
    pinata.unpin(hashToUnpin).then((result) => {
        //handle results here
        console.log(result);
    }).catch((err) => {
        //handle error here
        console.log(err);
    });
})



app.listen(8000)