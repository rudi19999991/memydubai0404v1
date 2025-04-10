
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useLanguage } from "@/contexts/LanguageContext";
import { Lock } from "lucide-react";

// Admin password - in a real app, this would be stored securely on the server
const ADMIN_PASSWORD = "admin123";

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const { translate } = useLanguage();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState("");

  // Check if the user is already authenticated (using sessionStorage)
  useEffect(() => {
    const adminAuthenticated = sessionStorage.getItem("adminAuthenticated");
    if (adminAuthenticated === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem("adminAuthenticated", "true");
      setError("");
    } else {
      setError(translate("Incorrect password, please try again"));
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("adminAuthenticated");
    navigate("/");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-20 pb-12">
        <div className="luxury-container">
          {isAuthenticated ? (
            <div className="mx-auto max-w-4xl">
              <div className="flex justify-end mb-4">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={handleLogout}
                  className="text-luxury-navy"
                >
                  {translate("Logout")}
                </Button>
              </div>
              {children}
            </div>
          ) : (
            <div className="mx-auto max-w-md">
              <Card>
                <CardHeader className="bg-luxury-navy text-white">
                  <CardTitle className="flex items-center">
                    <Lock className="mr-2 h-5 w-5" /> {translate("Admin Login")}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                      <Label htmlFor="password">{translate("Password")}</Label>
                      <Input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder={translate("Enter admin password")}
                        required
                      />
                    </div>
                    
                    {error && (
                      <p className="text-sm text-red-600">{error}</p>
                    )}
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-luxury-gold hover:bg-luxury-gold/90"
                    >
                      {translate("Login")}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AdminLayout;