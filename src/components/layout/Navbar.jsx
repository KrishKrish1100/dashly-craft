import { Bell, Search, Sun, Moon, Menu } from "lucide-react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  InputBase,
  Badge,
  Menu,
  MenuItem,
  Box,
} from '@mui/material';
import {
  Search as SearchIcon,
  Notifications as NotificationsIcon,
  Brightness4 as DarkModeIcon,
  Brightness7 as LightModeIcon,
  Menu as MenuIcon,
} from '@mui/icons-material';
import { useState } from 'react';
import { useTheme } from '../providers/ThemeProvider';

export function Navbar({ onMenuClick }) {
  const { theme, setTheme } = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleThemeMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleThemeMenuClose = () => {
    setAnchorEl(null);
  };

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    handleThemeMenuClose();
  };

  return (
    <AppBar position="static" elevation={1} className="bg-background border-b border-border">
      <Toolbar className="justify-between">
        <Box className="flex items-center gap-4">
          <IconButton
            edge="start"
            onClick={onMenuClick}
            className="text-foreground lg:hidden"
          >
            <MenuIcon />
          </IconButton>
          
          <Box className="relative">
            <Box className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-muted-foreground" />
            </Box>
            <InputBase
              placeholder="Search..."
              className="pl-10 pr-4 py-2 w-64 bg-muted rounded-lg text-foreground"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Box>
        </Box>

        <Box className="flex items-center gap-2">
          <IconButton onClick={handleThemeMenuClick} className="text-foreground">
            {theme === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
          
          <IconButton className="text-foreground">
            <Badge badgeContent={3} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Box>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleThemeMenuClose}
        >
          <MenuItem onClick={() => handleThemeChange('light')}>Light</MenuItem>
          <MenuItem onClick={() => handleThemeChange('dark')}>Dark</MenuItem>
          <MenuItem onClick={() => handleThemeChange('system')}>System</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}