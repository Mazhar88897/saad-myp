import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function ProvidentFundLedger() {
  return (
    <div className="p-8">
    <h1 className="text-2xl font-bold">Document Dashboard</h1>
      <p className="text-gray-500 dark:text-gray-400">
        Welcome to your dashboard. Here you can manage your documents.
      </p>
    <div className=" mx-5 ">
        <div className="my-5">
        <Card className="flex">
        <Button className="w-1/3 mx-1 font-bold "> Employee Provident Fund Ledger   </Button>
        <Button className="w-1/3 mx-1"> Annual Provident Fund Ledger   </Button>
        <Button className="w-1/3 mx-1"> Refund Employee Report   </Button>
        
    </Card>  
    <Card className="flex">
        <Button className="w-1/3 mx-1"> Loan Summary   </Button>
        <Button className="w-1/3 mx-1"> Refund Employee Report  </Button>
        <Button className="w-1/3 mx-1"> Interest Report </Button>
        
    </Card>  

        </div>
     
      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <CardTitle>Employee Provident Fund Ledger</CardTitle>
            <div className="flex gap-2">
              <Button variant="outline">Exit</Button>
              <Button>NEW SEARCH</Button>
            </div>
          </div>
          <div className="grid gap-4 mt-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Label htmlFor="employee-id">Employee ID</Label>
                <Input id="employee-id" placeholder="Enter Employee ID" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>From Date</Label>
                  <Select defaultValue="2007">
                    <SelectTrigger>
                      <SelectValue placeholder="Select year" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2007">01 - 2007</SelectItem>
                      <SelectItem value="2008">01 - 2008</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>To Date</Label>
                  <Select defaultValue="2013">
                    <SelectTrigger>
                      <SelectValue placeholder="Select year" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2013">01 - 2013</SelectItem>
                      <SelectItem value="2014">01 - 2014</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            {/* Opening Balances */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Provident Fund Ledger Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-4">
                  <div>
                    <Label>Opening Balances</Label>
                    <Input defaultValue="0.00" readOnly />
                  </div>
                  <div>
                    <Label>Employee SUM</Label>
                    <Input defaultValue="0.00" readOnly />
                  </div>
                  <div>
                    <Label>University SUM</Label>
                    <Input defaultValue="0.00" readOnly />
                  </div>
                  <div>
                    <Label>Profit SUM</Label>
                    <Input defaultValue="0.00" readOnly />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Main Ledger Table */}
            <div className="grid md:grid-cols-[2fr,1fr] gap-4">
              <Card>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>PF Employee</TableHead>
                        <TableHead>PF University</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {Array.from({ length: 5 }).map((_, i) => (
                        <TableRow key={i}>
                          <TableCell></TableCell>
                          <TableCell></TableCell>
                          <TableCell></TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>PR Date</TableHead>
                        <TableHead>PR AMT</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {Array.from({ length: 5 }).map((_, i) => (
                        <TableRow key={i}>
                          <TableCell></TableCell>
                          <TableCell></TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <div className="flex items-center gap-4">
            <Label>Category</Label>
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="secondary">View</Button>
          </div>
          <div className="space-y-2 text-right">
            <div className="grid grid-cols-2 gap-2">
              <span>Employee SUM:</span>
              <span className="font-mono">0.00</span>
              <span>SSUET SUM:</span>
              <span className="font-mono">0.00</span>
              <span>Profit SUM:</span>
              <span className="font-mono">0.00</span>
              <span>Loan:</span>
              <span className="font-mono">0.00</span>
              <span>Refund:</span>
              <span className="font-mono">0.00</span>
              <span className="font-bold">GROSS:</span>
              <span className="font-mono font-bold">0.00</span>
              <span>Loan Balances:</span>
              <span className="font-mono">0.00</span>
              <span className="font-bold">NET:</span>
              <span className="font-mono font-bold">0.00</span>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
    </div>
  )
}

