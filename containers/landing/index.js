import Navbar from "./components/Navbar";
import { Main, Provider, Feature, Invitation, About, Footer } from "./sections";

export default function Landing() {
  return (
    <>
      <Navbar />
      <Main />
      <Provider />
      <Feature />
      <Invitation />
      <About />
      <Footer />
    </>
  );
}
