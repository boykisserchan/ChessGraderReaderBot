import type { AllMiddlewareArgs, SlackEventMiddlewareArgs } from '@slack/bolt';
import { logReactionAdded } from "../../wrappers/logsnagWrapper.ts";

export async function reactionAddedCallback({
	                                            client,
	                                            event,
	                                            logger,
                                            }: AllMiddlewareArgs & SlackEventMiddlewareArgs<'reaction_added'>) {
	try {
		logger.info('Reaction added event received:', event.reaction);

		await logReactionAdded(event.reaction, event.user, event.item_user, event.item.channel, event.item.ts, logger)
	} catch (error) {
		logger.error('Error handling reaction_added event:', error);
	}
}