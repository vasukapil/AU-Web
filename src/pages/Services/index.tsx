import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { ServicesData } from './helper'
import { CardMedia } from '@mui/material';
//@ts-ignore
import Video from '../../assets/video/sample1.mp4'
import Navigation from '../../components/shared-ui-components/Navigation'
import ReactMarkdown from 'react-markdown';

const drawerWidth = 240;
const Services = () => {
    const [currentState, setCurrentState] = React.useState(0);
    const markdownText = `
# Corporate Tax

A corporate tax is a levy on a company's profit by the government. The money collected in the form of corporate taxes is used as a country's source of income. A company's operating income is calculated by deducting expenses, including the cost of goods sold or services procured and depreciation from revenues. Next, applicable tax rates are applied to create a legal obligation that the company owes the government.

Corporate tax is levied on the companies, whether domestic or foreign. In India, the Income Tax Act, 1961 governs the provisions of charging corporate tax to companies. Global income of the companies registered in our country is covered for taxation under this. Whereas in the case of foreign companies, only the income received or accrued in India is taxable under the corporate tax. AU is leading corporate tax experts in Delhi.

## What is a domestic company?

Any company whose business is originated in India or any foreign company whose effective management and control are entirely situated in India is the domestic company. The companies registered under the Companies Act, 1956 or Companies Act, 2013 are said to be originated in India.

## What is a foreign company?

Any company that has not originated in India and whose effective control & management is situated outside India.

## Helping Companies reduce Taxable Income

In the complicated domains of tax financial reporting, tax authority compliance, and tax planning – corporate tax authorities are often challenged to meet continually changing conditions.

Additional acumen and industry expertise can help to supplement existing tax department resources, and give the peace of mind needed to permit clients to address concerns affecting companies finally, now and into the future. Financial reporting scrutiny in tax areas requires a tremendous level of completeness, correctness, and internal controls.

AU Corporate work with clients as entrusted advisors and allies to manifest a deep-rooted knowledge of their businesses – including businesses that battle in global markets and across state and territorial jurisdictions. We drive value and build an understanding of assessing authority rules and processes that affect tax reporting, tax planning and accounting for corporate taxes.

We recognise areas of risk, giving solutions that mitigate financial statements and tax compliance disclosures. Our clients appreciate us for being the best corporate tax consultancy in Delhi and for our reliability of expertise, efficiency, performance, study to details and excellent services.

## How We Deliver

Whether your company is an emerging enterprise or a large established business, our professionals will employ their corporate tax experience and resources to:

- Assist you in meeting all tax-related filings for corporates
- Provide you with the final analysis of financial statement related to accounting for taxes
- Develop possibilities to reduce and defer corporate taxes

Our Corporate Tax Professional Team possesses vast experience in the field of corporate taxation that provides corporate tax services in Delhi and across India. We implement our sound mind of what it necessitates to improve useful tax policies – with the efficiency and accuracy needed in the present volatile tax environment. We being a business tax expert in Barakhamba Road, Connaught Place, Centre of Delhi use our experience to create modern solutions to our clients most complex and essential tax issues.

Our areas of expertise in corporate tax include:

- Accounting for income taxes
- Corporate Tax Compliance Services – Preparation and filing of tax returns
- Corporate tax planning
- Audit support to corporates
- Due Diligence for corporate issues and Tax controversies
- International tax planning for overseas Entities

If you are looking for the best corporate tax solutions firm in Centre of Delhi, reach out to us at [partner@theaucorp.com](mailto:partner@theaucorp.com) and enjoy the finest corporate tax services from our team of experts.
  `;


    return (
        <Box sx={{
            display: 'flex', margin: '2rem', flexDirection: 'column'
        }}>
            <img src="./banner.jpg" alt="" />

            <Navigation currentValue={ServicesData[currentState].title} />
            <h1 style={{
                fontSize: '22px',
                paddingBottom: '5px',
                textTransform: 'capitalize',
                fontFamily: 'SegoeUI-Semibold',
                paddingLeft: '2rem',
                marginBottom: '-1rem'
            }}>Services</h1>
            <Box sx={{
                display: 'flex', margin: '1rem'
            }}>



                <br />
                <Box sx={{
                    overflowY: 'auto',
                    maxHeight: '29rem',
                    "::-webkit-scrollbar": {
                        display: 'none'
                    },
                    minWidth: '300px',
                    borderRight: '1px solid black',

                }}>
                    <List >
                        {ServicesData.map((data, index) => (
                            <ListItem key={data.title} disablePadding onClick={() => { setCurrentState(index) }}
                                sx={{ backgroundColor: `${index === currentState ? '#808080' : '#FFFFF'}`, width: '19rem' }} >
                                <ListItemButton>
                                    <ListItemText primary={data.title} sx={{ color: 'red !important' }} />
                                    <ListItemIcon sx={{
                                        width: '15px', height: '15px', minWidth: '19px'
                                    }}>
                                        <ArrowForwardIosIcon color="disabled" />
                                    </ListItemIcon>
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
                <Box
                    component="main"
                    sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
                >
                    {/* <h1 style={{ textAlign: 'center', fontStyle: 'Roboto', fontWeight: 'bold', fontSize: '1.5rem', marginTop: '-1.5rem' }}>Services</h1> */}
                    {/* <br /> */}
                    {/* <h1 style={{ textAlign: 'center', }}>{ServicesData[currentState].title}</h1> */}
                    {/* <br /> */}
                    <Typography paragraph sx={{
                        overflowY: 'auto', "::-webkit-scrollbar": {
                            display: 'none'
                        }
                    }}>

                        {/* <ReactMarkdown>{markdownText}</ReactMarkdown> */}
                        <ReactMarkdown>{ServicesData[currentState].markdownText}</ReactMarkdown>
                    </Typography>
                </Box>
            </Box>
            <div>
            </div>
        </Box>
    );


}

export default Services;