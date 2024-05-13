import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const MyLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
export default MyLayout;
