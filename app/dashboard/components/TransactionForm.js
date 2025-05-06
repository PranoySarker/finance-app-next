"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import Label from "@/components/Label";
import Select from "@/components/Select";
import { categories, types } from "@/lib/constants";
import React from "react";
import { useForm } from "react-hook-form";

const TransactionForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onTouched" });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label className="mb-1">Type</Label>
          <Select className="" {...register("type")}>
            {types.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </Select>
        </div>

        <div>
          <Label className="mb-1">Category</Label>
          <Select className="" {...register("category")}>
            {categories.map((category) => (
              <option key={category}>{category}</option>
            ))}
          </Select>
        </div>

        <div>
          <Label className="mb-1">Transaction Date</Label>
          <Input {...register("created_at")} />
          {errors.created_at && (
            <span className="mt-1 text-red-500">
              {errors.created_at.message} 🚫
            </span>
          )}
        </div>

        <div>
          <Label className="mb-1">Amount</Label>
          <Input type="number" {...register("amount")} />
          {errors.amount && (
            <span className="mt-1 text-red-500">
              {errors.amount.message} 🚫
            </span>
          )}
        </div>

        <div className="col-span-1 md:col-span-2">
          <Label className="mb-1">Description</Label>
          <Input {...register("description")} />
          {errors.description && (
            <span className="mt-1 text-red-500">
              {errors.description.message} 🚫
            </span>
          )}
        </div>
      </div>

      <div className="flex justify-end mt-4">
        <Button type="submit">Save</Button>
      </div>
    </form>
  );
};

export default TransactionForm;
