//import "reflect-metadata";
import express from "express";
import bodyParser from "body-parser";
import routes from '../src/routes/index';

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

//app.use("/","./routes");
app.use('/api', routes)

/
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
