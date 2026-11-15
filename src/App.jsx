import "./App.css";
import Card from "./components/Card";
import { MainContent, Footer } from "./components/MainContent";

import hp1 from "./assets/hp-1.jpg";
import hp2 from "./assets/hp-2.webp";
import hp3 from "./assets/hp-3.webp";
import hp4 from "./assets/hp-4.jpg";
import hp5 from "./assets/hp-5.jfif";
import hp6 from "./assets/hp-6.jpg";
import hp7 from "./assets/hp-7.jfif";
import hp8 from "./assets/hp-8.jpg";

const App = () => {
  return (   
    <>
    <MainContent>
      <Card imagem={hp1} nome="Harry Potter e a Pedra Filosofal"/>
      <Card imagem={hp2} nome="Harry Potter e a Câmara Secreta"/>
      <Card imagem={hp3} nome="Harry Potter e o Prisioneiro de Azkaban"/>
      <Card imagem={hp4} nome="Harry Potter e o Cálice de Fogo"/>
      <Card imagem={hp5} nome="Harry Potter e a Ordem da Fênix"/>
      <Card imagem={hp6} nome="Harry Potter e o Enigma do Príncipe"/>
      <Card imagem={hp7} nome="Harry Potter e as Relíquias da Morte - Parte 1"/>
      <Card imagem={hp8} nome="Harry Potter e as Relíquias da Morte - Parte 2"/>
    </MainContent> 
    <Footer />
    </>
   );
}
 
export default App;