import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { App } from "@app/App";
import { ThemeProvider } from "@app/providers/theme";

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
