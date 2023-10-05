import "./CartWidget.css";
import { FaShoppingCart } from 'react-icons/fa';
function CartWidget () {
    return (
        <div>
                <FaShoppingCart/>
                <label className="cartNumber">1</label>
        </div>
    )
}

export default CartWidget;