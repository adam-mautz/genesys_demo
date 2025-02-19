
/** **********************************************************************
                            DISCLAIMER

SAMPLE CODE - NOT FOR PRODUCTION


*********************************************************************** */

import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { SideNavigation, Badge } from '@cloudscape-design/components-themed';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <SideNavigation
      activeHref={location.pathname}
      header={{ text: 'Pages and Resources', href: '/' }}
      onFollow={(event) => {
        if (!event.detail.external) {
          event.preventDefault();
          navigate(event.detail.href);
        }
      }}
      items={[
        {
          type: 'section',
          text: 'Main Pages',
          expanded: true,
          items: [
            { type: 'link', text: 'Embedded Dashboards', href: '/getting-started' },
            { type: 'link', text: 'Simple API', href: '/fit' }
            // { type: 'link', text: 'Sandbox Page', href: '/enablement' },
          ],
        },
        // {
        //   type: 'section',
        //   text: 'AWS Resources',
        //   expanded: true,
        //   items: [
        //     // {
        //     //   type: 'link',
        //     //   text: 'Users',
        //     //   href: 'https://us-east-1.console.aws.amazon.com/cognito/v2/home?region=us-east-1',
        //     //   external: true,
        //     // },
        //     {
        //       type: 'link',
        //       text: 'Amplify',
        //       href: 'https://us-east-1.console.aws.amazon.com/amplify/home?region=us-east-1#/d1grnk4g86afni',
        //       external: true,
        //     },
        //     // {
        //     //   type: 'link',
        //     //   text: 'Step Functions',
        //     //   href: 'https://us-east-1.console.aws.amazon.com/states/home?region=us-east-1#/statemachines/view/arn:aws:states:us-east-1:835340547061:stateMachine:fit-approval',
        //     //   external: true,
        //     // },
        //     {
        //       type: 'link',
        //       text: 'API Gateway',
        //       href: 'https://us-east-1.console.aws.amazon.com/apigateway/home?region=us-east-1#/apis/b44amu10a7/resources/1oi6o97o2e',
        //       external: true,
        //     },
        //   ],
        // },
        {
          type: 'section',
          text: 'Documentation',
          expanded: true,
          items: [
            {
              type: 'link',
              text: 'Cloudscape Design',
              href: 'https://cloudscape.design/components/',
              external: true,
            },
            {
              type: 'link',
              text: 'AWS Amplify Libraries',
              href: 'https://docs.amplify.aws/lib/q/platform/js/',
              external: true,
            },
          ],
        },
        // Example of notifications in sidebar, uncomment this if not needed
        // {
        //   type: 'link',
        //   text: 'Notifications',
        //   href: '#/notifications',
        //   info: <Badge color="red">8</Badge>,
        // },
        // {
        //   type: 'link',
        //   text: 'Documentation',
        //   // TODO - Link to public GitHub repo Amplify App Documentation
        //   // href: "https://example.com",
        //   external: true,
        // },
      ]}
    />
  );
};

export default Sidebar;
