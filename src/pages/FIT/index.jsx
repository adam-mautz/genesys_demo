/** **********************************************************************
                            DISCLAIMER

SAMPLE CODE - NOT FOR PRODUCTION


*********************************************************************** */

import React, { useState, useRef, useEffect, Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCollection } from '@cloudscape-design/collection-hooks';
import {
    AppLayout,
    Container,
    Header,
    HelpPanel,
    Grid,
    Box,
    TextContent,
    SpaceBetween,
    FormField,
    Input,
    DatePicker,
    Flashbar,
    Alert,
    Form,
    Button,
    Table,
    Icon,
    TextFilter,
    Pagination,
    ProgressBar,
} from '@cloudscape-design/components-themed';
import Sidebar from '../../common/components/Sidebar';

import { ExternalLinkItem } from '../../common/common-components-config';

import '../../common/styles/servicehomepage.scss';
import '../../common/styles/fit.scss'


// Amplify
import { AmplifyConfig } from '../../config/amplify-config';
import { Amplify,API, graphqlOperation } from 'aws-amplify'

// Image imports
import awsLogo from '../../public/images/Bloom_Logo.png';


const FIT = () => {
    return (
        <>
            <AppLayout
                navigation={<Sidebar activeHref="#/" />}
                content={<Content />}
                tools={<ToolsContent />}
                headerSelector="#h"
                disableContentPaddings
            // toolsHide={true}
            />
        </>
    );
};

export default FIT;

