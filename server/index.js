import express from "express";
import path from "path";
import { getGlobals } from 'common-es';

const app = express();

const { __dirname, __filename } = getGlobals(import.meta.url);
const publicPath = path.join(__dirname, '..', 'public');
console.log(publicPath)
const PORT = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.get("*", (req, res) => {
    res.sendFile(path.join(publicPath, "index.html"));
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});