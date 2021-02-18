import './App.css';
import ZingChart from 'zingchart-react';

const config = {
    type: 'bar',
    series: [{
      values: [4,5,3,4,5,3,5,4,11]
    }]
  };

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ZingChart data={config}/>
      </header>
    </div>
  );
}

export default App;
