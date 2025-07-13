import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Plus,
  Users,
  Building2,
  MoreHorizontal,
  Edit,
  Trash2,
  TrendingUp
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const departments = [
  {
    id: 1,
    name: "Information Technology",
    code: "IT",
    manager: "John Smith",
    employeeCount: 45,
    budget: "$2,500,000",
    description: "Responsible for all technology infrastructure and software development",
    color: "bg-blue-500"
  },
  {
    id: 2,
    name: "Human Resources",
    code: "HR",
    manager: "Sarah Johnson",
    employeeCount: 12,
    budget: "$800,000",
    description: "Manages employee relations, recruitment, and organizational development",
    color: "bg-green-500"
  },
  {
    id: 3,
    name: "Marketing",
    code: "MKT",
    manager: "Mike Chen",
    employeeCount: 28,
    budget: "$1,800,000",
    description: "Handles brand management, digital marketing, and customer acquisition",
    color: "bg-purple-500"
  },
  {
    id: 4,
    name: "Sales",
    code: "SAL",
    manager: "Emily Davis",
    employeeCount: 35,
    budget: "$3,200,000",
    description: "Drives revenue growth through customer relationships and sales strategies",
    color: "bg-orange-500"
  },
  {
    id: 5,
    name: "Finance & Accounting",
    code: "FIN",
    manager: "Alex Rodriguez",
    employeeCount: 18,
    budget: "$1,200,000",
    description: "Manages financial operations, budgeting, and compliance",
    color: "bg-red-500"
  },
  {
    id: 6,
    name: "Operations",
    code: "OPS",
    manager: "Maria Garcia",
    employeeCount: 42,
    budget: "$2,000,000",
    description: "Oversees daily operations, supply chain, and process optimization",
    color: "bg-indigo-500"
  }
];

export default function Departments() {
  const totalEmployees = departments.reduce((sum, dept) => sum + dept.employeeCount, 0);

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Department Management</h1>
          <p className="text-muted-foreground">Organize and manage your company departments</p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Add Department
        </Button>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="shadow-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Departments</p>
                <p className="text-2xl font-bold text-foreground">{departments.length}</p>
              </div>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Building2 className="w-6 h-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Employees</p>
                <p className="text-2xl font-bold text-foreground">{totalEmployees}</p>
              </div>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Avg. Dept. Size</p>
                <p className="text-2xl font-bold text-foreground">{Math.round(totalEmployees / departments.length)}</p>
              </div>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Departments Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {departments.map((department) => (
          <Card key={department.id} className="shadow-card hover:shadow-hover transition-all duration-200">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 ${department.color} rounded-lg flex items-center justify-center`}>
                    <Building2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{department.name}</CardTitle>
                    <Badge variant="secondary">{department.code}</Badge>
                  </div>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Edit className="w-4 h-4 mr-2" />
                      Edit Department
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">
                      <Trash2 className="w-4 h-4 mr-2" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">{department.description}</p>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-muted-foreground">Manager</p>
                  <p className="font-medium">{department.manager}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Employees</p>
                  <p className="font-medium">{department.employeeCount}</p>
                </div>
              </div>

              <div>
                <p className="text-xs text-muted-foreground">Annual Budget</p>
                <p className="font-medium text-primary">{department.budget}</p>
              </div>

              <div className="flex space-x-2 pt-2">
                <Button variant="outline" size="sm" className="flex-1">
                  View Details
                </Button>
                <Button variant="outline" size="sm">
                  <Users className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}