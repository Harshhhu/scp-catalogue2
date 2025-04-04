import { Link } from "react-router-dom";

import { useState, useEffect } from "react";

function Navmenu() {

    const [items, setItems] = useState([]);

    useEffect(() => {

        fetch("/data.json")

            .then((response) => response.json())

            .then((data) => setItems(data));

            }, []);

    return (
        <nav className="navmenu">
            <ul>

                {items.map((item) => (
                    <li key={item.Item}>
                        <Link to={`/item/${item.Item}`}>{item.Item}</Link>
                    </li>

                ))}
            </ul>
        </nav>

    );

}

export default Navmenu;

