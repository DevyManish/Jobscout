import express from "express";
import "dotenv/config";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const PORT = process.env.PORT || 7000;

const app = express();

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// *middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false })); //accepts data ffrom req

// Set view engine (fix: "view engine" should be lowercase)
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "./views"));

app.use(cors());

// app.use("/", routes);
app.get("/", (req, res) => {
  //   return res.send("Welcome to Jobscout Server📡");
  return res.render("welcome"); // Renders 'welcome.ejs'
});

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
