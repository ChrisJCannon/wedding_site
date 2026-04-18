
export function NavBar({ tabs }) {

    return (
        <>
        <img src={""} alt="" />
        <div style={{ margin: "25px 0px 0px 0px", justifyContent: "space-between", display: "flex", width: "50%", alignSelf: "end" }}>
            {tabs.map((tab) => {
                return (<button>{tab}</button>)
            })}
        </div>
        </>
    )
}