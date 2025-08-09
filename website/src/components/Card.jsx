/*i took out the import of the profilePic because i was giving me an error and I wasnt using it at the moment
Ill come back later to fix it*/

function Card(){
    return(
        <div className = "card">
            <img className= "card-img" src = {profilePic} alt = "project image"></img>
            <h2 className = "card-title">Kourtney</h2>
            <p>Web Developer</p>
        </div>
    )
} 
export default Card;