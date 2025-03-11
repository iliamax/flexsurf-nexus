
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import "./App.css";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services/internet" element={<NotFound />} />
          <Route path="/services/networking" element={<NotFound />} />
          <Route path="/services/cctv" element={<NotFound />} />
          <Route path="/services/billing" element={<NotFound />} />
          <Route path="/services/development" element={<NotFound />} />
          <Route path="/services/cybersecurity" element={<NotFound />} />
          <Route path="/about" element={<NotFound />} />
          <Route path="/pricing" element={<NotFound />} />
          <Route path="/support" element={<NotFound />} />
          <Route path="/contact" element={<NotFound />} />
          <Route path="/team" element={<NotFound />} />
          <Route path="/careers" element={<NotFound />} />
          <Route path="/blog" element={<NotFound />} />
          <Route path="/partners" element={<NotFound />} />
          <Route path="/faq" element={<NotFound />} />
          <Route path="/status" element={<NotFound />} />
          <Route path="/terms" element={<NotFound />} />
          <Route path="/privacy" element={<NotFound />} />
          <Route path="/cookies" element={<NotFound />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
