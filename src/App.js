import Header from './components/Header';
import TravelList from './components/TravelList';
import data from './data.js';

function App() {
  const travelList = data.map((value) => {
    return (
      <TravelList
        key={value.title}
        title={value.title}
        location={value.location}
        googleMapsUrl={value.googleMapsUrl}
        startDate={value.startDate}
        endDate={value.endDate}
        description={value.description}
        imageUrl={value.imageUrl}
      />
    );
  });

  return (
    <div className='App'>
      <Header />
      {travelList}
    </div>
  );
}

export default App;
