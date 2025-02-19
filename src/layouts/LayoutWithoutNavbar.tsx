import { JSX, ReactNode } from "react";

interface LayoutWithoutNavbarProps {
  children: ReactNode;
}

function LayoutWithoutNavbar({
  children,
}: LayoutWithoutNavbarProps): JSX.Element {
  return <>{children}</>;
}

export default LayoutWithoutNavbar;
