
import './NavBar.css';

export function NavBar({ tabs }) {

    return (
        <>
        <img src={""} alt="" />
        <div className="navbar-container">
            {tabs.map((tab) => {
                return (<button className="navbar-button">{tab}</button>)
            })}
        </div>
        </>
    )
}