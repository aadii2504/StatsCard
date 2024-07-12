
import './App.css'
import BasketballPlayerCard from './components/BasketballPlayerCard.jsx';

function App() {
  const player = {
    name: "LeBron James",
    image: "https://bsmedia.business-standard.com/_media/bs/img/article/2017-06/12/full/1497258236-9296.jpg?im=FeatureCrop,size=(826,465)",
    position: "Forward",
    stats: {
      pointsPerGame: 25.4,
      assistsPerGame: 7.1,
      reboundsPerGame: 10.5
    }
  };

  return (
    <div className="App">
      <BasketballPlayerCard {...player} />
    </div>
  )
}

export default App
