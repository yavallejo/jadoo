import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <div className="decoration">
      <div className="container px-4 py-12 lg:px-0">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
}
