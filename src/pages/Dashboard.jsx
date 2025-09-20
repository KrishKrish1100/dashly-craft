import {
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  Chip,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  LinearProgress,
} from '@mui/material';
import {
  TrendingUp,
  ShoppingCart,
  Users,
  DollarSign,
} from '@mui/icons-material';

const kpis = [
  {
    title: 'Total Revenue',
    value: '$45,231.89',
    change: '+20.1%',
    icon: DollarSign,
  },
  {
    title: 'Orders',
    value: '2,350',
    change: '+180.1%',  
    icon: ShoppingCart,
  },
  {
    title: 'Customers',
    value: '12,234',
    change: '+19%',
    icon: Users,
  },
  {
    title: 'Growth',
    value: '573',
    change: '+201%',
    icon: TrendingUp,
  },
];

const topProducts = [
  { name: 'Product A', sales: 1234, progress: 85 },
  { name: 'Product B', sales: 987, progress: 72 },
  { name: 'Product C', sales: 654, progress: 58 },
  { name: 'Product D', sales: 432, progress: 41 },
  { name: 'Product E', sales: 321, progress: 35 },
];

const activities = [
  { name: 'John Doe', action: 'placed an order', time: '2 minutes ago' },
  { name: 'Jane Smith', action: 'updated profile', time: '5 minutes ago' },
  { name: 'Mike Johnson', action: 'left a review', time: '10 minutes ago' },
  { name: 'Sarah Wilson', action: 'made a payment', time: '15 minutes ago' },
];

export default function Dashboard() {
  return (
    <Box>
      <Typography variant="h4" className="mb-6 text-foreground font-semibold">
        Dashboard
      </Typography>

      {/* KPI Cards */}
      <Grid container spacing={3} className="mb-6">
        {kpis.map((kpi) => {
          const Icon = kpi.icon;
          return (
            <Grid item xs={12} sm={6} md={3} key={kpi.title}>
              <Card className="hover:shadow-md transition-shadow">
                <CardContent>
                  <Box className="flex items-center justify-between">
                    <Box>
                      <Typography variant="body2" className="text-muted-foreground">
                        {kpi.title}
                      </Typography>
                      <Typography variant="h5" className="font-bold text-foreground">
                        {kpi.value}
                      </Typography>
                      <Chip
                        label={kpi.change}
                        size="small"
                        color="success"
                        variant="outlined"
                        className="mt-1"
                      />
                    </Box>
                    <Icon className="text-primary w-8 h-8" />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>

      <Grid container spacing={3}>
        {/* Top Products */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" className="mb-4 text-foreground">
                Top Selling Products
              </Typography>
              <Box className="space-y-4">
                {topProducts.map((product, index) => (
                  <Box key={product.name}>
                    <Box className="flex justify-between items-center mb-1">
                      <Typography variant="body2" className="text-foreground">
                        {product.name}
                      </Typography>
                      <Typography variant="body2" className="text-muted-foreground">
                        {product.sales} sales
                      </Typography>
                    </Box>
                    <LinearProgress 
                      variant="determinate" 
                      value={product.progress} 
                      className="h-2 rounded-full"
                    />
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Recent Activities */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" className="mb-4 text-foreground">
                Recent Activities
              </Typography>
              <List>
                {activities.map((activity, index) => (
                  <ListItem key={index} className="px-0">
                    <ListItemAvatar>
                      <Avatar className="bg-primary text-primary-foreground">
                        {activity.name.charAt(0)}
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={`${activity.name} ${activity.action}`}
                      secondary={activity.time}
                      primaryTypographyProps={{ className: 'text-foreground' }}
                      secondaryTypographyProps={{ className: 'text-muted-foreground' }}
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}