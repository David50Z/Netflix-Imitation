const show = (props) => {

    const posterName = props.posterName
    const posterImage = props.posterImage
    const posterGenre = props.posterGenre
    const posterSummary = props.posterSummary

    return(
        <div>
            <img className="poster" /*style={{'width': '200px', 'textAlign': 'center'}}*/ src={posterImage} />
            <h1>{posterName}</h1>
            <h2>{posterGenre}</h2>
            <p>{posterSummary}</p>
        </div>
    )
}

export default show