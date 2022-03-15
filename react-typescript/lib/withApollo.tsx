import {
  ApolloClient,
  ApolloProvider,
  DefaultOptions,
  from,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { useRouter } from "next/router";
import nextWithApollo from "next-with-apollo";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import { createUploadLink } from "apollo-upload-client";
import Cookies from "js-cookie";
import { offsetLimitPagination } from "@apollo/client/utilities";

const httpLink = new HttpLink({
 uri: "https://api.enoch.app/graphql",
  // uri: "http://142.93.33.121:4202/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("accessToken");
  return {
    headers: {
      ...headers,
      authorization: token ? `${token}` : "",
    },
  };
});

const link = authLink.concat(
  createUploadLink({
   uri: "https://api.enoch.app/graphql",
  // uri: "http://142.93.33.121:4202/graphql",
  })
);

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );

  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const withApollo = nextWithApollo(
  ({ initialState, headers }) => {
    return new ApolloClient({
      ssrMode: typeof window === "undefined",
      link: from([link, httpLink, errorLink]),
      headers: {
        ...(headers as Record<string, string>),
      },
      cache: new InMemoryCache({
        typePolicies: {
          Query: {
            fields: {
              getAllPost: {
                keyArgs: false,
                merge(existing = [], incoming) {
                  return [...existing, ...incoming];
                },
              },
            },
          },
        },
      }).restore(initialState || {}),
    });
  },
  {
    render: ({ Page, props }) => {
      const router = useRouter();
      return (
        <ApolloProvider client={props.apollo}>
          <Page {...props} {...router} />
        </ApolloProvider>
      );
    },
  }
);

export default withApollo;
