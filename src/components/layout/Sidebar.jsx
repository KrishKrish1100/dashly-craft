import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
  Divider,
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  ShoppingCart as OrdersIcon,
  Analytics as AnalyticsIcon,
  People as CustomersIcon,
  Inventory as ProductsIcon,
  Settings as SettingsIcon,
} from '@mui/icons-material';
import { NavLink, useLocation } from 'react-router-dom';

const menuItems = [
  {
    title: 'Dashboard',
    icon: DashboardIcon,
    path: '/dashboard',
  },
  {
    title: 'Orders',
    icon: OrdersIcon,
    path: '/orders',
  },
  {
    title: 'Analytics',
    icon: AnalyticsIcon,
    path: '/analytics',
  },
  {
    title: 'Customers',
    icon: CustomersIcon,  
    path: '/customers',
  },
  {
    title: 'Products',
    icon: ProductsIcon,
    path: '/products',
  },
  {
    title: 'Settings',
    icon: SettingsIcon,
    path: '/settings',
  },
];

export function Sidebar({ open, onClose, variant = 'temporary' }) {
  const location = useLocation();

  const drawer = (
    <Box>
      <Box className="p-4">
        <Typography variant="h6" className="font-bold text-primary">
          Dashboard
        </Typography>
      </Box>
      <Divider />
      <List>
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <ListItem key={item.title} disablePadding>
              <ListItemButton
                component={NavLink}
                to={item.path}
                className={`mx-2 rounded-lg ${
                  isActive ? 'bg-primary text-primary-foreground' : 'hover:bg-accent'
                }`}
                onClick={variant === 'temporary' ? onClose : undefined}
              >
                <ListItemIcon>
                  <Icon className={isActive ? 'text-primary-foreground' : 'text-foreground'} />
                </ListItemIcon>
                <ListItemText 
                  primary={item.title}
                  className={isActive ? 'text-primary-foreground' : 'text-foreground'}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  return (
    <Drawer
      variant={variant}
      open={open}
      onClose={onClose}
      ModalProps={{
        keepMounted: true,
      }}
      sx={{
        width: 280,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 280,
          boxSizing: 'border-box',
        },
      }}
    >
      {drawer}
    </Drawer>
  );
}