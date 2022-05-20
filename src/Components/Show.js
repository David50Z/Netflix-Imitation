const show = (props) => {

    const posterName = props.posterName
    const posterImage = props.posterImage
    const posterGenre = props.posterGenre
    const posterSummary = props.posterSummary

    const setWatchLaterList = props.setWatchLaterList
    const watchLaterList = props.watchLaterList

    function add() {
        let truthy = true
        for(let i = 0; i < watchLaterList.length; i++){
            if(watchLaterList[i] === (props.PosterImage)) {
                console.log('sucks to suck')
                truthy = false
            }

        } if(truthy === true){
        let list = watchLaterList;
        list.splice(0, 0, props.posterImage)
        setWatchLaterList(list)
        }
    }


    return(
        <div>
            <img className="poster" src={posterImage} />
            <h1>{posterName}</h1>
            <h2>{posterGenre}</h2>
            <p>{posterSummary}</p>
            <button onClick={add}>Watcher later</button>
        </div>
    )
}

export default show