import Footer from './Footer';
import Header from './Header';
import { useSelector } from 'react-redux';
import Account from '../components/Account';
import Product from '../components/ProductPopup';
import InformationPopup from '../components/InformationPopup';

const DashboardLayouts = ({ children }) => {
  const openAccount = useSelector((store) => store.footer.isOpen);
  const openInformation = useSelector(
    (store) => store.footer.isOpenInformation
  );
  const product = useSelector((store) => store.product.selectedProduct);
  const isShowProduct = useSelector(
    (store) => store.product.isOpenSingleProduct
  );
  return (
    <>
      <Header />
      {children}
      {isShowProduct ? <Product data={product} /> : ''}
      {openAccount ? <Account /> : ''}
      {openInformation.show ? <InformationPopup id={openInformation.id} /> : ''}
      <Footer />
    </>
  );
};
export default DashboardLayouts;