const Content = () => {


    const [sortingColumn, setSortingColumn] = useState({ sortingField: "employee" });
    const [sortingDescending, setSortingDescending] = useState(false);
    
    // Add sorting function
    const handleSorting = ({ detail }) => {
        setSortingColumn(detail.sortingColumn);
        setSortingDescending(detail.sortingDescending);
    };

    // Create sorted items
    const getSortedItems = (items) => {
        if (!sortingColumn) return items;
        
        const { sortingField } = sortingColumn;
        
        return [...items].sort((a, b) => {
            const aValue = a[sortingField] || '';
            const bValue = b[sortingField] || '';
            
            if (sortingField === 'revenue') {
                // Handle numeric sorting for revenue
                const aNum = parseFloat(aValue) || 0;
                const bNum = parseFloat(bValue) || 0;
                return sortingDescending ? bNum - aNum : aNum - bNum;
            }
            
            // Handle string sorting for other fields
            if (aValue < bValue) return sortingDescending ? 1 : -1;
            if (aValue > bValue) return sortingDescending ? -1 : 1;
            return 0;
        });
    };

    useEffect(() => {               // On page load, call the API to get table data
        getData2()
    }, [])

    async function getData2() {                 // Function to call the API and store the data to state variables
        try {
            const testData = await getData()
            const tests = testData.Items
            console.log("did this work?..." +  tests)

            setData(tests)
        } catch (err) { console.log(err) }
    }

    function getData() {                    // Function that sets the API parameters and calls out to API Gateway - These paramaters are set in config.js
        const apiName = 'fitAPI';
        const path = '/fit';
        const myInit = {
            headers: {
                // "Access-Control-Allow-Headers": 'Content-Type',
                //"Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS,HEAD,PATCH"
            }
        };
        return API.get(apiName, path, myInit);
    }

    async function putData(event) {
        try {
            const apiName = 'fitAPI';
            const path = '/fit';
            const myInit = {
                body: {
                    id: ''+(data.length + 1),
                    employee: employee,
                    date: date,
                    revenue: revenue
                }
            };
            
            // Wait for the post to complete
            await API.post(apiName, path, myInit);
            
            // Clear form values
            setNotes("");
            setDate("");
            setTitle("");
            
            // Fetch fresh data
            await getData2();
            
        } catch (err) {
            console.error("Error posting data:", err);
        }
    }



    const [employee, setTitle] = useState("")
    const [revenue, setNotes] = useState("")
    const [date, setDate] = useState("")
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    return (
        <div>
            <div>
            <Grid className="custom-home__header" disableGutters>
              <Box margin="xxl" padding={{ vertical: 'xl', horizontal: 'l' }}>
              <img
                src={awsLogo}
                alt=""
                style={{ maxWidth: '18rem', paddingRight: '2em', backgroundColor: 'white', borderTopRightRadius: '20px', borderBottomLeftRadius: '5px', outline: '#5790E5 1px solid' }}
              />
                <Box margin={{ bottom: 's' }} />
                <div className="custom-home__header-title">
                  <Box fontSize="display-l" fontWeight="bold" color="inherit">
                    Connected Services Example
                  </Box>
                  <Box fontSize="heading-l"  color="inherit">
                  Simple use case demonstrating API Gateway, Lambda, and Serverless Data Stores
                  </Box>
                </div>
              </Box>
            </Grid>
            </div>
            <div className='fitForm'>
                <form onSubmit={e => e.preventDefault()}>
                    <Form
                        actions={
                            <SpaceBetween direction="horizontal" size="xs">

                            </SpaceBetween>
                        }

                    >
                        <Container
                            header={
                                <Header variant="h2">
                                    Sales Input
                                </Header>
                            }
                        >
                            <SpaceBetween direction="vertical" size="l">
                                <FormField label="Sales Person">
                                    <Input
                                        value={employee}
                                        onChange={event =>
                                            setTitle(event.detail.value)
                                        }
                                    />
                                </FormField>
                                <FormField
                                    label="Date"
                                    constraintText=""
                                >
                                    <DatePicker
                                        onChange={({ detail }) => setDate(detail.value)}
                                        value={date}
                                        openCalendarAriaLabel={selectedDate =>
                                            "Choose certificate expiry date" +
                                            (selectedDate
                                                ? `, selected date is ${selectedDate}`
                                                : "")
                                        }
                                        nextMonthAriaLabel="Next month"
                                        placeholder="YYYY/MM/DD"
                                        previousMonthAriaLabel="Previous month"
                                        todayAriaLabel="Today"
                                    />
                                </FormField>
                                <FormField label="Revenue">
                                    <Input
                                        value={revenue}
                                        onChange={event =>
                                            setNotes(event.detail.value)
                                        }
                                    />
                                </FormField>
                                <Button variant="primary" onClick={putData}>Submit</Button>
                            </SpaceBetween>
                        </Container>
                    </Form>
                </form>
            </div>
            {/* Start table section */}
            <div className='fitTable'>
                <Table
                    columnDefinitions={[
                        {
                            id: "Engineer",
                            header: "Sales Person",
                            cell: item => (
                                <Box float="center">{item.employee || "-"}</Box>
                            ),
                            sortingField: "employee"  // Add this field
                        },
                        {
                            id: "date",
                            header: "Date",
                            cell: item => item.date || "-",
                            sortingField: "date"  // Add this field
                        },
                        {
                            id: "notes",
                            header: "Revenue",
                            cell: item => {
                                if (!item.revenue) return "-";
                                return new Intl.NumberFormat('en-US', {
                                    style: 'currency',
                                    currency: 'USD'
                                }).format(parseFloat(item.revenue));
                            },
                            sortingField: "revenue"  // Add this field
                        }
                    ]}
                    items={getSortedItems(data.map((item, index) => ({
                        employee: item.employee,
                        date: item.date,
                        revenue: item.revenue,
                        approved: item.approved,
                        id: item.id
                    })))}
                    sortingColumn={sortingColumn}
                    sortingDescending={sortingDescending}
                    onSortingChange={handleSorting}
                    // ... rest of your table props ...
                />
            </div>
        </div>
        
    );
};
export const ToolsContent = () => (
    <HelpPanel
        header={<h2>FIT Form</h2>}
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
                    {/* <li>
            <ExternalLinkItem
              href="https://aws.amazon.com/energy/"
              text="TBD - Amazon TCAQS Blog Post"
            />
          </li> */}
                    <li>
                        <ExternalLinkItem
                            href="https://aws.amazon.com/s3/"
                            text="Amazon S3"
                        />
                    </li>
                </ul>
            </>
        }
    >
        <p>
            This is a simple form meant to demonstrate the use of API Gateway, Lambda, DynamoDB, and Step Functions. The API connection will be lost once the demo expires, but the form and table can be reused with fresh data.
        </p>
    </HelpPanel>
);






