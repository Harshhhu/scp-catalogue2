import{items} from './data.js';
function Details(props)
{
    // get the product id from props
    const {Item} =props;
 
    // find the product that match product id
    const item = items.find(p => p.Item === Item);
return(
    <div>
        <h2>{item.Item}</h2>
        <h3>Object Class :{item.ObjectClass}</h3>
        <p>{item.description}</p>
        <p><img src={item.image} ait={item.Item}/></p>
       
    </div>
)
}
export default Details;