import Footer from "./Footer";
import Header from "./Header";
import { useSelector } from "react-redux";
import Account from "./Account";
import Product from "../components/Product";

const DashboardLayouts = ({ children }) => {
  const openAccount = useSelector((store) => store.footer.isOpen);
  const product = useSelector((store) => store.product.selectedProduct);
  const isShowProduct = useSelector(
    (store) => store.product.isOpenSingleProduct
  );
  return (
    <>
      <Header />
      {children}
      {isShowProduct ? <Product data={product} /> : ""}
      {openAccount ? <Account /> : ""}
      <Footer />
    </>
  );
};
export default DashboardLayouts;
