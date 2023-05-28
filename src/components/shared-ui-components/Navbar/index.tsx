import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import {
  CardMedia,
  Divider,
  List,
  ListItemText,
  ListItemButton,
  ListItem,
  Drawer,
  IconButton,
} from "@mui/material";
//@ts-ignore
import Logo from "../../../assets/images/favicon.png";
import React from "react";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import InfoIcon from "@mui/icons-material/Info";
import CallIcon from "@mui/icons-material/Call";
import HubIcon from "@mui/icons-material/Hub";
import Diversity2Icon from "@mui/icons-material/Diversity2";
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import Navbar2 from "../NavbarSecond";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';

const navItems = [
  { key: "Home", url: "/", icon: HomeIcon },
  { key: "About", url: "/about-us", icon: InfoIcon },
  { key: "Services", url: "/services", icon: ManageSearchIcon },
  { key: "Contact Us", url: "/contact-us", icon: CallIcon },
  { key: "Career", url: "/career", icon: HubIcon },
  { key: "Our Team", url: "/team", icon: Diversity2Icon },
];
const drawerWidth = 240;

export const DEVICE = {
  MOBILE: "mobile",
  TAB: "tab",
  DESKTOP: "desktop",
};

const WINDOW_SIZE = {
  [DEVICE.MOBILE]: (size: number) => size <= 715,
  [DEVICE.TAB]: (size: number) => size > 700 && size <= 600,
  [DEVICE.DESKTOP]: (size: number) => size > 600,
};

export function useWindowSizeChanged() {
  const [device, setDevice] = useState<string | null>(null);
  useEffect(() => {
    const selectedDevice = Object.keys(WINDOW_SIZE).find((i: string) => {
      return WINDOW_SIZE[i](window.innerWidth);
    });
    if (selectedDevice) {
      setDevice(selectedDevice);
    }

    window.addEventListener("resize", () => {
      const selectedDeviceType = Object.keys(WINDOW_SIZE).find((i: string) =>
        WINDOW_SIZE[i](window.innerWidth)
      );
      if (selectedDeviceType) {
        setDevice(selectedDeviceType);
      }
    });
  }, []);
  return device;
}

const Navbar = (props: any) => {
  const navigate = useNavigate();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2, color: "#002d62 !important" }}>
        Navigation Menu
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item.key}
            disablePadding
            sx={{ color: "#002d62 !important" }}
          >
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item.key} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  const device = useWindowSizeChanged();
  const deskTopView = device === DEVICE.DESKTOP;

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box
        sx={{
          position: "sticky !important",
          zIndex: "99 !important",
          top: 0,
          flexGrow: 1,
          ".MuiAppBar-root": {
            background: "#ffffff",
            color: "#002d62 !important",
          },
        }}
      >
        <AppBar position="sticky" sx={{
          justifyContent: "center",
          height: "60px"
        }}>
          <Toolbar>
            {!deskTopView && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>
            )}
            <CardMedia
              component="img"
              src={Logo}
              sx={{ height: "26px", width: "36px" }}
            />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              AU Corporate
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {/* <Button></Button> */}
              <Typography component="div" sx={{
                flexGrow: 1, fontSize: "14px", "&:hover": {
                  cursor: "pointer",
                  color: "rgb(253, 185, 19)"
                },
              }}>
                <CallRoundedIcon />  +91 6396894543
              </Typography>
            </Box>
            <Box sx={{ display: { xs: "none", sm: "flex", alignItems: 'center' } }}>
              {/* <Button></Button> */}
              <Typography component="div" sx={{ flexGrow: 1, margin: "0 12px" }}>
                <HomeIcon />
              </Typography>
              <Typography component="div" sx={{ flexGrow: 1, maxWidth: "150px", maxHeight: "50px", fontSize: "14px", marginRight: "12px" }}>
                Near Digital 360, Nehru Colony, Dehrdun
              </Typography>
            </Box>
            {/* <Typography component="div" sx={{ flexGrow: 1,color:'rgb(253, 185, 19)' }}>
              <EmailIcon/>
              <WhatsAppIcon />
              <FacebookRoundedIcon />
            </Typography> */}
            {/* <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                onClick={() => {
                  navigate(String(item.url));
                }}
                key={item.key}
                sx={{
                  color: "#002d62 ",
                  "&:hover": {
                    backgroundColor: "rgb(202 138 4)",
                    color: "#ffffff",
                  },
                }}
              >
                <IconButton>
                  <item.icon />
                </IconButton>
                {item?.key}
              </Button>
            ))}
          </Box> */}
          </Toolbar>

        </AppBar>
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
      <Navbar2 />
    </>
  );
};
export default Navbar;
