import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCartShopping } from "@fortawesome/free-solid-svg-icons";


{/*falta stock, initial, onAdd */}

export default function ItemCount() {
    const [cont, setCont] = useState(0);
    const clicksRef = useRef(0);



  const estilos = {
    margin: " 10px",
    gap: "50px",
    display: "flex",
  };

  {
    /* sumar cosas al carrito */
  }
  const handleIncrementar = () => {
    setCont(cont + 1);
    clicksRef.current++;
    console.log("contador de clicks: " + clicksRef.current);
  };

  {
    /* restar cosas del carrito */
  }
  const handleDecrementar = () => {
    setCont(cont - 1);
    clicksRef.current++;
    console.log("contador de clicks: " + clicksRef.current);
  };

  return (
    <>
      <section style={estilos}>
        <button onClick={handleDecrementar}> - </button>
        <p>
          {" "}
          <FontAwesomeIcon icon={faCartShopping} /> {cont}{" "}
        </p>

        <button onClick={handleIncrementar}>+</button>
      </section>
   
    </>
  );
}
