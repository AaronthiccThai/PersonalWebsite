import Header from "./Header";
import Footer from "./Footer";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-[rgb(84,119,146)]">
      
      <Header />
      <main className="flex-1 w-screen max-w-none">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
