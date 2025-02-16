import React from "react";
import { Card } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";

const profitData = [
  { year: "2006 - 2007", percentage: "0", profit: "0" },
  { year: "2007 - 2008", percentage: "5.020", profit: "416,340" },
  { year: "2008 - 2009", percentage: "8.797", profit: "1,399,614" },
  { year: "2009 - 2010", percentage: "6.540", profit: "1,654,763" },
  { year: "2010 - 2011", percentage: "7.213", profit: "2,553,802" },
  { year: "2011 - 2012", percentage: "9.817", profit: "5,018,639" },
  { year: "2012 - 2013", percentage: "7.476", profit: "5,774,886" },
  { year: "2013 - 2014", percentage: "8.759", profit: "7,649,992" },
  { year: "2014 - 2015", percentage: "9.767", profit: "8,386,478" },
];

const ProfitTable = () => {
  return (



<div className="p-8 flex-1">
      <h1 className="text-2xl  font-bold"> Dashboard</h1>
        <p className="text-gray-500 mb-4 dark:text-gray-400">
          Welcome to your dashboard. Here you can manage your data.
       </p>
    <div className="  justify-center items-center ">
       
    <div className="flex justify-center items-center ">
      <Card className="w-full max-w-4xl p-6">
        <h2 className="text-xl font-semibold text-center mb-4">Annual Profit Data</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Year</TableHead>
              <TableHead>Percentage</TableHead>
              <TableHead>Profit Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {profitData.map((data, index) => (
              <TableRow key={index}>
                <TableCell>{data.year}</TableCell>
                <TableCell>{data.percentage}</TableCell>
                <TableCell>{data.profit}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
     
    </div>
    </div>


    
  );
};

export default ProfitTable;
