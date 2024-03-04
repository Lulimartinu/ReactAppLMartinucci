import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function CartWidget() {

  return (
    <>
    
      <div>
        <FontAwesomeIcon icon={faCartShopping} />( 2 )
      </div>
    </>
  );
}
