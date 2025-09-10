import type { AllMiddlewareArgs, SlackEventMiddlewareArgs } from '@slack/bolt';
import { logReactionAdded } from "../../wrappers/logsnagWrapper.ts";

export async function reactionAddedCallback({
	                                            client,
	                                            event,
	                                            logger,
                                            }: AllMiddlewareArgs & SlackEventMiddlewareArgs<'reaction_added'>) {
	try {
		logger.info('Reaction added event received:', event.reaction);


	} catch (error) {
		logger.error('Error handling reaction_added event:', error);
	}
}