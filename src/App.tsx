import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ContentTable from "./components/ContentTable/ContentTable.tsx";
import {ApolloClient, InMemoryCache, ApolloProvider, createHttpLink} from "@apollo/client";
import {setContext} from "@apollo/client/link/context";


function App() {

    // Створення посилання на ваш GraphQL endpoint
    const httpLink = createHttpLink({
        uri: "https://app.canonic.dev/app/crm-app-copy-4dj/graphql",
    });

    const authLink = setContext((_, {headers}) => {
        const token = "66eea54d69307b1bb71704a2-cda057ba-5acc-4f45-af9d-eb2652a3340d"; // Замініть на ваш актуальний токен

        return {
            headers: {
                ...headers,
                authorization: token ? `Bearer ${token}` : "",
            },
        };
    });
    const client = new ApolloClient({
        link: authLink.concat(httpLink),

        cache: new InMemoryCache(),
    });

    return (
        <>
            <ApolloProvider client={client}>
                <ContentTable/>
            </ApolloProvider>
        </>
    )
}

export default App
