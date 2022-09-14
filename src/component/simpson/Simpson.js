export default function Simpson(props) {

    let {item} = props;

    return(
        <div>
            <h1>{item.name}</h1>
            <img src={item.photo} alt=""/>
            <p>{item.description}</p>
        </div>
    );

}