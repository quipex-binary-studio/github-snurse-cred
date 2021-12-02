import { Probot } from "probot";
import { handlePrEdited, handlePrOpened } from './event_handlers';


export = (app: Probot) => {
    app.on("pull_request.opened", handlePrOpened);
    app.on("pull_request.edited", handlePrEdited);
    app.onAny(async (context) => {
        console.log({ event: context.name, action: context.payload.action });
    });
};
