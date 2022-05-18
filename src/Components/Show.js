const show = (props) => {

    const posterName = props.posterName
    const posterImage = props.posterImage
    const posterGenre = props.posterGenre

    return(
        <div>
            <img src={posterImage} />
            <h1>{posterName}</h1>
            <h2>{posterGenre}</h2>
        </div>
    )
}

export default show