import { command, Module, listener, default as CookiecordClient } from "cookiecord";
import { Message, GuildMember, User } from "discord.js";

export default class PunishmentModule extends Module {
	constructor(client: CookiecordClient) {
		super(client);
	}

	@command({ description: "asd" })
	test(msg: Message, a: string, b: number, u: User, m: GuildMember) {
		msg.reply(a + b + u.tag + m.nickname);
	}

	@command({ description: "abc", aliases: ["gc"] })
	guildcount(msg: Message, offset: number) {
		msg.reply(this.client.guilds.size + offset);
	}

	@listener({ event: "message" })
	onTest(msg: Message) {
		console.log("onTest", msg.content);
	}
}