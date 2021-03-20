import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Album from './components/Album';


function App() {
    const myName = "Lê DUY sƠNdsdsa";
    const myAge = 20;

    const preson = {
        name: "Lê Duy Sơnádsa",
        age: 20

    }

    return (  

    <div className = "App">
    <div>
        <Header></Header>
        <main>
            <Banner></Banner>
            <Album></Album>
        </main>
        <Footer></Footer>
    </div>


        </div>

    );
 
}

export default App;