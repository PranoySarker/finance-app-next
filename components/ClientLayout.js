"use client";

import { CookiesProvider } from "react-cookie";

export default function ClientLayout({ children }) {
  return <CookiesProvider>{children}</CookiesProvider>;
}
