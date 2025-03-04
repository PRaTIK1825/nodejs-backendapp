import mongoose from "mongoose";

export const connectdb = ()=>{
    mongoose
  .connect(process.env.MONGO_URI, {
    dbName: "backendapi",
  })
  .then((c) => console.log(`Database connected with ${c.connection.host}`))
  .catch((e) => console.log(e));
}

