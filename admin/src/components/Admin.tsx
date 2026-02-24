import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import type { UserT } from "@/types/user";
import { handleError } from "@/api/errorHandler";
import { getProfile } from "@/api/members";

import { Outlet } from "react-router";
import Navbar from "./Navbar";

const Admin = () => {
  const [user, setUser] = useState<UserT>(undefined);

  const loadUser = async () => {
    try {
      const data = await getProfile();
      setUser(data);
    } catch (err) {
      handleError(err instanceof Error ? err.message : "Възникна грешка");
    }
  };

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <>
      <ToastContainer />
      <Navbar user={user} />
      <div className="p-7 w-full admin">
        <Outlet context={{ user }} />
      </div>
    </>
  );
};

export default Admin;
