import Header from "./components/header";
import Footer from "./components/footer";
import WhatsAppButton from "./components/WhatsAppFloat";
import AppRoutes from "./routes/AppRoutes";
import Preloader from "./components/Preloader";


function App() {
  return (
    <>
  <Preloader />

      <Header />
      <AppRoutes />
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;