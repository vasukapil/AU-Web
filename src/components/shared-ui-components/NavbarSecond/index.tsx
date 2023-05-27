import { Box } from '@mui/system'
import React from 'react'
import Typography from "@mui/material/Typography";
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import HomeIcon from "@mui/icons-material/Home";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import InfoIcon from "@mui/icons-material/Info";
import CallIcon from "@mui/icons-material/Call";
import HubIcon from "@mui/icons-material/Hub";
import Diversity2Icon from "@mui/icons-material/Diversity2";
import { Button, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Navbar2() {
    const navigate = useNavigate();

    const navItems = [
        { key: "Home", url: "/", icon: HomeIcon },
        { key: "About", url: "/about-us", icon: InfoIcon },
        { key: "Services", url: "/services", icon: ManageSearchIcon },
        { key: "Contact Us", url: "/contact-us", icon: CallIcon },
        { key: "Carrier", url: "/carrier", icon: HubIcon },
        { key: "Our Team", url: "/team", icon: Diversity2Icon },
    ];

    return (
        <Box
            sx={{
                // display: { xs: "none", sm: "block" },
                display: { xs: "none", sm: "flex" },
                position: "sticky",
                zIndex: "99 !important",
                top: "60px",
                flexGrow: 1,
                height: '46px',
                alignItems: 'center',
                justifyContent: 'center',
                background: "#002d62",
                ".MuiAppBar-root": {
                    color: "rgb(253, 185, 19) !important",
                },
            }}
        >
            {/* rgb(253, 185, 19) */}
                {navItems.map((item) => (
            <Box sx={{ margin:"0 5px" }}>
                    <Button
                        onClick={() => {
                            navigate(String(item.url));
                        }}
                        key={item.key}
                        sx={{
                            height: "30px",
                            color: "white ",
                            "&:hover": {
                                // backgroundColor: "rgba(208, 208, 208, 0.378)",
                                // color: "#ffffff",
                                cursor: "pointer",
                                color: "rgb(253, 185, 19)"
                            },
                        }}
                    >
                        {/* <IconButton> */}
                        <item.icon sx={{ margin: "2px 6px" }} />
                        {/* </IconButton> */}
                        {item?.key}
                    </Button>
            </Box>
                ))}
        </Box>
    )
}

export default Navbar2