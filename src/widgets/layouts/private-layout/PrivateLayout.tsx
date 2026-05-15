import { Outlet } from "react-router";

export const PrivateLayout = () => {
  return (
    <div className="page-content">
      <div className="page-wrapper">
        <Outlet />
      </div>
    </div>
  );
};
