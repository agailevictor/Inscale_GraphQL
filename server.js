import express from "express";

const PORT = process.env.PORT || 4000;
const app = express();

app.listen(PORT, () => console.log("Server is Up and running at http://localhost:" + PORT));