import "./App.css";
// import Aside from './Component/Aside';
// import Card from './Component/Card';
import Carousel from "./Component/Carousel";
// import Side from './Component/Side';
// import Footer from './Component/Footer';
// import Navbar from './Component/Navbar';

function App() {
  // var u = "parmar"
  return (
    <>
      {/* <Navbar title={'parmar'} />
    <Footer/>
    <Card u={u}/>
    <Aside/> */}
      <Carousel
        bag={"Bag Collection"}
        bagD={"Latest Fashion in Bags"}
        shoes={"Shoes Collection"}
        shoesD={"Latest Design in Shoes"}
        watch={'watch Collection'}
        watchD={'Latest Design in watch'}
      />
      {/* <Side/> */}
    </>
  );
}

export default App;
