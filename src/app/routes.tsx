import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { Design } from "./components/Design";
import { Product } from "./components/Product";
import { Development } from "./components/Development";
import { AIResearch } from "./components/AIResearch";
import { TermsOfService } from "./components/TermsOfService";
import { PrivacyPolicy } from "./components/PrivacyPolicy";
import { NotFound } from "./components/NotFound";
import { SignIn } from "./components/SignIn";
import { SignUp } from "./components/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "design", Component: Design },
      { path: "product", Component: Product },
      { path: "development", Component: Development },
      { path: "ai-research", Component: AIResearch },
      { path: "signin", Component: SignIn },
      { path: "signup", Component: SignUp },
      { path: "terms", Component: TermsOfService },
      { path: "privacy", Component: PrivacyPolicy },
      { path: "*", Component: NotFound },
    ],
  },
]);
