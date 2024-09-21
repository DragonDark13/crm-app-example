import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ContentTable from "./components/ContentTable/ContentTable.tsx";
import {ApolloClient, InMemoryCache, ApolloProvider} from "@apollo/client";


function App() {
    const client = new ApolloClient({
        uri: "https://app.canonic.dev/app/crm-app-copy-4dj/graphql",
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
