import Footer from "./Footer";
import Header from "./Header";
import { useSelector } from "react-redux";
import Account from "./Account";
const DashboardLayouts = ({ children }) => {
  const openAccount = useSelector((store) => store.footer.isOpen);
  return (
    <>
      <Header />
      {children}
      {openAccount ? <Account /> : ""}
      <Footer />
    </>
  );
};
export default DashboardLayouts;
