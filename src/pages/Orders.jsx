import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { StatusBadge } from "@/components/ui/status-badge";
import { 
  Search, 
  Plus, 
  Filter, 
  ArrowUpDown, 
  ChevronLeft, 
  ChevronRight,
  MoreHorizontal
} from "lucide-react";

const ordersData = [
  { 
    id: "#CM9801", 
    user: { name: "Natali Craig", avatar: "NC" }, 
    project: "Landing Page", 
    address: "Meadow Lane Oakland", 
    date: "Just now", 
    status: "In Progress" 
  },
  { 
    id: "#CM9802", 
    user: { name: "Kate Morrison", avatar: "KM" }, 
    project: "CRM Admin pages", 
    address: "Larry San Francisco", 
    date: "A minute ago", 
    status: "Complete" 
  },
  { 
    id: "#CM9803", 
    user: { name: "Drew Cano", avatar: "DC" }, 
    project: "Client Project", 
    address: "Bagwell Avenue Ocala", 
    date: "1 hour ago", 
    status: "Pending" 
  },
  { 
    id: "#CM9804", 
    user: { name: "Orlando Diggs", avatar: "OD" }, 
    project: "Admin Dashboard", 
    address: "Washburn Baton Rouge", 
    date: "Yesterday", 
    status: "Approved" 
  },
  { 
    id: "#CM9805", 
    user: { name: "Andi Lane", avatar: "AL" }, 
    project: "App Landing Page", 
    address: "Nest Lane Olivette", 
    date: "Feb 2, 2023", 
    status: "Rejected" 
  },
  { 
    id: "#CM9801", 
    user: { name: "Natali Craig", avatar: "NC" }, 
    project: "Landing Page", 
    address: "Meadow Lane Oakland", 
    date: "Just now", 
    status: "In Progress" 
  },
  { 
    id: "#CM9802", 
    user: { name: "Kate Morrison", avatar: "KM" }, 
    project: "CRM Admin pages", 
    address: "Larry San Francisco", 
    date: "A minute ago", 
    status: "Complete" 
  },
  { 
    id: "#CM9803", 
    user: { name: "Drew Cano", avatar: "DC" }, 
    project: "Client Project", 
    address: "Bagwell Avenue Ocala", 
    date: "1 hour ago", 
    status: "Pending" 
  },
  { 
    id: "#CM9804", 
    user: { name: "Orlando Diggs", avatar: "OD" }, 
    project: "Admin Dashboard", 
    address: "Washburn Baton Rouge", 
    date: "Yesterday", 
    status: "Approved" 
  },
];

export default function Orders() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOrders, setSelectedOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const filteredOrders = ordersData.filter(order =>
    order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.project.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedOrders = filteredOrders.slice(startIndex, startIndex + itemsPerPage);

  const handleSelectAll = (checked) => {
    if (checked) {
      setSelectedOrders(paginatedOrders.map((_, index) => index));
    } else {
      setSelectedOrders([]);
    }
  };

  const handleSelectOrder = (index, checked) => {
    if (checked) {
      setSelectedOrders([...selectedOrders, index]);
    } else {
      setSelectedOrders(selectedOrders.filter(i => i !== index));
    }
  };

  return (
    <div className="flex-1 space-y-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-foreground">Order List</h1>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex items-center gap-4">
              <Button size="sm" className="bg-primary hover:bg-primary/90">
                <Plus className="h-4 w-4 mr-2" />
                Add
              </Button>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <Button variant="outline" size="sm">
                <ArrowUpDown className="h-4 w-4 mr-2" />
                Sort
              </Button>
            </div>
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search orders..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-2">
                    <Checkbox
                      checked={selectedOrders.length === paginatedOrders.length}
                      onCheckedChange={handleSelectAll}
                    />
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Order ID</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">User</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Project</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Address</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Date</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Status</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground"></th>
                </tr>
              </thead>
              <tbody>
                {paginatedOrders.map((order, index) => (
                  <tr 
                    key={`${order.id}-${index}`} 
                    className="border-b hover:bg-muted/50 transition-colors"
                  >
                    <td className="py-3 px-2">
                      <Checkbox
                        checked={selectedOrders.includes(index)}
                        onCheckedChange={(checked) => handleSelectOrder(index, checked)}
                      />
                    </td>
                    <td className="py-3 px-4 font-medium">{order.id}</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground text-sm font-medium">
                          {order.user.avatar}
                        </div>
                        <span className="font-medium">{order.user.name}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-muted-foreground">{order.project}</td>
                    <td className="py-3 px-4 text-muted-foreground">{order.address}</td>
                    <td className="py-3 px-4 text-muted-foreground">{order.date}</td>
                    <td className="py-3 px-4">
                      <StatusBadge status={order.status} />
                    </td>
                    <td className="py-3 px-4">
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between mt-6">
            <div className="text-sm text-muted-foreground">
              Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredOrders.length)} of {filteredOrders.length} entries
            </div>
            <div className="flex items-center gap-2">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                const pageNum = i + 1;
                return (
                  <Button
                    key={pageNum}
                    variant={currentPage === pageNum ? "default" : "outline"}
                    size="sm"
                    onClick={() => setCurrentPage(pageNum)}
                    className="w-10"
                  >
                    {pageNum}
                  </Button>
                );
              })}
              
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}