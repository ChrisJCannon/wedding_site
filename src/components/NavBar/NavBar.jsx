import logoImg from '../..//assets/hero.png'
export function NavBar({ tabs, setTab }) {

    return (
        <>
            <img src={logoImg} width="50" height="50" />
            <div style={{ margin: "25px 0px 0px 0px", justifyContent: "space-between", display: "flex", width: "50%", alignSelf: "end" }}>
                {tabs.map((tab) =>
                    <button
                        onClick={() => {
                            setTab(tab);
                            console.log(tab);
                        }}
                        key={tab}>
                        {tab}
                    </button>
                )}
            </div>
        </>
    )
}