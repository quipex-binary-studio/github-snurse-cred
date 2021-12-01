import { Probot } from "probot";

export = (app: Probot) => {
  app.on("pull_request.opened", async (context) => {
    const baseOfPr = context.payload.pull_request.base;
    console.log(baseOfPr);
  });
  app.on("pull_request.edited", async (context) => {
    console.log(context.payload.pull_request);
  })
  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
};
