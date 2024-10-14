import express from "express";
import "dotenv/config";
import cors from "cors";

const PORT = process.env.PORT || 7000;

const app = express();

// *middleware
app.use(cors());


// app.use("/", routes);
app.get("/", (req, res) =>{
    return res.send("Welcome to Jobscout Server📡");
})

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
