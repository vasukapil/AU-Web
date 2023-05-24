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

const drawerWidth = 240;
const Services = () => {
    const [currentState, setCurrentState] = React.useState(0);

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
                paddingLeft:'2rem',
                marginBottom:'-1rem'
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
                    <h1 style={{ textAlign: 'center', fontStyle: 'Roboto', fontWeight: 'bold', fontSize: '1.5rem', marginTop: '-1.5rem' }}>Services</h1>
                    <br />
                    <h1 style={{ textAlign: 'center', }}>{ServicesData[currentState].title}</h1>
                    <br />
                    <Typography paragraph sx={{
                        overflowY: 'auto', maxHeight: '23rem', "::-webkit-scrollbar": {

                            display: 'none'
                        }
                    }}>
                        {ServicesData[currentState].text}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );


}

export default Services;