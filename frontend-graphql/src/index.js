import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import './index.css'
import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo'
import { BrowserRouter } from 'react-router-dom'
import { LocaleProvider } from 'antd'
import enUS from 'antd/lib/locale-provider/en_US'


/*
index.js : begins the providers.  When switching from development to production comment out the "development" lines and comment in the others.
Renders <App />, which is the main DOM binding for App.js.  <BrowserRouters /> is used for react-router (conditional rendering and history/path), 
<ApolloProvider /> is for GraphQL, <LocaleProvider /> is for US-specific rendering options.
/*

/* Development */
const client = new ApolloClient()

/*
const client = new ApolloClient({
    networkInterface: createNetworkInterface({
	uri: 'http://cdp.northwestern.edu/database/graphql'
    }),
    connectToDevTools: false
})
*/

ReactDOM.render(
    <BrowserRouter basename="/database">
	<ApolloProvider client={client}>
	    <LocaleProvider locale={enUS}>
		<App/>
	    </LocaleProvider>
	</ApolloProvider>
    </BrowserRouter>,
    document.getElementById('root')
)
