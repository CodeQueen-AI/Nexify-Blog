import Home from './components/Home'
import Logos from './components/Logos'
import Services from './components/Services'
import Page1 from './components/Page1'
import Page2 from './components/Page2'
import Features from './components/Features'
import Plan from './components/Plan'
import About from './components/About'
import FAQ from './components/FAQs'
export default function page() {
  return (
    <div>
    <Home/>
    <Logos/>
    <Services/>
    <Page1/>
    <Page2/>
    <Features/>
    <Plan/>
    <About/>
    <FAQ/>
    </div>
  );
}
