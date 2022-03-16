import data from "./data";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="topHeader">Ecomm-Product</div>
      </header>
      <main>
        <h1>Featured Product</h1>
        <div className="products">
        {
          data.products.map(product =>(
          <div className="product" key={product.slug}>
            <img src={product.image} alt={product.name} />
            <p>
              {product.name}              
            </p>
            <p>
            {product.price}
            </p>
            <Button>Click Here</Button>

          </div>))
        }
        </div>
      </main>
    </div>
  );
}

export default App;
