import { App, LogLevel } from '@slack/bolt'
import secrets from './wrappers/secretWrapper.ts'
import registerListeners from "./listeners";

/** Initialization */
const app = new App({
	token: secrets.slack_bot_token,
	socketMode: true,
	appToken: secrets.slack_app_token,
	logLevel: LogLevel.INFO
});

registerListeners(app);

(async () => {
	try {
		await app.start();
		app.logger.info('Chess is running!');
	} catch (error) {
		app.logger.error('Failed to start the app', error);
	}
})();
