import { useState } from 'react';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';

export default function DashboardLayout({ children }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Box className="min-h-screen flex bg-background">
      {/* Desktop Sidebar */}
      {!isMobile && (
        <Sidebar
          open={true}
          variant="permanent"
        />
      )}
      
      {/* Mobile Sidebar */}
      {isMobile && (
        <Sidebar
          open={sidebarOpen}
          onClose={handleSidebarToggle}
          variant="temporary"
        />
      )}

      <Box className="flex-1 flex flex-col">
        <Navbar onMenuClick={handleSidebarToggle} />
        <Box component="main" className="flex-1 overflow-auto p-6">
          {children}
        </Box>
      </Box>
    </Box>
  );
}