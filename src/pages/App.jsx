// SAMPLE CODE - NOT FOR PRODUCTION


import React from 'react';
import { Route, Routes, Link, useParams } from 'react-router-dom';

// Components
import { Amplify, Auth, Hub } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import GettingStarted from './GettingStarted';
import FetchUserDetails from '../common/components/FetchUserDetails';
import FIT from './FIT';
import Enablement from './Enablement';

// Styles - Root Cloudscape styles are stored in src -> assets -> themed -> components -> internal -> base-components -> styles.scoped.css
import '@cloudscape-design/global-styles/index.css';
import '@aws-amplify/ui-react/styles.css';
import '../common/styles/auth.css'

// No touchy - AWS
import { AmplifyConfig } from '../config/amplify-config';
import { useEffect } from 'react';
import Home from './Home';

Amplify.configure(AmplifyConfig);






const App = ({ signOut, user }) => {
  return (
    <>
      <FetchUserDetails user={user} signOut={signOut} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/getting-started" element={<GettingStarted />} />
        <Route path="/fit" element={<FIT />} />
        <Route path="/enablement" element={<Enablement />} />
      </Routes>
    </>
  );
};

const components = {

  Footer() {

    // Auth.federatedSignIn({ customProvider: 'Cognito-Integration' })    // switch to button and remove auth.css for dev
    
    return <button onClick={() => Auth.federatedSignIn()}>Test Identity Provider Login</button>
  },
}


// export default withAuthenticator(App, {components});
export default App;
