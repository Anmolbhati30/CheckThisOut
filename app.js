/**
 * Required External Modules
 */

const express = require("express");
const path = require("path");

/**
 * App Variables
 */


const app = express();
const port = process.env.PORT || "8000";

/**
 *  App Configuration
 */


/**
 * Routes Definitions
 */

app.get("/", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "landing_page.html"));
});

app.get("/index_trial.html", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "index_trial.html"));
});

app.post("/payment_page.html", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "payment_page.html"));
});

app.get("/final_page.html", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "final_page.html"));
});

app.get("/style.css", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "style.css"));
});

/**
 * Server Activation
 */

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});