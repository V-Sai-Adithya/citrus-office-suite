import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Plus,
  Calendar,
  Clock,
  CheckCircle,
  XCircle,
  MoreHorizontal,
  Eye,
  Check,
  X
} from "lucide-react";

const leaveRequests = [
  {
    id: 1,
    employee: "John Smith",
    department: "IT",
    type: "Vacation",
    startDate: "2024-02-15",
    endDate: "2024-02-19",
    days: 5,
    status: "pending",
    reason: "Family vacation to Hawaii",
    appliedDate: "2024-01-20"
  },
  {
    id: 2,
    employee: "Sarah Johnson",
    department: "Marketing",
    type: "Sick Leave",
    startDate: "2024-02-10",
    endDate: "2024-02-12",
    days: 3,
    status: "approved",
    reason: "Medical appointment and recovery",
    appliedDate: "2024-02-08"
  },
  {
    id: 3,
    employee: "Mike Chen",
    department: "Design",
    type: "Personal",
    startDate: "2024-02-20",
    endDate: "2024-02-20",
    days: 1,
    status: "rejected",
    reason: "Personal matters",
    appliedDate: "2024-02-05"
  },
  {
    id: 4,
    employee: "Emily Davis",
    department: "HR",
    type: "Maternity",
    startDate: "2024-03-01",
    endDate: "2024-05-30",
    days: 90,
    status: "approved",
    reason: "Maternity leave",
    appliedDate: "2024-01-15"
  },
  {
    id: 5,
    employee: "Alex Rodriguez",
    department: "Sales",
    type: "Vacation",
    startDate: "2024-02-25",
    endDate: "2024-02-28",
    days: 4,
    status: "pending",
    reason: "Weekend getaway",
    appliedDate: "2024-02-01"
  }
];

const leaveStats = [
  { type: "Total Requests", value: 23, icon: Calendar, color: "text-primary" },
  { type: "Pending", value: 8, icon: Clock, color: "text-warning" },
  { type: "Approved", value: 12, icon: CheckCircle, color: "text-success" },
  { type: "Rejected", value: 3, icon: XCircle, color: "text-destructive" }
];

