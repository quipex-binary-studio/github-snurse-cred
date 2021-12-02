import { WebhookContext } from '../../../../types';
import { extractPrInfoFromContext } from '../pull-requests';

const removeLabelFromPr = (context: WebhookContext, label: string) => {
    const extracted = extractPrInfoFromContext(context);
    if (!extracted) {
        return;
    }
    const { prNumber, repo, owner } = extracted;

    console.log('removing label: ', label);
    return context.octokit.issues.removeLabel({ repo, owner, issue_number: prNumber, name: label });
};

export { removeLabelFromPr };
