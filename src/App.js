import './App.css';
import Card from './components/Card';
import Navbar from './components/Navbar';
import data from './data'

function App() {
  const cardsEl = data.map(item => {
    return(
      <Card 
      key={item.id}
      {...item}
      />
    )
  })
  return (
    <div>
      <Navbar />
      <section className='cards--position'>
        {cardsEl} 
      </section>
    </div>
  );
}

export default App;
