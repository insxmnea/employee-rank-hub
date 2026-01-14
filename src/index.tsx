import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { App } from "@app/App";
import { ThemeProvider } from "@app/providers/theme";
import "@shared/config/i18n/i18n";
import { ErrorBoundary } from "@app/providers/ErrorBoundary";
import { ErrorPage } from "@pages/error-page";

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <ErrorBoundary fallback={<ErrorPage />}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ErrorBoundary>
  </BrowserRouter>
);
