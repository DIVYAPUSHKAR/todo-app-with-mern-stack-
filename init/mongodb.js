const  Mongoose  = require("mongoose");
// const connectionUrl ="mongodb://localhost:27017/tododb";


const connectMongodb =async() =>
{
    try{

        await Mongoose.connect(process.env.CONNECTION_URL);
        console.log("database connected succesfully");
    }catch(error){
        console.log(error.message);
        process.exit(1) // IT MEANS TRUE IF ANY ERROOR HAPPEN IT WILL EXIT
    }
}
module.exports = connectMongodb;