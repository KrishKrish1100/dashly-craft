import { useState } from 'react';
import {
  Typography,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  Button,
  Box,
  TextField,
  Checkbox,
  TablePagination,
  IconButton,
} from '@mui/material';
import {
  Add as AddIcon,
  FilterList as FilterIcon,
  Sort as SortIcon,
} from '@mui/icons-material';

const ordersData = [
  {
    id: 'ORD-001',
    customer: 'John Smith',
    email: 'john@example.com',
    project: 'Website Redesign',
    address: '123 Main St, New York, NY',
    date: '2024-01-15',
    status: 'completed',
    amount: '$2,500'
  },
  {
    id: 'ORD-002', 
    customer: 'Sarah Johnson',
    email: 'sarah@example.com',
    project: 'Mobile App',
    address: '456 Oak Ave, Los Angeles, CA',
    date: '2024-01-14',
    status: 'in-progress',
    amount: '$5,000'
  },
  {
    id: 'ORD-003',
    customer: 'Mike Davis',
    email: 'mike@example.com', 
    project: 'E-commerce Store',
    address: '789 Pine Rd, Chicago, IL',
    date: '2024-01-13',
    status: 'pending',
    amount: '$3,200'
  },
  {
    id: 'ORD-004',
    customer: 'Emily Wilson',
    email: 'emily@example.com',
    project: 'Brand Identity',
    address: '321 Elm St, Houston, TX',
    date: '2024-01-12', 
    status: 'completed',
    amount: '$1,800'
  },
];

const getStatusColor = (status) => {
  switch (status) {
    case 'completed':
      return 'success';
    case 'in-progress':
      return 'info';
    case 'pending':
      return 'warning';
    default:
      return 'default';
  }
};

export default function Orders() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOrders, setSelectedOrders] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const filteredOrders = ordersData.filter(order =>
    order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.project.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectOrder = (orderId) => {
    setSelectedOrders(prev =>
      prev.includes(orderId)
        ? prev.filter(id => id !== orderId)
        : [...prev, orderId]
    );
  };

  const handleSelectAll = (event) => {
    if (event.target.checked) {
      setSelectedOrders(filteredOrders.map(order => order.id));
    } else {
      setSelectedOrders([]);
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Box>
      <Typography variant="h4" className="mb-6 text-foreground font-semibold">
        Orders
      </Typography>

      <Card>
        <CardContent>
          {/* Header Actions */}
          <Box className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <TextField
              placeholder="Search orders..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              variant="outlined"
              size="small"
              className="w-full sm:w-80"
            />
            
            <Box className="flex gap-2">
              <Button
                variant="contained"
                startIcon={<AddIcon />}
                className="bg-primary hover:bg-primary/90"
              >
                Add Order
              </Button>
              <IconButton>
                <FilterIcon />
              </IconButton>
              <IconButton>
                <SortIcon />
              </IconButton>
            </Box>
          </Box>

          {/* Orders Table */}
          <TableContainer component={Paper} variant="outlined">
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell padding="checkbox">
                    <Checkbox
                      indeterminate={selectedOrders.length > 0 && selectedOrders.length < filteredOrders.length}
                      checked={filteredOrders.length > 0 && selectedOrders.length === filteredOrders.length}
                      onChange={handleSelectAll}
                    />
                  </TableCell>
                  <TableCell>Order ID</TableCell>
                  <TableCell>Customer</TableCell>
                  <TableCell>Project</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Amount</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredOrders
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((order) => (
                    <TableRow key={order.id} hover>
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={selectedOrders.includes(order.id)}
                          onChange={() => handleSelectOrder(order.id)}
                        />
                      </TableCell>
                      <TableCell className="font-medium">{order.id}</TableCell>
                      <TableCell>
                        <Box>
                          <Typography variant="body2" className="font-medium">
                            {order.customer}
                          </Typography>
                          <Typography variant="caption" className="text-muted-foreground">
                            {order.email}
                          </Typography>
                        </Box>
                      </TableCell>
                      <TableCell>{order.project}</TableCell>
                      <TableCell>{order.date}</TableCell>
                      <TableCell>
                        <Chip
                          label={order.status}
                          color={getStatusColor(order.status)}
                          size="small"
                          variant="outlined"
                        />
                      </TableCell>
                      <TableCell className="font-medium">{order.amount}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>

          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={filteredOrders.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </CardContent>
      </Card>
    </Box>
  );
}