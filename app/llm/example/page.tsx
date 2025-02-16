"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

export default function LoanManagement() {
  const [formData, setFormData] = useState({
    employeeId: "",
    amount: "",
    date: "",
    availableFunds: "0.00",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (section: string) => {
    // Handle form submission based on section
    console.log(`Submitting ${section} form:`, formData)
  }

  const handleReset = () => {
    setFormData({
      employeeId: "",
      amount: "",
      date: "",
      availableFunds: "0.00",
    })
  }

  return (
    <div className="p-8 flex-1">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p className="text-gray-500 mb-4 dark:text-gray-400">Welcome to your dashboard. Here you can manage your data.</p>
      <div className="flex flex-col h-full justify-center items-center space-y-4">
        <div className="flex flex-wrap gap-4 justify-center items-start">
          {/* Loan Interest Section */}
          <Card className="w-96 shadow-lg">
            <CardHeader>
              <CardTitle>Loan Interest</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="interest-employee-id">Employee ID</Label>
                  <Input
                    id="interest-employee-id"
                    name="employeeId"
                    value={formData.employeeId}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="interest-amount">Interest Amount</Label>
                  <Input id="interest-amount" name="amount" value={formData.amount} onChange={handleChange} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="interest-date">Select Date</Label>
                  <Input id="interest-date" type="date" name="date" value={formData.date} onChange={handleChange} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="interest-available">Available Interest</Label>
                  <Input id="interest-available" value={formData.availableFunds} disabled />
                </div>

                <div className="flex justify-between gap-2">
                  <Button onClick={() => handleSubmit("interest")}>Save</Button>
                  <Button variant="outline" onClick={handleReset}>
                    Add New
                  </Button>
                  <Button variant="destructive">Edit Interest</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Loan Recovery Section */}
          <Card className="w-96 shadow-lg">
            <CardHeader>
              <CardTitle>Loan Recovery</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="recovery-employee-id">Employee ID</Label>
                  <Input
                    id="recovery-employee-id"
                    name="employeeId"
                    value={formData.employeeId}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="recovery-amount">Recover Amount</Label>
                  <Input id="recovery-amount" name="amount" value={formData.amount} onChange={handleChange} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="recovery-date">Select Date</Label>
                  <Input id="recovery-date" type="date" name="date" value={formData.date} onChange={handleChange} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="recovery-available">Available Funds</Label>
                  <Input id="recovery-available" value={formData.availableFunds} disabled />
                </div>

                <div className="flex justify-between gap-2">
                  <Button onClick={() => handleSubmit("recovery")}>View</Button>
                  <Button variant="outline">Edit Recovery</Button>
                  <Button variant="destructive">Recover</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Loan Addition Section */}
          <Card className="w-96 shadow-lg">
            <CardHeader>
              <CardTitle>Loan Addition</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="addition-employee-id">Employee ID</Label>
                  <Input
                    id="addition-employee-id"
                    name="employeeId"
                    value={formData.employeeId}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="addition-amount">Loan Amount</Label>
                  <Input id="addition-amount" name="amount" value={formData.amount} onChange={handleChange} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="addition-date">Select Date</Label>
                  <Input id="addition-date" type="date" name="date" value={formData.date} onChange={handleChange} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="addition-available">Available Funds</Label>
                  <Input id="addition-available" value={formData.availableFunds} disabled />
                </div>

                <div className="flex justify-between gap-2">
                  <Button onClick={() => handleSubmit("addition")}>Save</Button>
                  <Button variant="outline" onClick={handleReset}>
                    Add New
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Button variant="destructive" className="mt-8 w-full max-w-md">
          Exit
        </Button>
      </div>
    </div>
  )
}

