import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import './styles/App.css'
import Tutorials from './components/Tutorials.jsx'

/*function Headerlist({items}) {
  return <>{items.map((name) => (
        <a key={name} name={name} />
      ))}</>
}*/

export default function App() {
  return <><Header />
  <main>
    <Hero/>
    <Tutorials/>
  </main>
  </>
}