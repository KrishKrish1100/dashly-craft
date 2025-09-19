import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users, ShoppingCart, DollarSign, Activity } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar } from "recharts";

const kpiData = [
  { title: "Customers", value: "3,781", change: "+11.01%", icon: Users, trend: "up" },
  { title: "Orders", value: "1,219", change: "-0.03%", icon: ShoppingCart, trend: "down" },
  { title: "Revenue", value: "$695", change: "+15.03%", icon: DollarSign, trend: "up" },
  { title: "Growth", value: "30.1%", change: "+6.08%", icon: TrendingUp, trend: "up" },
];

const revenueData = [
  { month: "Jan", current: 15000, previous: 12000 },
  { month: "Feb", current: 18000, previous: 14000 },
  { month: "Mar", current: 16000, previous: 16000 },
  { month: "Apr", current: 20000, previous: 18000 },
  { month: "May", current: 22000, previous: 19000 },
  { month: "Jun", current: 25000, previous: 21000 },
];

const projectionsData = [
  { month: "Jan", projections: 15, actuals: 18 },
  { month: "Feb", projections: 20, actuals: 22 },
  { month: "Mar", projections: 18, actuals: 19 },
  { month: "Apr", projections: 25, actuals: 28 },
  { month: "May", projections: 22, actuals: 20 },
  { month: "Jun", projections: 28, actuals: 30 },
];

const locationData = [
  { name: "New York", value: 72000, color: "#3b82f6" },
  { name: "San Francisco", value: 39000, color: "#22c55e" },
  { name: "Sydney", value: 25000, color: "#f59e0b" },
  { name: "Singapore", value: 61000, color: "#ef4444" },
];

const topProducts = [
  { name: "ASOS Ridley High Waist", price: "$79.49", quantity: 82, amount: "$6,518.18" },
  { name: "Marco Lightweight Shirt", price: "$128.50", quantity: 37, amount: "$4,754.50" },
  { name: "Half Sleeve Shirt", price: "$39.99", quantity: 64, amount: "$2,559.36" },
  { name: "Lightweight Jacket", price: "$20.00", quantity: 184, amount: "$3,680.00" },
  { name: "Marco Shoes", price: "$79.49", quantity: 64, amount: "$1,965.81" },
];

const activities = [
  { user: "You have a bug that needs...", time: "Just now", type: "bug" },
  { user: "Released a new version", time: "59 minutes ago", type: "release" },
  { user: "Submitted a bug", time: "12 hours ago", type: "bug" },
  { user: "Modified A data in Page X", time: "Today, 11:59 AM", type: "modify" },
  { user: "Deleted a page in Project X", time: "Feb 2, 2023", time: "Feb 2, 2023", type: "delete" },
];

const contacts = [
  { name: "Natali Craig", avatar: "NC" },
  { name: "Drew Cano", avatar: "DC" },
  { name: "Orlando Diggs", avatar: "OD" },
  { name: "Andi Lane", avatar: "AL" },
  { name: "Kate Morrison", avatar: "KM" },
  { name: "Koray Okumus", avatar: "KO" },
];

export default function Dashboard() {
  return (
    <div className="flex-1 space-y-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-foreground">eCommerce</h1>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {kpiData.map((kpi, index) => (
          <Card key={index} className="animate-fade-in">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground">{kpi.title}</p>
                  <p className="text-3xl font-bold">{kpi.value}</p>
                  <p className={`text-sm flex items-center gap-1 ${
                    kpi.trend === 'up' ? 'text-success' : 'text-danger'
                  }`}>
                    <TrendingUp className={`h-3 w-3 ${
                      kpi.trend === 'down' ? 'rotate-180' : ''
                    }`} />
                    {kpi.change}
                  </p>
                </div>
                <div className="h-12 w-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                  <kpi.icon className="h-6 w-6 text-primary-foreground" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Projections vs Actuals Chart */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Projections vs Actuals</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={projectionsData}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis dataKey="month" className="text-sm" />
                <YAxis className="text-sm" />
                <Bar dataKey="projections" fill="hsl(var(--chart-1))" radius={4} />
                <Bar dataKey="actuals" fill="hsl(var(--chart-2))" radius={4} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Revenue Chart */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Revenue</CardTitle>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-chart-1"></div>
                <span>Current Week $58,211</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-chart-2"></div>
                <span>Previous Week $68,768</span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis dataKey="month" className="text-sm" />
                <YAxis className="text-sm" />
                <Line 
                  type="monotone" 
                  dataKey="current" 
                  stroke="hsl(var(--chart-1))" 
                  strokeWidth={3}
                  dot={false}
                />
                <Line 
                  type="monotone" 
                  dataKey="previous" 
                  stroke="hsl(var(--chart-2))" 
                  strokeWidth={3}
                  strokeDasharray="5 5"
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Revenue by Location */}
        <Card>
          <CardHeader>
            <CardTitle>Revenue by Location</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {locationData.map((location, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="font-medium">{location.name}</span>
                  <span className="text-muted-foreground">{(location.value / 1000).toFixed(0)}K</span>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={locationData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    dataKey="value"
                  >
                    {locationData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Top Selling Products */}
        <Card>
          <CardHeader>
            <CardTitle>Top Selling Products</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topProducts.map((product, index) => (
                <div key={index} className="grid grid-cols-4 gap-2 text-sm">
                  <span className="font-medium truncate">{product.name}</span>
                  <span className="text-muted-foreground">{product.price}</span>
                  <span className="text-muted-foreground">{product.quantity}</span>
                  <span className="text-right font-medium">{product.amount}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Activities & Contacts */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Activities</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {activities.map((activity, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                      <Activity className="h-4 w-4" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium">{activity.user}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contacts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {contacts.map((contact, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground text-sm font-medium">
                      {contact.avatar}
                    </div>
                    <span className="text-sm font-medium">{contact.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}