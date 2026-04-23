import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: "80px" }}>
        {children}
      </div>
    </>
  );
}

export default Layout;