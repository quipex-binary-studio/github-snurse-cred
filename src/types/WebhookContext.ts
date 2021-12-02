import { Context } from 'probot';
import { WebhookPayloadWithRepository } from 'probot/lib/context';

type WebhookContext = Context<WebhookPayloadWithRepository>;

export type { WebhookContext };
