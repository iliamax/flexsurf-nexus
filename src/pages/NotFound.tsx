
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center bg-blue-50 py-20">
        <div className="max-w-md w-full p-8 text-center">
          <div className="w-24 h-24 rounded-full bg-flexsurf-blue/10 flex items-center justify-center mx-auto mb-6">
            <span className="text-5xl font-bold text-flexsurf-blue">404</span>
          </div>
          <h1 className="text-3xl font-bold mb-3 text-flexsurf-blue-dark">Page Not Found</h1>
          <p className="text-gray-600 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Button asChild size="lg" className="bg-flexsurf-blue hover:bg-flexsurf-blue-dark w-full">
            <Link to="/" className="inline-flex items-center">
              <Home className="mr-2 h-5 w-5" />
              Return Home
            </Link>
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
