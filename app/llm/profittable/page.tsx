"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function ProfitCalculation() {
  const [actualProfit, setActualProfit] = useState("");
  const [percentage, setPercentage] = useState("");
  const [allocatedProfit, setAllocatedProfit] = useState([]);

  // Sample Employee Data (Can be replaced with API data)
  const employees = Array(7).fill({ name: "", id: "", profitShare: "" });

  const handleCalculate = () => {
    if (!actualProfit || !percentage) return;
    const profitShare = (parseFloat(actualProfit) * (parseFloat(percentage) / 100)).toFixed(2);
    // setAllocatedProfit(employees.map((_, index) => ({ id: `EMP-${index + 1}`, name: `Employee ${index + 1}`, profitShare })));
  };

  return (
    <div className="p-8 flex-1">
          <h1 className="text-2xl  font-bold"> Dashboard</h1>
            <p className="text-gray-500 mb-4 dark:text-gray-400">
              Welcome to your dashboard. Here you can manage your data.
           </p>
        <div className="  justify-center items-center ">
           
        <div className="flex flex-col items-center justify-center p-6 space-y-6">
      <Card className="w-[800px] shadow-lg">
        <CardHeader>
          <CardTitle className="text-center">PROFIT CALCULATION</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Actual Profit & Percentage */}
          <div className="flex justify-between items-center space-x-4">
            <div className="flex flex-col">
              <Label className="mb-1">Actual Profit</Label>
              <Input value={actualProfit} onChange={(e) => setActualProfit(e.target.value)} placeholder="Enter Profit" />
            </div>
            <div className="flex flex-col">
              <Label className="mb-1">Rounded Profit</Label>
              <Input value={actualProfit} onChange={(e) => setActualProfit(e.target.value)} placeholder="Rounded  Profit" />
            </div>
            <div className="flex flex-col">
              <Label className="mb-1">Percentage</Label>
              <Input value={percentage} onChange={(e) => setPercentage(e.target.value)} placeholder="%" />
            </div>
            <Button onClick={handleCalculate}>Calculate</Button>
          </div>

          {/* Profit Distribution Table */}
          <div className="">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Employee ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Profit Share</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {allocatedProfit.length > 0
                  ? allocatedProfit.map((emp: {id : string, name: string, profitShare: string}, index) => (
                      <TableRow key={index}>
                        <TableCell>{emp.id}</TableCell>
                        <TableCell>{emp.name}</TableCell>
                        <TableCell>${emp.profitShare}</TableCell>
                      </TableRow>
                    ))
                  : employees.map((_, index) => (
                      <TableRow key={index}>
                        <TableCell>-</TableCell>
                        <TableCell>-</TableCell>
                        <TableCell>-</TableCell>
                      </TableRow>
                    ))}
              </TableBody>
            </Table>
          </div>

          {/* Action Buttons */}
          <div className="mt-4 flex justify-between">
            <Button variant="outline">Print</Button>
            <Button variant="default">Finalize (Secure) </Button>
            <Button variant="secondary">Change</Button>
            <Button variant="destructive">Exit</Button>
          </div>
        </CardContent>
      </Card>
    </div>
         
        </div>
        </div>
  
  );
}
