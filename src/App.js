import { useRef, useState } from 'react';
import togpx from 'togpx';
import './App.css';

function App() {
  const ref = useRef();
  const [converted, setConverted] = useState('');

  const convert = () => {
    setConverted(togpx(JSON.parse(ref.current.value)));
  };

  return (
    <div className="App">
      <p>
        Geojson <button onClick={convert}>Convert</button>
      </p>
      <textarea ref={ref} defaultValue="" />
      <p>
        Gpx
      </p>
      <textarea value={converted} readOnly />
    </div>
  );
}

export default App;
