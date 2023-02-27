import { useContext, useState } from 'react';
import Link from 'next/link';
import { ColorModeContext } from '../styles/ThemeModeProvider';
import {
  Button,
  Box,
  Toolbar,
  Typography,
  Drawer,
  AppBar,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightIcon from '@mui/icons-material/Nightlight';

const pages = [
  { title: '作品', link: '/projects' },
  { title: '本站介紹', link: '/about' },
  { title: 'Code', link: 'https://github.com/miamai/Nextjs-blog' },
];

const style = {
  linkButton: {
    color: 'text.primary',
    '&:hover, &.MuiTypography-root': {
      color: 'primary.main',
    },
  },
  drawer: {
    display: { xs: 'block', sm: 'none' },
    top: 56,
    '& .MuiDrawer-paper': {
      boxSizing: 'border-box',
      backgroundColor: 'background.default',
      opacity: 0.95,
      width: 240,
      top: 56,
    },
    '& .MuiModal-backdrop': {
      top: 56,
    },
  },
};

const Header = (props) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { mode, toggleColorMode } = useContext(ColorModeContext);
  const { window } = props;
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <List>
        {pages.map((page, idx) => (
          <ListItem key={idx}>
            <Link href={`${page.link}`} passHref legacyBehavior>
              <ListItemButton sx={style.linkButton}>
                <ListItemText primary={`${page.title}`} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <AppBar
        component='nav'
        position='sticky'
        sx={{ backgroundColor: 'background.default' }}
      >
        <Toolbar>
          <IconButton
            color='primary'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ ml: '-8px', mr: '12px', display: { sm: 'none' } }}
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
          <Link href={'/'} passHref legacyBehavior>
            <Typography
              variant='h6'
              component='div'
              sx={{
                flexGrow: 1,
                display: { xs: 'block', sm: 'block' },
                color: 'text.primary',
                cursor: 'pointer',
              }}
            >
              Mia's Blog
            </Typography>
          </Link>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {pages.map((page, idx) => (
              <Link key={idx} href={`${page.link}`} passHref legacyBehavior>
                <Button sx={style.linkButton}>{page.title}</Button>
              </Link>
            ))}
          </Box>
          <Button onClick={toggleColorMode}>
            {mode === 'dark' ? <NightlightIcon /> : <LightModeIcon />}
          </Button>
        </Toolbar>
      </AppBar>

      <Drawer
        container={container}
        variant='temporary'
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={style.drawer}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;
