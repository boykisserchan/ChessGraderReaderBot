import type {App} from '@slack/bolt';
import reactions from './reactions'

const registerListeners = (app: App) => {
	reactions.register(app);
};

export default registerListeners;