/** **********************************************************************
                            DISCLAIMER

SAMPLE CODE - NOT FOR PRODUCTION


*********************************************************************** */

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


// Import images
import awsLogo from '../../public/images/Bloom_Logo.png';

const Enablement = () => {
  return (
    <AppLayout
      navigation={<Sidebar activeHref="#/" />}
      content={<Content />}
      tools={<ToolsContent />}
      headerSelector="#h"
      disableContentPaddings
      // toolsHide={true}
    />
  );
};

export default Enablement;


const Content = () => {
    return (
      <div>
        <TextContent>
          <div>
            <Grid className="custom-home__header" disableGutters>
              <Box margin="xxl" padding={{ vertical: 'xl', horizontal: 'l' }}>
              <img
                  src={awsLogo}
                  alt=""
                  style={{ maxWidth: '18rem', paddingRight: '2em', backgroundColor: 'white', borderTopRightRadius: '20px', borderBottomLeftRadius: '5px', outline:'#3081ED 1px solid' }}
                />
                <Box margin={{ bottom: 's' }} />
                <div className="custom-home__header-title">
                  <Box fontSize="display-l" fontWeight="bold" color="inherit">
                    Sandbox
                  </Box>
                  <Box fontSize="heading-l"  color="inherit">
                  Use this page as a starting point for bulding your own custom content!
                  </Box>
                </div>
              </Box>
            </Grid>
          </div>
  
          {/* Start 'This project is buit' section */}
          <Box margin="xxl" padding="l">
            <SpaceBetween size="l">
              <div>
                <Container header={<Header>Container Header</Header>}>
                  <div>
                    <ul>
                    <li>Bullet Point 1</li> 
                    <li>Bullet Point 2</li>
                    <li>Bullet Point 3</li>
                    <li>Bullet Point 4</li>
                    </ul>
                  </div>
                </Container>
              </div>
              <div>
                <br />

              </div>
            </SpaceBetween>
          </Box>
        </TextContent>
      </div>
    );
  };
  
  export const ToolsContent = () => (
    <HelpPanel
      header={<h2>Sample Applicaiton</h2>}
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
                href="https://aws.amazon.com/s3/"
                text="Amazon S3"
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
        built using the AWS Amplify Libraries for JavaScript. For more
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
  