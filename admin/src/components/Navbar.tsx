import type { UserT } from "@/types/user";
import { Link } from "react-router";
import { Button } from "./ui/button";

const Navbar = ({ user }: { user: UserT }) => {
  return (
    <div className="w-full bg-white border-b">
      <div className="max-w-7xl mx-auto px-7 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <h1 className="text-xl tracking-tight">Doors Website</h1>
          <nav className="hidden md:flex items-center gap-2">
            <Link to="/admin/products">
              <Button variant="ghost" className="text-sm">
                Продукти
              </Button>
            </Link>
            {user?.role == "Owner" && (
              <Link to="/admin/members">
                <Button variant="ghost" className="text-sm">
                  Участници
                </Button>
              </Link>
            )}
          </nav>
        </div>

        <div className="flex items-center gap-6">
          <div className="text-sm text-muted-foreground hidden sm:block">
            {user?.email}
          </div>

          <a
            href="https://mywebsite.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-800 text-sm underline underline-offset-4"
          >
            Посети уебсайт
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
