import React from 'react';

import {
  AppLayout,
  Container,
  Header,
  HelpPanel,
  Grid,
  Box,
  TextContent,
  SpaceBetween,
  Button,
  Icon,
} from '@cloudscape-design/components-themed';
import Sidebar from '../../common/components/Sidebar';

import { ExternalLinkItem } from '../../common/common-components-config';

//import '../../common/styles/intro.scss';
import '../../common/styles/servicehomepage.scss';

// Import images
import awsLogo from '../../public/images/Bloom_Logo.png';
import techStack from '../../../src/public/images/techStack.png'
import arch2 from '../../../src/public/images/arch3.png'

const GettingStarted = () => {
  return (
    <AppLayout
      navigation={<Sidebar activeHref="#/" />}
      // navigation={<Sidebar activeHref="#/" items={navItems}/>}
      content={<Content />}
      tools={<ToolsContent />}
      headerSelector="#h"
      disableContentPaddings
    // toolsHide={true}
    />
  );
};

export default GettingStarted;

const Content = () => {
  return (
    <div style={fullPageStyle} >
                <iframe
        width="100%"
        height="100%"
        src="https://us-east-1.quicksight.aws.amazon.com/sn/embed/share/accounts/230732298894/dashboards/91696226-2156-4226-888b-8b4490a46fba?directory_alias=amautz">
    </iframe>
    </div>
  );
};

const fullPageStyle = {
  width: '100vw',
  height: '100vh',
  margin: 0,
  padding: 0,
  position: 'absolute',
  top: 0,
  left: 0
};

export const ToolsContent = () => (
  <HelpPanel
    header={<h2>Sample Amplify App</h2>}
    footer={
      <>
        <h3>
          Learn more{' '}
          <span role="img" aria-label="Icon external Link">
            <Icon name="external" />
          </span>
        </h3>
        <ul>
          <li>
            <ExternalLinkItem
              href="https://aws.amazon.com/energy/"
              text="AWS Energy & Utilities"
            />
          </li>
          <li>
            <ExternalLinkItem
              href="https://aws.amazon.com/amplify/"
              text="AWS Amplify"
            />
          </li>
          <li>
            <ExternalLinkItem
              href="/completed"
              text="Scope Review"
            />
          </li>
          <li>
            <ExternalLinkItem
              href="https://aws.amazon.com/step-functions/"
              text="AWS Step Functions"
            />
          </li>
          <li>
            <ExternalLinkItem
              href="https://www.terraform.io/"
              text="Terraform"
            />
          </li>
          <li>
            <ExternalLinkItem
              href="https://aws.amazon.com/cdk/"
              text="AWS CDK (Cloud Development Kit)"
            />
          </li>
        </ul>
      </>
      /* <li>
            <ExternalLinkItem
              href="https://aws.amazon.com/energy/"
              text="TBD - Amazon TCAQS Blog Post"
            />
          </li> */
    }
  >
    <p>
      This sample app is meant to serve as an example of an application you can
      build with AWS Amplify, while leveraging Infrastructure as Code. It is
      built leveraging the AWS Amplify Libraries for JavaScript. For more
      information, see
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://docs.amplify.aws/lib/q/platform/js/"
      >
        {' '}
        AWS Amplify Libraries for JavaScript
      </a>
    </p>
  </HelpPanel>
);
