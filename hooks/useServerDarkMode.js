import { cookies } from "next/headers";

const useServerDarkMode = (defaultTheme = "dark") => {
  const cookieStore = cookies();
  const theme = cookieStore.get("theme")?.value;
  return theme || defaultTheme;
};

export default useServerDarkMode;
