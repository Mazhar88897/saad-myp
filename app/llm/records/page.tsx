"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function EmployeeRecords() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Document Dashboard</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Welcome to your dashboard. Here you can manage your documents.
        </p>
    
    <div className="flex flex-col justify-center container   w-[90%] mx-6 py-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Edit Records</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="grid gap-2">
              <Label htmlFor="employeeId">Employee ID</Label>
              <Input id="employeeId" placeholder="Enter Employee ID" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="department">Department</Label>
              <Input id="department" placeholder="Enter Department" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="designation">Designation</Label>
              <Input id="designation" placeholder="Enter Designation" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="nlcNo">NLC No#</Label>
              <Input id="nlcNo" placeholder="Enter NLC Number" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="grade">Grade</Label>
              <Input id="grade" placeholder="Enter Grade" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="appDate">App_Date</Label>
              <Input id="appDate" type="date" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="status">Status</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="working">Working</SelectItem>
                  <SelectItem value="retired">Retired</SelectItem>
                  <SelectItem value="terminated">Terminated</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex justify-end mt-4 space-x-2">
            <Button variant="outline">View</Button>
            <Button>Save</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Contribution Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="contEmployeeId">Employee ID</Label>
              <Input id="contEmployeeId" placeholder="Enter Employee ID" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="uniContribution">University Contribution</Label>
              <Input id="uniContribution" placeholder="0.00" type="number" step="0.01" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="empContribution">Employee Contribution</Label>
              <Input id="empContribution" placeholder="0.00" type="number" step="0.01" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="contDate">Select Date</Label>
              <Input id="contDate" type="date" />
            </div>
          </div>
          <div className="flex justify-end mt-4 space-x-2">
            <Button variant="outline">View</Button>
            <Button variant="outline">New</Button>
            <Button>Update</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Loan Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="loanEmployeeId">Employee ID</Label>
              <Input id="loanEmployeeId" placeholder="Enter Employee ID" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="loanAmount">Loan Amount</Label>
              <Input id="loanAmount" placeholder="0.00" type="number" step="0.01" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="loanDate">Select Date</Label>
              <Input id="loanDate" type="date" />
            </div>
          </div>
          <div className="flex justify-end mt-4 space-x-2">
            <Button variant="outline">View</Button>
            <Button variant="outline">New</Button>
            <Button>Update</Button>
          </div>
        </CardContent>
      </Card>
      <Button className="bg-red-600 text-white">Exit</Button>
    </div></div>
  )
}