export default function Leave() {
  const [activeTab, setActiveTab] = useState("requests");

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "approved":
        return <Badge className="bg-success text-success-foreground">Approved</Badge>;
      case "pending":
        return <Badge className="bg-warning text-warning-foreground">Pending</Badge>;
      case "rejected":
        return <Badge variant="destructive">Rejected</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const getLeaveTypeColor = (type: string) => {
    switch (type) {
      case "Vacation":
        return "bg-blue-100 text-blue-800";
      case "Sick Leave":
        return "bg-red-100 text-red-800";
      case "Personal":
        return "bg-purple-100 text-purple-800";
      case "Maternity":
        return "bg-pink-100 text-pink-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const filteredRequests = (status?: string) => {
    if (!status) return leaveRequests;
    return leaveRequests.filter(request => request.status === status);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Leave Management</h1>
          <p className="text-muted-foreground">Manage employee leave requests and policies</p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          New Leave Request
        </Button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {leaveStats.map((stat, index) => (
          <Card key={index} className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.type}</p>
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Leave Requests */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Leave Requests</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="requests">All Requests</TabsTrigger>
              <TabsTrigger value="pending">Pending</TabsTrigger>
              <TabsTrigger value="approved">Approved</TabsTrigger>
              <TabsTrigger value="rejected">Rejected</TabsTrigger>
            </TabsList>

            <TabsContent value="requests" className="mt-6">
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Employee</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Dates</TableHead>
                      <TableHead>Days</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Applied</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {leaveRequests.map((request) => (
                      <TableRow key={request.id}>
                        <TableCell>
                          <div>
                            <p className="font-medium">{request.employee}</p>
                            <p className="text-sm text-muted-foreground">{request.department}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline" className={getLeaveTypeColor(request.type)}>
                            {request.type}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="text-sm">
                            <p>{new Date(request.startDate).toLocaleDateString()}</p>
                            <p className="text-muted-foreground">to {new Date(request.endDate).toLocaleDateString()}</p>
                          </div>
                        </TableCell>
                        <TableCell className="font-medium">{request.days} days</TableCell>
                        <TableCell>{getStatusBadge(request.status)}</TableCell>
                        <TableCell className="text-sm text-muted-foreground">
                          {new Date(request.appliedDate).toLocaleDateString()}
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            {request.status === "pending" && (
                              <>
                                <Button size="sm" className="bg-success text-success-foreground hover:bg-success/90">
                                  <Check className="w-4 h-4" />
                                </Button>
                                <Button size="sm" variant="destructive">
                                  <X className="w-4 h-4" />
                                </Button>
                              </>
                            )}
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon">
                                  <MoreHorizontal className="w-4 h-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem>
                                  <Eye className="w-4 h-4 mr-2" />
                                  View Details
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>

            <TabsContent value="pending" className="mt-6">
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Employee</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Dates</TableHead>
                      <TableHead>Days</TableHead>
                      <TableHead>Applied</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredRequests("pending").map((request) => (
                      <TableRow key={request.id}>
                        <TableCell>
                          <div>
                            <p className="font-medium">{request.employee}</p>
                            <p className="text-sm text-muted-foreground">{request.department}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline" className={getLeaveTypeColor(request.type)}>
                            {request.type}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="text-sm">
                            <p>{new Date(request.startDate).toLocaleDateString()}</p>
                            <p className="text-muted-foreground">to {new Date(request.endDate).toLocaleDateString()}</p>
                          </div>
                        </TableCell>
                        <TableCell className="font-medium">{request.days} days</TableCell>
                        <TableCell className="text-sm text-muted-foreground">
                          {new Date(request.appliedDate).toLocaleDateString()}
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <Button size="sm" className="bg-success text-success-foreground hover:bg-success/90">
                              <Check className="w-4 h-4 mr-1" />
                              Approve
                            </Button>
                            <Button size="sm" variant="destructive">
                              <X className="w-4 h-4 mr-1" />
                              Reject
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>

            <TabsContent value="approved" className="mt-6">
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Employee</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Dates</TableHead>
                      <TableHead>Days</TableHead>
                      <TableHead>Applied</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredRequests("approved").map((request) => (
                      <TableRow key={request.id}>
                        <TableCell>
                          <div>
                            <p className="font-medium">{request.employee}</p>
                            <p className="text-sm text-muted-foreground">{request.department}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline" className={getLeaveTypeColor(request.type)}>
                            {request.type}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="text-sm">
                            <p>{new Date(request.startDate).toLocaleDateString()}</p>
                            <p className="text-muted-foreground">to {new Date(request.endDate).toLocaleDateString()}</p>
                          </div>
                        </TableCell>
                        <TableCell className="font-medium">{request.days} days</TableCell>
                        <TableCell className="text-sm text-muted-foreground">
                          {new Date(request.appliedDate).toLocaleDateString()}
                        </TableCell>
                        <TableCell>
                          <Button variant="outline" size="sm">
                            <Eye className="w-4 h-4 mr-2" />
                            View
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>

            <TabsContent value="rejected" className="mt-6">
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Employee</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Dates</TableHead>
                      <TableHead>Days</TableHead>
                      <TableHead>Applied</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredRequests("rejected").map((request) => (
                      <TableRow key={request.id}>
                        <TableCell>
                          <div>
                            <p className="font-medium">{request.employee}</p>
                            <p className="text-sm text-muted-foreground">{request.department}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline" className={getLeaveTypeColor(request.type)}>
                            {request.type}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="text-sm">
                            <p>{new Date(request.startDate).toLocaleDateString()}</p>
                            <p className="text-muted-foreground">to {new Date(request.endDate).toLocaleDateString()}</p>
                          </div>
                        </TableCell>
                        <TableCell className="font-medium">{request.days} days</TableCell>
                        <TableCell className="text-sm text-muted-foreground">
                          {new Date(request.appliedDate).toLocaleDateString()}
                        </TableCell>
                        <TableCell>
                          <Button variant="outline" size="sm">
                            <Eye className="w-4 h-4 mr-2" />
                            View
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}