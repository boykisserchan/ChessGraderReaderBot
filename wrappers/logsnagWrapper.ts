import {LogSnag} from "@logsnag/node";
import secrets from "./secretWrapper.ts";

const logsnag = new LogSnag({
	token: secrets.logsnag_project_token,
	project: secrets.logsnag_project_name,
});

export async function logReactionAdded(reaction: string, user: string, target: string, channelId: string, ts: string) {
	return logsnag.track({
		channel: "reaction_added",
		event: `New ${reaction} added`,
		user_id: target,
		tags: {
			reaction_added: reaction,
			user: user,
			target: target,
			channel_id: channelId,
			ts: ts,
		}
	});
}
export async function logReactionRemoved(reaction: string, user: string, target: string, channelId: string, ts: string) {
	return logsnag.track({
		channel: "reaction_removed",
		event: `${reaction} removed`,
		user_id: target,
		tags: {
			reaction_added: reaction,
			user: user,
			target: target,
			channel_id: channelId,
			ts: ts,
		}
	});
}