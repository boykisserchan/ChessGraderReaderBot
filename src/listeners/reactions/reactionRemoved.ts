import type { AllMiddlewareArgs, SlackEventMiddlewareArgs } from '@slack/bolt';
import { logReactionRemoved } from "../../wrappers/logsnagWrapper.ts";

export async function reactionRemovedCallback({
	                                            client,
	                                            event,
	                                            logger,
                                            }: AllMiddlewareArgs & SlackEventMiddlewareArgs<'reaction_removed'>) {
	try {
		logger.info('Reaction removed event received:', event.reaction);
	} catch (error) {
		logger.error('Error handling reaction_removed event:', error);
	}
}