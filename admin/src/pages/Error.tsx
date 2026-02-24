import { Link, useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const Error = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="max-w-md mx-auto text-center px-4">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-3xl font-semibold text-foreground mb-4">
            Страницата не беше намерена.
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Съжаляваме, но не можахме да намрим страницата, която търсите.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link to={"/admin/"}>
              <Home className="mr-2 h-4 w-4" />
              Към началната стрница
            </Link>
          </Button>

          <Button variant="outline" size="lg" onClick={() => navigate(-1)}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Върни се
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Error;
