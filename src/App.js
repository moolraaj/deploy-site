import React, { useState, useEffect } from "react";
import './App.css';
import New from './New';

function App() {


  const [fakeStore, setFakeStore] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setFakeStore(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
     <>
     <h1>hello  im raaj im full stack developer im also MERN stack developer</h1>
     <h1>hello im react js developer since 6 years..</h1>
     <h1>this is react js file</h1>
     <h2>this is react js file</h2>
     <h2>this is third heading</h2>
     <h1>this is react js creteated by rakesh kumar</h1>
     <h2>Hello raaj sir kyaa haal hai </h2>
     <button type='button'>submit</button>
     <New/>

     <div className="Fake-Store">
      <h1>Fake Store Products</h1>
      <ul className="product-list">
        {fakeStore.map(product => (
          <li key={product.id} className="product-item">
            <img src={product.image} alt="prodImg" className="product-image" />
            <div className="product-details">
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
            </div>
          </li>
        ))}
      </ul>
      </div>


     
     </>
     
  );
}

export default App;
