import {
  ApolloClient,
  ApolloProvider,
  DefaultOptions,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { useRouter } from "next/router";
import nextWithApollo from "next-with-apollo";

const withCountryData = nextWithApollo(
  ({ initialState, headers }) => {
    return new ApolloClient({
      ssrMode: typeof window === "undefined",
      link: new HttpLink({
        uri: "https://countries.trevorblades.com",
      }),
      headers: {
        ...(headers as Record<string, string>),
      },
      cache: new InMemoryCache().restore(initialState || {}),
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

export default withCountryData;
