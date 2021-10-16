const chalk = require('chalk');

module.exports = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.yellow('[ Jas Ngu ] » ') + data);
			break;
		case "error":
			console.log(chalk.red('[ Jas Ngu ] » ') + data);
			break;
		default:
			console.log(chalk.magenta(`${option} » `) + data);
			break;
	}
}

module.exports.loader = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.yellow('[ Jas Ngu ] » ') + data);
			break;
		case "error":
			console.log(chalk.red('[ Jas Ngu ] » ') + data);
			break;
		default:
			console.log(chalk.green(`[ Jas Ngu ] » `) + data);
			break;
	}
}