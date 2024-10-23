import { ReactNode } from "react";
import Footer from "../Footer";
import Header from "../Header";

interface IChildren {
  children: ReactNode;
}

const PageContainer = ({ children }: IChildren) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default PageContainer;
