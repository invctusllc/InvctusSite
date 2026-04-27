import { Outlet } from "react-router";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { AuthProvider } from "./AuthContext";

export function Root() {
  return (
    <AuthProvider>
      <div className="min-h-screen flex flex-col bg-background">
        <Navigation />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </AuthProvider>
  );
}
