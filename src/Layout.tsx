import { Outlet } from "react-router";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

export const Layout = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};
