import type { AllMiddlewareArgs, SlackEventMiddlewareArgs } from '@slack/bolt';
import {logReactionAdded} from "../../wrappers/logsnagWrapper.ts";

const reactionAddedCallback = async ({
	                                     client,
	                                     event,
	                                     logger,
                                     }: AllMiddlewareArgs & SlackEventMiddlewareArgs<'reaction_added'>) => {
	try {
		logger.debug('Reaction added event received:', event);

		logReactionAdded(event.reaction, event.user, event.item_user, event.item.channel, event.item.ts)
	} catch (error) {
		logger.error('Error handling reaction_added event:', error);
	}
};

export default reactionAddedCallback;