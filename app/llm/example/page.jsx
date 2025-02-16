"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function LoanManagement() {
  const [formData, setFormData] = useState({
    employeeId: "",
    amount: "",
    date: "",
    availableFunds: "0.00",
  });

  const handleChange = () => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-8 flex-1">
      <h1 className="text-2xl  font-bold"> Dashboard</h1>
      <p className="text-gray-500 mb-4 dark:text-gray-400">
        Welcome to your dashboard. Here you can manage your data.
      </p>
      <div className=" flex flex-col h-full justify-center items-center space-y-4">
        <>
          {" "}
          <div className="flex flex-col h-full  items-center justify-center   space-y-6 p-4">
            <div className="flex">
              <Card className="w-96 shadow-lg m-2">
                <CardHeader>
                  <CardTitle>Loan Interest</CardTitle>
                </CardHeader>
                <CardContent>
                  <Label>Employee ID</Label>
                  <Input
                    name="employeeId"
                    value={formData.employeeId}
                    onChange={handleChange}
                  />

                  <Label className="mt-2">Interest Amount</Label>
                  <Input
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                  />

                  <Label className="mt-2">Select Date</Label>
                  <Input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                  />

                  <Label className="mt-2">Available Interest</Label>
                  <Input value={formData.availableFunds} disabled />

                  <div className="mt-4 flex justify-between">
                    <Button variant="default">Save</Button>
                    <Button variant="outline">Add New</Button>
                    <Button variant="destructive">Edit Interest</Button>
                  </div>
                </CardContent>
              </Card>

              {/* Loan Recovery Section */}
              <Card className="w-96 shadow-lg m-2">
                <CardHeader>
                  <CardTitle>Loan Recovery</CardTitle>
                </CardHeader>
                <CardContent>
                  <Label>Employee ID</Label>
                  <Input
                    name="employeeId"
                    value={formData.employeeId}
                    onChange={handleChange}
                  />

                  <Label className="mt-2">Recover Amount</Label>
                  <Input
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                  />

                  <Label className="mt-2">Select Date</Label>
                  <Input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                  />

                  <Label className="mt-2">Available Funds</Label>
                  <Input value={formData.availableFunds} disabled />

                  <div className="mt-4 flex justify-between">
                    <Button variant="default">View</Button>
                    <Button variant="outline">Edit Recovery</Button>
                    <Button variant="destructive">Recover</Button>
                  </div>
                </CardContent>
              </Card>

              {/* Loan Addition Section */}
              <Card className="w-96 shadow-lg m-2">
                <CardHeader>
                  <CardTitle>Loan Addition</CardTitle>
                </CardHeader>
                <CardContent>
                  <Label>Employee ID</Label>
                  <Input
                    name="employeeId"
                    value={formData.employeeId}
                    onChange={handleChange}
                  />

                  <Label className="mt-2">Loan Amount</Label>
                  <Input
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                  />

                  <Label className="mt-2">Select Date</Label>
                  <Input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                  />

                  <Label className="mt-2">Available Funds</Label>
                  <Input value={formData.availableFunds} disabled />

                  <div className="mt-4 flex justify-between">
                    <Button variant="default">Save</Button>
                    <Button variant="outline">Add New</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            <Button variant="destructive" className="mt-4 w-1/2">
              Exit
            </Button>
          </div>
        </>
      </div>
    </div>
  );
}
