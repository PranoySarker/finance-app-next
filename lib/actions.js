"use server";

import { revalidateTag } from "next/cache";

export async function purgeTransationListCache() {
  revalidateTag("TransactionList");
}
