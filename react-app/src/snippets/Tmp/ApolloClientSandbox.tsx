import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { gql } from "@apollo/client";
import { useState } from "react";
import { useGetMessageQuery, useGetUserQuery } from "./generated/graphql";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql", // MSWのエンドポイントを利用
  cache: new InMemoryCache(),
});

// // const GET_USERS = gql`
// //   query GetUsers {
// //     users {
// //       id
// //       name
// //       email
// //     }
// //   }
// // `;

// const GET_USER_2 = gql`
//   query GetUser2 {
//     # user {
//     user(id: 2) {
//       # user2(id: 1) {
//       id
//       name
//       # email
//       # timestamp
//     }
//   }
// `;

// const GetUsers = () => {
//   const { data, loading, error } = useQuery(GET_USERS);

//   // dataを全階層表示
//   // console.dir(data, { depth: null });

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error.message}</p>;

//   return (
//     <ul>
//       {data.users.map((user: { id: string; name: string; email: string }) => (
//         <li key={user.id}>
//           {user.name} ({user.email})
//         </li>
//       ))}
//     </ul>
//   );
// };

const GetUser1 = () => {
  const { data, loading, error } = useGetUserQuery();

  // dataを全階層表示
  // console.dir(data, { depth: null });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return <p>{JSON.stringify(data)}</p>;
};

const GetUser2 = () => {
  const { data, loading, error } = useGetMessageQuery();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    // <ul>
    //   <li key={data?.user2.id}>
    //     {data?.name} ({user2.email})
    //     <br />
    //     {user2.timestamp}
    //   </li>
    // </ul>
    <p>{JSON.stringify(data)}</p>
  );
};

export const ApolloClientSandbox = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  return (
    <ApolloProvider client={client}>
      <div>
        {/* <GetUsers /> */}
        <div style={{ minHeight: "100px" }}>
          <button onClick={() => setIsOpen1(!isOpen1)}>GetUser1</button>
          {isOpen1 && <GetUser1 />}
        </div>
        <div style={{ minHeight: "70px" }}>
          <button onClick={() => setIsOpen2(!isOpen2)}>GetUser2</button>
          {isOpen2 && <GetUser2 />}
        </div>
      </div>
    </ApolloProvider>
  );
};
