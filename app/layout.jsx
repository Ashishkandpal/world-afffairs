import "@styles/globals.css";
import Nav from "@components/Nav";
// import Provider from "@components/Provider";
import { NewsProvider } from "@newscontext/NewsContext";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "News Across The Globe",
  description: "Get to know what's happing all around the world",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Toaster />

        <NewsProvider>
          <main className="app">
            <Nav />
            {children}
          </main>
        </NewsProvider>
      </body>
    </html>
  );
};

export default RootLayout;
