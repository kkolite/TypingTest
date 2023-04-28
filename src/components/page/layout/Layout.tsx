import { Outlet } from 'react-router-dom'
import { Footer, Header } from "..";

export const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
