import { WebhookContext } from '../types';
import { managePrBaseLabels } from './helpers';

const handlePrEdited = async (context: WebhookContext) => {
    console.log('pr edited');
    await managePrBaseLabels(context);
    console.log('end of pr edited action');
};

export { handlePrEdited };
