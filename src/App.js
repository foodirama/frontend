import { useState } from 'react'
import './App.css';

function App({ items }) {
  const [detail, setDetail] = useState()

  return (
    <div className="App">
      {items.map(fred => (
        <div className="menu-item">
          <h1 onClick={() => setDetail(fred.origin)}>{fred.title}</h1>
          <p>{fred.price}</p>
          <p>{fred.description}</p>
        </div>
      ))}
      <p>{detail}</p>
    </div>
  );
}

export default App;
