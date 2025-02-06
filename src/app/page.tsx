
import Header from "./component/header";
import HeroSection from "./component/Herosection";
import Companylogo from "./component/companylogo";
import Featuredproduct from "./component/featuredproduct";
import Topcategories from "./component/Topcategories";
import Ourproduct from "./component/ourproduct";
import Footer from "./component/footer";

export default function Home() {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <Companylogo/>
      <Featuredproduct/>
      <Topcategories/>
      <Ourproduct/>
      <Footer/>
    </div>
  )
      
}
