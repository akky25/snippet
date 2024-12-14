import { setupWorker } from "msw/browser";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { graphqlHandlers, handlers } from "./handlers";

// export const worker = setupWorker(...[...handlers, ...graphqlHandlers]);
export const worker = setupWorker(...[...handlers]);
