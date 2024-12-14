/* eslint-disable @typescript-eslint/no-unused-vars */
import { graphql, http, HttpResponse } from "msw";

export const handlers = [
  // Intercept "GET https://example.com/user" requests...
  http.post("http://localhost:5173/submit-form", () => {
    // ...and respond to them using this JSON response.
    return HttpResponse.json({
      id: "c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d",
      firstName: "John",
      lastName: "Maverick",
    });
  }),
];

export const graphqlHandlers = [
  graphql.query("GetUsers", () => {
    return HttpResponse.json({
      data: {
        users: [
          { id: "1", name: "Alice", email: "alice@example.com" },
          { id: "2", name: "Bob", email: "bob@example.com" },
        ],
      },
    });
  }),

  graphql.query("GetUser", async ({ query, variables }) => {
    // ランダムで 1 ~ 2 秒待つ
    await randomSleep();

    // const { id } = variables;

    return HttpResponse.json({
      data: {
        user: {
          // id: 1,
          name: "John",
          email: "xxxx@example.com",
          __typename: "User",
        },
      },
    });
  }),

  graphql.query("GetUser2", async ({ query, variables }) => {
    // ランダムで 1 ~ 2 秒待つ
    await randomSleep();

    const { id } = variables;

    return HttpResponse.json({
      data: {
        user: {
          // id,
          name: "John",
          email: "yyyy@example.com",
          __typename: "User",
        },
      },
    });
  }),
];

const randomSleep = async (s = 1000) => {
  await new Promise((resolve) => {
    setTimeout(resolve, Math.floor(Math.random() * 1000) + 500);
  });
};
