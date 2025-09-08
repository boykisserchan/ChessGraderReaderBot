import type { App } from '@slack/bolt';
import { reactionAddedCallback } from "./reactionAdded.ts";
import { reactionRemovedCallback } from "./reactionRemoved.ts";

export default {
	register(app: App){
		app.event('reaction_added', reactionAddedCallback);
		app.event("reaction_removed", reactionRemovedCallback);
	}
}