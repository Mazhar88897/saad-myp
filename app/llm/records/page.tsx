"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function EmployeeManagement() {
  // State for each section
  const [loanData, setLoanData] = useState({
    employeeId: "",
    loanAmount: "",
    date: "",
    availableFunds: "0.00",
  });

  const [contributionData, setContributionData] = useState({
    employeeId: "",
    contributionAmount: "",
    date: "",
  });

  const [profileData, setProfileData] = useState({
    employeeId: "",
    department: "",
    grade: "",
    nlc: "",
    appDate: "",
    status: "Working",
  });

  // Handle Input Change
  const handleChange = () => {
    // const { name, value } = e.target;
    // setter((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
     <div className="p-8 flex-1">
          <h1 className="text-2xl  font-bold"> Dashboard</h1>
            <p className="text-gray-500 mb-4 dark:text-gray-400">
              Welcome to your dashboard. Here you can manage your data.
           </p>
        <div className=" flex flex-col h-full justify-center items-center space-y-4">
           
        <div className="flex flex-col h-full items-center justify-center space-y-6 p-4">
      <div className="flex">
        {/* Loan Entries */}
        <Card className="w-96 shadow-lg m-2">
          <CardHeader>
            <CardTitle>Loan Entries</CardTitle>
          </CardHeader>
          <CardContent>
            <Label>Employee ID</Label>
            <Input name="employeeId" value={loanData.employeeId} onChange={(e) => handleChange(e, setLoanData)} />

            <Label className="mt-2">Loan Amount</Label>
            <Input name="loanAmount" value={loanData.loanAmount} onChange={(e) => handleChange(e, setLoanData)} />

            <Label className="mt-2">Select Date</Label>
            <Input type="date" name="date" value={loanData.date} onChange={(e) => handleChange(e, setLoanData)} />

            <Label className="mt-2">Available Funds</Label>
            <Input value={loanData.availableFunds} disabled />

            <div className="mt-4 flex justify-between">
              <Button variant="outline">New</Button>
              <Button variant="default">Update</Button>
            </div>
          </CardContent>
        </Card>

        {/* Employee Contribution */}
        <Card className="w-96 shadow-lg m-2">
          <CardHeader>
            <CardTitle>Employee Contribution</CardTitle>
          </CardHeader>
          <CardContent>
            <Label>Employee ID</Label>
            <Input name="employeeId" value={contributionData.employeeId} onChange={(e) => handleChange(e, setContributionData)} />

            <Label className="mt-2">Employee Contribution</Label>
            <Input name="contributionAmount" value={contributionData.contributionAmount} onChange={(e) => handleChange(e, setContributionData)} />

            <Label className="mt-2">Select Date</Label>
            <Input type="date" name="date" value={contributionData.date} onChange={(e) => handleChange(e, setContributionData)} />

            <div className="mt-4 flex justify-between">
              <Button variant="outline">New</Button>
              <Button variant="default">Update</Button>
              <Button variant="ghost">View</Button>
            </div>
          </CardContent>
        </Card>

        {/* Profile Information */}
        <Card className="w-96 shadow-lg m-2">
          <CardHeader>
            <CardTitle>Edit Records</CardTitle>
          </CardHeader>
          <CardContent>
            <Label>Employee ID</Label>
            {/* <Input name="employeeId" value={profileData.employeeId} onChange={(e) => handleChange(e, setProfileData)} /> */}
            <Input name="employeeId" value={profileData.employeeId}  />
            <Label className="mt-2">Department</Label>
            <Input name="department" value={profileData.department} />

            <Label className="mt-2">Grade</Label>
            <Input name="grade" value={profileData.grade}  />

            <Label className="mt-2">NLC No.</Label>
            <Input name="nlc" value={profileData.nlc} />

            <Label className="mt-2">App Date</Label>
            <Input type="date" name="appDate" value={profileData.appDate}  />

            <Label className="mt-2">Status</Label>
            <Select value={profileData.status} >
              <SelectTrigger>
                <SelectValue placeholder="Select Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Working">Working</SelectItem>
                <SelectItem value="On Leave">On Leave</SelectItem>
                <SelectItem value="Resigned">Resigned</SelectItem>
              </SelectContent>
            </Select>

            <div className="mt-4 flex justify-between">
              <Button variant="default">Save</Button>
              <Button variant="ghost">View</Button>
              <Button variant="outline">Calculate</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Exit Button */}
      <Button variant="destructive" className="mt-1 w-1/2">
        Exit
      </Button>
    </div>
         
        </div>
        </div>
   
  );
}
