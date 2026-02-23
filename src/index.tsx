import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { App } from "@app/App";
import { ThemeProvider } from "@app/providers/theme";
import "@shared/config/i18n/i18n";
import { ErrorBoundary } from "@app/providers/ErrorBoundary";
import { ErrorPage } from "@pages/error-page";
import "./app/styles/index.scss";
import { StoreProvider } from "@app/providers/StoreProvider";

const root = createRoot(document.getElementById("root"));

root.render(
  <StoreProvider>
    <BrowserRouter>
      <ErrorBoundary fallback={<ErrorPage />}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </StoreProvider>,
);
