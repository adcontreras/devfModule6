import { useEffect, useState } from "react";
import { getItems } from "../../services/itemServices";
import { Link } from 'react-router-dom';
import "./Items.scss";

export default function Items() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => { //con useEffect estamos llamando a la Api y con la constante de abajo le estamos diciendo que hacer cuando aparezca la API y SOLO se ejecutará una vez 
    const getData = async () => {
      try {
        const response = await getItems();
        setItems(response.data);
        setLoading(false);
      } catch (error) {
        console.log("el error se produjo por ", error);
      }
    };
    getData();
  }, []);

  if (loading) {  // mientras se carga la API mostraremos un loading, puede ponerse un simbolo de cargar 
    return <h1>Loading...</h1>;
  } else {
    return (
    <section className="items-container">
      <div className="items">
        {items.map((item) => (
         <Link to={`/item/${item.id}`} key={item.id}>
          <div  className="item">
            <img src={item.image} />
            <h3>{item.product_name}</h3>
            <p>{item.price}</p>
          </div>
         </Link>
        ))}
      </div>
    </section>
    )
  }
}
