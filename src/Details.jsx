import { useState, useEffect } from 'react';

function Details(props) {
    const { Item } = props;
    const [item, setItem] = useState(null);

    useEffect(() => {
        fetch("/data.json")
            .then((response) => response.json())
            .then((data) => {
                const foundItem = data.find((p) => p.Item === Item);
                setItem(foundItem);
            });
    }, [Item]);

    if (!item) return <div>Loading...</div>;

    return (
        <div>
            <h2>{item.Item}</h2>
            <h3>Object Class: {item.ObjectClass}</h3>
            <p>{item.description}</p>
            <p><img src={`/images/${item.image}`} alt={item.Item} /></p>
        </div>
    );
}

export default Details;