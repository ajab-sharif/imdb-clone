import { ThemeProvider } from "next-themes";

function Provider({ children }) {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <div className="text-gray-700 dark:text-gray-200">{children}</div>
    </ThemeProvider>
  );
}

export default Provider;
