import { WebhookContext } from '../../../../types';

const extractPrInfoFromContext = (context: WebhookContext) => {
    const { pull_request, repository } = context.payload;
    if (!pull_request || !repository) {
        return;
    }
    const { owner: { login: owner }, name: repo } = repository;
    if (!owner) {
        return;
    }
    const prNumber = pull_request.number;
    return {
        prNumber,
        repo,
        owner
    };
};

export { extractPrInfoFromContext };
