
import './App.css'
import Header from "./components/Header/Header.jsx";
import Categories from "./components/Categories/Categories.jsx";


function App() {


  return (
      <>
          <Header/>
          <main>
              <div className="container">
                <Categories/>
              </div>
          </main>
      </>
  )
}

export default App
