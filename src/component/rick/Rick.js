export default function Rick(props) {

    let {item} = props;

    return(
        <div>
            <h1>{item.result.name}</h1>
            {/* помилку дає це не обєкt*/}
        </div>
    )
}