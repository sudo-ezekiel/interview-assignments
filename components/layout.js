import Header from "@/components/header";
import Footer from "@/components/footer";

const Layout = ({ children, simpleFooter }) => {
  return (
    <>
      <Header />
      <main
        style={{
          marginTop: "3.5rem",
          backgroundColor: "#f2f2f2",
        }}
      >
        {children}
      </main>
      <Footer simpleFooter={simpleFooter} />
    </>
  );
};

export default Layout;
