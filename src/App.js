import './App.css';

function App({ items }) {
  return (
    <div className="App">
      {items.map(fred => (
        <div className="menu-item">
          <h1>{fred.title}</h1>
          <p>{fred.price}</p>
          <p>{fred.description}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
