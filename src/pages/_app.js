import { ProvideAppContext } from "@/context/AppContext";
import "@/styles/globals.css";
import {Auth0Provider} from '@auth0/auth0-react'

export default function App({ Component, pageProps }) {
  return (
    <Auth0Provider
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN}
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}
      authorizationParams={{
        redirect_uri: typeof window !== 'undefined' ? window.location.origin : '',
      }}
      onRedirectCallback={(appState) => {
        router.push(appState?.returnTo || '/')
      }}
      >
      <ProvideAppContext>
        <Component {...pageProps} />;
      </ProvideAppContext>
    </Auth0Provider>
  );
}
