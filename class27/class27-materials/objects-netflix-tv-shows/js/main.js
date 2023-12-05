//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods
class NetflixTvShow{
    constructor(showName, showGenre, showSeaons, showEpisodeLength){
        this.showName = showName
        this.showGenre = showGenre
        this.showSeasons = showSeasons
        this.showEpisodeLength = showEpisodeLength
        rating(){
            alert(`TRASH`)
        }
        nextEpisode(){
            alert(`NO THANKS`)
        }
        previousEpisode(){
            alert(`IT'S EPISODE ONE`)
        }
    }
}