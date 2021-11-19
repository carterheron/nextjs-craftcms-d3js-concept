import {ApolloClient, InMemoryCache} from "@apollo/client";
import fetch from 'node-fetch';

const client = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_API_URL,
    cache: new InMemoryCache(),
    headers: {
        authorization: process.env.NEXT_PUBLIC_API_TOKEN
    },
    fetch
});;

export default client;
