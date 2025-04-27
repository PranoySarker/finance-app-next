import Button from "@/components/Button";
import Input from "@/components/Input";
import Label from "@/components/Label";
import Select from "@/components/Select";
import { categories, types } from "@/lib/constants";
import React from "react";

const TransactionForm = () => {
  return (
    <form className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label className="mb-1">Type</Label>
          <Select className="">
            {types.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </Select>
        </div>

        <div>
          <Label className="mb-1">Category</Label>
          <Select className="">
            {categories.map((category) => (
              <option key={category}>{category}</option>
            ))}
          </Select>
        </div>

        <div>
          <Label className="mb-1">Transaction Date</Label>
          <Input />
        </div>

        <div>
          <Label className="mb-1">Amount</Label>
          <Input type="number" />
        </div>

        <div className="col-span-2">
          <Label className="mb-1">Description</Label>
          <Input />
        </div>
      </div>

      <div className="flex justify-end mt-4">
        <Button type="submit">Save</Button>
      </div>
    </form>
  );
};

export default TransactionForm;
