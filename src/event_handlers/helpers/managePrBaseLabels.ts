import { WebhookContext } from '../../types';
import {
    addLabelsToPr,
    calculateLabelContext,
    checkMatchingLabelNotAssigned,
    getNonMatchingLabelsAssigned,
    removeLabelFromPr
} from './helpers';

const managePrBaseLabels = async (context: WebhookContext) => {
    const calculatedLabelContext = calculateLabelContext(context);
    if (!calculatedLabelContext) {
        console.log('failed to calculate label context');
        return;
    }
    const { matchingLabelName, nonMatchingLabels, assignedLabelNames } = calculatedLabelContext;

    const actions = [];
    if (checkMatchingLabelNotAssigned(matchingLabelName, assignedLabelNames)) {
        actions.push(addLabelsToPr(context, [matchingLabelName]));
    }
    const nonMatchingLabelsAssigned = getNonMatchingLabelsAssigned(nonMatchingLabels, assignedLabelNames);
    nonMatchingLabelsAssigned.forEach(label => {
        actions.push(removeLabelFromPr(context, label));
    });
    await Promise.all(actions);
};

export { managePrBaseLabels };
