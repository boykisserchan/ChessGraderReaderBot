import type { AllMiddlewareArgs, SlackEventMiddlewareArgs } from '@slack/bolt';
import { logReactionRemoved } from "../../wrappers/logsnagWrapper.ts";

export async function reactionRemovedCallback({
	                                            client,
	                                            event,
	                                            logger,
                                            }: AllMiddlewareArgs & SlackEventMiddlewareArgs<'reaction_removed'>) {
	try {
		logger.info('Reaction removed event received:', event.reaction);

		await logReactionRemoved(event.reaction, event.user, event.item_user, event.item.channel, event.item.ts)
	} catch (error) {
		logger.error('Error handling reaction_removed event:', error);
	}
}