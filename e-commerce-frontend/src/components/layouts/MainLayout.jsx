import Header from "./Header";
import Footer from '../Footer';
import StayInTouch from '../StayInTouch';

const MainLayout = ({ children }) => {
    return (
      <>
        <Header />
        <main>{children}</main>
        <StayInTouch />
        <Footer />
      </>
    );
  };

  export default MainLayout;