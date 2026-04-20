import Popcorn from "../assets/PopcornStamp.png"

export function UnderConstruction({ setTab }) {
    const phrase = "Popcorn"

    function handleInput(event) {
        if (event.target.value === phrase) {
            setTab("Home")
        }
    }

    return (
        <div style={{ display: "column", alignItems: "center", justifyItems: "center" }}>
            <h1 style={{lineHeight: "2rem"}}>Site is under construction, check back soon!</h1>
            <img src={Popcorn} height={500}></img>
            <form>
                <input onChange={handleInput}></input>
            </form>
            
        </div>
    )
}