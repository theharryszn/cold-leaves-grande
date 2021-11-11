import "reflect-metadata"
import "dotenv/config"
import { ApolloGateway } from "@apollo/gateway";
import * as User from"./graphs/user";
import { ApolloServer } from "apollo-server";
import { PORT } from "./config";
import { createConnection } from "typeorm";
import getConnection from "./helpers/getConnection";
import { loadEntities } from "./helpers/loadEntities";
import { Logger } from "./modules/Logger";

async function bootstrap() {

    const config = await getConnection().then((connection) => {
      return { ...connection, entities: loadEntities() };
    });
    createConnection(config)
    .then(async () => {
      Logger.info("Database Connected");
    })
    .catch((err) => {
      Logger.error("Error connecting to database " + err);
    });

    const serviceList = [
      { name: "accounts", url: await User.init() },
    ];
  
    const gateway = new ApolloGateway({
      serviceList,
    });
  
    const { schema, executor } = await gateway.load();
  
    const server = new ApolloServer({
      schema,
      executor,
    });
  
    server.listen({ port: PORT }).then(({ url }) => {
      console.log(`Apollo Gateway ready at ${url}`);
    });
  }
  
  bootstrap().catch(console.error);