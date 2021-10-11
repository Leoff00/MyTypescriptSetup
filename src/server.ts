import express from "express";
import exampleObject from "@exf/exampleFile";

const example = new exampleObject("foo", "bar");
const app = express();

app.get("/", (req, res) => {
    return res.json({
        greeting: `Hello this is my config setup to work with Typescript environment and i'm using the ${example.show()} example module`,
    });
});

app.listen(3333, () => {
    console.log(`listening on port http://localhost:3333`);
});
