const show = (props) => {

    const posterName = props.posterName
    const posterImage = props.posterImage
    const posterGenre = props.posterGenre
    const posterSummary = props.posterSummary

    const setWatchLaterList = props.setWatchLaterList
    const watchLaterList = props.watchLaterList

    console.log(posterSummary)

    let editedPosterSummary = posterSummary.split("")

    editedPosterSummary.shift()
    editedPosterSummary.shift()
    editedPosterSummary.shift()

    editedPosterSummary.pop()
    editedPosterSummary.pop()
    editedPosterSummary.pop()
    editedPosterSummary.pop()

    let posterSummaryProduct = editedPosterSummary.join("")

    function add() {
        let truthy = true
        for(let i = 0; i < watchLaterList.length; i++){
            console.log(watchLaterList[i].posterImage)
            console.log(props.PosterImage)
            if(watchLaterList[i].posterImage === (props.posterImage)) {
                console.log('sucks to suck')
                truthy = false
                window.alert('You already have this set to watch later!')
            }

        } if(truthy === true){
        let list = watchLaterList;
        list.splice(0, 0, {
            posterName: props.posterName,
            posterImage: props.posterImage,
            posterGenre: props.posterGenre,
            posterSummary: props.posterSummary
        })
        setWatchLaterList(list)
        }
    }


    return(
        <div>
            <img className="poster" src={posterImage} />
            <h1 className="posterStuff">{posterName}</h1>
            <h2 className="posterStuff">{posterGenre}</h2>
            <p>{posterSummaryProduct}</p>
            <button onClick={add}>Watcher later</button>
        </div>
    )
}

export default show