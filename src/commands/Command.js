const Commando = require("discord.js-commando");

module.exports = class Command extends Commando.Command {
	constructor(client, info) {
		super(client, info);
		this.description = info.description || null;
                this.examples = info.examples || [];
		this.clientpermissions = info.clientpermissions || [];
		this.userpermissions = info.userpermissions || [];
	}
};
