import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function CartWidget() {
  return (
    <>
      <div>
        <FontAwesomeIcon icon={faCartShopping} />( 2 )
      </div>
    </>
  );
}
