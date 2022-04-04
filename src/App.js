import './App.css';
import ProductCard from './components/ProductCard/ProductCard';

const listaProductos = [{
  id: 1,
  nombre: "Palmera",
  peso: 425,
  precio: 1.75,
  imagen: "https://prod-mercadona.imgix.net/images/5e949a6f64b52be230b8f1084156dcd9.jpg?fit=crop&h=300&w=300",
},
{
  id: 2,
  nombre: "Galleta",
  peso: 400,
  precio: 2.00,
  imagen: "https://prod-mercadona.imgix.net/images/5e949a6f64b52be230b8f1084156dcd9.jpg?fit=crop&h=300&w=300",
},
{
  id: 3,
  nombre: "Sal",
  peso: 200,
  precio: 0.50,
  imagen: "https://prod-mercadona.imgix.net/images/5e949a6f64b52be230b8f1084156dcd9.jpg?fit=crop&h=300&w=300",
}];

function App() {
  const lista = listaProductos.map((producto) => {
    return(
      <ProductCard key = {producto.id} producto = {producto}/>
    )
  });
  return(
    <div className="App"> {lista} </div>
  );
  
}

export default App;
