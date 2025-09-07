import type { App } from '@slack/bolt';
import reactionAddedCallback from "./reactionAdded.ts";

const register = (app: App) => {
	app.event('reaction_added', reactionAddedCallback);
};

export default { register };