import './Info.css';

function Info(props)
{
    return(

        <div className="info">
            <ol>
               <li>Name: {props.name}</li> 
               <li>Age:{props.age} </li> 
               <li> City:{props.city} </li> 
             </ol>
             <h3> {props.children} </h3>
        </div>

    );
}
export default Info;