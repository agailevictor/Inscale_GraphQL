import express from "express";
import graphqlHTTP from "express-graphql";
import OwnerSchema from "./src/graphql/schema";
import winston from "./config/winston";
import morgan from "morgan";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(morgan('combined', { stream: winston.stream }));
app.use('/', graphqlHTTP({
    schema: OwnerSchema,
    graphiql: true
}));

app.listen(PORT, () => console.log("Server is Up and running at http://localhost:" + PORT));