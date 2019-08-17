import express from "express";
import graphqlHTTP from "express-graphql";
import OwnerSchema from "./src/graphql/schema";
import winston from "./config/winston";
import morgan from "morgan";
import bodyParser from "body-parser";


const PORT = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());
app.use(morgan('combined', { stream: winston.stream }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', graphqlHTTP(request => {
    winston.info(`QUERY: "${request.body.query}"`);
    return {
        schema: OwnerSchema,
        graphiql: true
    }
}));

app.listen(PORT, () => console.log("Server is Up and running at http://localhost:" + PORT));