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