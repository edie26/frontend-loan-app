import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Layout from "@/components/layout";
import Dashboard from "@/pages/dashboard";
import NewLoan from "@/pages/new-loan";
import Loans from "@/pages/loans";
import Payments from "@/pages/payments";
import Clients from "@/pages/clients";
import Capital from "@/pages/capital";
import Reports from "@/pages/reports";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Dashboard} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/new-loan" component={NewLoan} />
        <Route path="/loans" component={Loans} />
        <Route path="/payments" component={Payments} />
        <Route path="/clients" component={Clients} />
        <Route path="/capital" component={Capital} />
        <Route path="/reports" component={Reports} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
