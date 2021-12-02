import { WebhookContext } from '../types';
import { managePrBaseLabels } from './helpers';

const handlePrOpened = async (context: WebhookContext) => {
    console.log('pr opened');
    await managePrBaseLabels(context);
    console.log('end of pr opened action');
};

export { handlePrOpened };
