import { Link } from "react-router-dom";
import { items } from "./data.js";
 
function Navmenu()
{
return(
    <nav className="navmenu">
        <ul>
            {
                items.map(
                    item =>(
                        <li key={item.Item}>
                            <Link to={`/item/${item.Item}`}>{item.Item}
                            </Link>
                        </li>
                    )
                )
 
            }
        </ul>
    </nav>
)
}
export default Navmenu;