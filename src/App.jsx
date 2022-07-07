import { useState } from 'react';
import './App.css';

import Rating from './components/Rating';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App vh-100 center bgcolor-neutral-900">
      <Rating />
    </div>
  );
}

export default App;
