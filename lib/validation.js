import { z } from "zod";
import { categories, types } from "./constants";

export const transactionShema = z.object({
  type: z.enum(types),
  category: z.enum(categories),
  amount: z.coerce.number().min(1, {
    message: "Amount must be at least 1",
  }),
  description: z.string().min(1, {
    message: "Description is required",
  }),
  created_at: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Date needs to contain a valid date",
  }),
});
