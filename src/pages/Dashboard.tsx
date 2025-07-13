import { StatsCard } from "@/components/dashboard/StatsCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Building2,
  Calendar,
  Clock,
  TrendingUp,
  Plus,
  Eye
} from "lucide-react";

export default function Dashboard() {
  const stats = [
    {
      title: "Total Employees",
      value: 247,
      description: "Active employees",
      icon: Users,
      trend: { value: 12, isPositive: true }
    },
    {
      title: "Departments",
      value: 8,
      description: "Active departments",
      icon: Building2,
    },
    {
      title: "Pending Leaves",
      value: 15,
      description: "Awaiting approval",
      icon: Calendar,
      trend: { value: 3, isPositive: false }
    },
    {
      title: "Avg. Working Hours",
      value: "8.2h",
      description: "This month",
      icon: Clock,
      trend: { value: 5, isPositive: true }
    },
  ];

  const recentLeaves = [
    { id: 1, employee: "Sarah Johnson", type: "Sick Leave", days: 2, status: "pending" },
    { id: 2, employee: "Mike Chen", type: "Vacation", days: 5, status: "approved" },
    { id: 3, employee: "Emily Davis", type: "Personal", days: 1, status: "pending" },
    { id: 4, employee: "James Wilson", type: "Vacation", days: 3, status: "approved" },
  ];

  const newHires = [
    { id: 1, name: "Alex Rodriguez", position: "Software Engineer", department: "IT", startDate: "2024-01-15" },
    { id: 2, name: "Maria Garcia", position: "Marketing Specialist", department: "Marketing", startDate: "2024-01-10" },
    { id: 3, name: "David Kim", position: "HR Coordinator", department: "Human Resources", startDate: "2024-01-08" },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's what's happening in your organization.</p>
        </div>
        <div className="flex space-x-2">
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Add Employee
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Leave Requests */}
        <Card className="shadow-card">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg font-semibold">Recent Leave Requests</CardTitle>
            <Button variant="outline" size="sm">
              <Eye className="w-4 h-4 mr-2" />
              View All
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentLeaves.map((leave) => (
                <div key={leave.id} className="flex items-center justify-between p-3 rounded-lg bg-accent/50">
                  <div className="flex-1">
                    <p className="font-medium text-foreground">{leave.employee}</p>
                    <p className="text-sm text-muted-foreground">{leave.type} • {leave.days} days</p>
                  </div>
                  <Badge 
                    variant={leave.status === "approved" ? "default" : "secondary"}
                    className={leave.status === "approved" ? "bg-success text-success-foreground" : ""}
                  >
                    {leave.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* New Hires */}
        <Card className="shadow-card">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg font-semibold">New Hires This Month</CardTitle>
            <Button variant="outline" size="sm">
              <Eye className="w-4 h-4 mr-2" />
              View All
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {newHires.map((hire) => (
                <div key={hire.id} className="flex items-center space-x-3 p-3 rounded-lg bg-accent/50">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-primary-foreground">
                      {hire.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-foreground">{hire.name}</p>
                    <p className="text-sm text-muted-foreground">{hire.position} • {hire.department}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Started</p>
                    <p className="text-sm font-medium">{new Date(hire.startDate).toLocaleDateString()}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
              <Users className="w-6 h-6 text-primary" />
              <span className="text-sm">Add Employee</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
              <Building2 className="w-6 h-6 text-primary" />
              <span className="text-sm">Add Department</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
              <Calendar className="w-6 h-6 text-primary" />
              <span className="text-sm">Approve Leaves</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
              <TrendingUp className="w-6 h-6 text-primary" />
              <span className="text-sm">View Reports</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}