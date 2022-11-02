import Header from "./components/Header/header";
import NotificationButton from "./components/NotificationButton";
import SalesCard from "./components/SalesCard/salescard";

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <SalesCard />
          </div>
        </section>
      </main>

    </>
  )
}

export default App
