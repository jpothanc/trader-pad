import { ReactNode } from "react";

type props = {
  children: ReactNode;
};
const Test = ({ children }: props) => {
  return <div>Test - {children}</div>;
};

export default Test;
