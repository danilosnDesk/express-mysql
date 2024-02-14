const express = require("express");
const app = express();
const pool = require("./db/connection");

app.get("/", (req, res) => {
    pool.query("SELECT * FROM employes limit 2", (error, results, fields) => {
        if (error) {
            console.error("Error executing SQL query:", error);
            res.status(500).send("Internal Server Error");
            return;
        }
        res.send(
            {
                success: true,
                data: results,
                data_rows: results.length,
            }
        );
    });
});

const port = 5001;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});