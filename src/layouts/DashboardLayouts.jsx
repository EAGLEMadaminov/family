import Footer from "./Footer";
import Header from "./Header";
const DashboardLayouts = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
export default DashboardLayouts;
