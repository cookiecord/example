import CookiecordClient from "cookiecord";
import de from "dotenv";
import PunishmentModule from "./punishments";
de.config();

const client = new CookiecordClient({}, {});
new PunishmentModule(client);
client.login(process.env.TOKEN);
