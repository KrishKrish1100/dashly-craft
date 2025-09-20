import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Snackbar } from '@mui/material';
import { ThemeProvider } from './components/providers/ThemeProvider';
import DashboardLayout from './components/layout/DashboardLayout';
import Dashboard from './pages/Dashboard';
import Orders from './pages/Orders';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light" storageKey="dashboard-theme">
      <BrowserRouter>
        <DashboardLayout>
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="*" element={<Navigate to="/orders" replace />} />
          </Routes>
        </DashboardLayout>
        <Snackbar />
      </BrowserRouter>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;