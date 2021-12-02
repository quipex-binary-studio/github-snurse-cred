import { BASE_TO_LABEL } from '../../../../maps';
import { Label, WebhookContext } from '../../../../types';

const calculateLabelContext = (context: WebhookContext) => {
    const prBase: string = context.payload.pull_request?.base?.ref;
    if (!prBase) {
        return;
    }

    const assignedLabelNames: string[] = context.payload.pull_request?.labels?.map((l: Label) => l.name);
    const matchingLabelName = BASE_TO_LABEL[prBase];
    const nonMatchingLabels = Object.entries(BASE_TO_LABEL)
      .filter(([key]) => key !== prBase)
      .map(([, value]) => value);

    return { assignedLabelNames, matchingLabelName, nonMatchingLabels };
};

export { calculateLabelContext };
