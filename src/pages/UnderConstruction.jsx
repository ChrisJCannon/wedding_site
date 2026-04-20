

export function UnderConstruction({ setTab }) {
    const phrase = "PopcornKingdom"

    function handleInput(event) {
        if (event.target.value === phrase) {
            setTab("Home")
        }
    }

    return (
        <div style={{ display: "column", alignItems: "center", justifyItems: "center" }}>
            <h1>Site is under construction, check back soon!</h1>
            <form>
                <input onChange={handleInput}></input>
            </form>
        </div>
    )
}