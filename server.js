import {app } from "./app.js"
import { connectdb } from "./Data/database.js";


connectdb()
app.listen(process.env.PORT, () => {
    console.log(`server is working on port:${process.env.PORT}  in ${process.env.NODE_ENV} mode`);
  })
  