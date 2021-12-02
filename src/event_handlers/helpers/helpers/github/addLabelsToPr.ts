import { WebhookContext } from '../../../../types';
import { extractPrInfoFromContext } from '../pull-requests';

const addLabelsToPr = (context: WebhookContext, labels: string[]) => {
    const extracted = extractPrInfoFromContext(context);
    if (!extracted) {
        return;
    }
    const { prNumber, repo, owner } = extracted;
    console.log('adding labels: ', labels.join(','));
    return context.octokit.issues.addLabels({ issue_number: prNumber, owner, repo, labels });
};

export { addLabelsToPr };
