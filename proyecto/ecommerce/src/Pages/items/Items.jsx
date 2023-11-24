import { useEffect, useState } from "react";
import './Items.scss';

export default function Items() {

  const [items, setItems] = useState([])

  useEffect(() =>{
    fetch('https://api-pelis-back.onrender.com/celulares')
    .then(res => res.json())
    .then(data => setItems(data.celulares))
  }, [])
  return (
    <section className="items-container">
    <div className="items">
        {items.map(item => (
            <div key={item.title} className="item">
                <h3>{item.title}</h3>
                <p>{item.price}</p>
                <img src={item.image} />
            </div>
        ))
}
    </div>
</section>
  )
}
