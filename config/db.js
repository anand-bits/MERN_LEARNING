const mongoose= require("mongoose");

require ('dotenv').config()


    const connectToDb = async () => {
        
         mongoose.connect(process.env.MONGO_URI)
         .then((conn=>
          console.log(`Connected to db: ${conn.connection.host}`)
          )). catch ((err)=> {
          console.error(err.message);
          process.exit(1);
        })
      };

      module.exports=connectToDb;

