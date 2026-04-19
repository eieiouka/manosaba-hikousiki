import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import News from "./components/News/News";
import Character from "./components/Character/Character";
import Portal from "./components/Portal/Portal";

export default function App() {
  return (
    <div className="page">
      <Header />
      <Hero />
      <News />
      <Character />
      <Portal />
    </div>
  );
}