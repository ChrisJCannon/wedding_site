import './NavBar.css';
import logoImg from '../../assets/hero.png'
export function NavBar({ tabs, setTab }) {

    return (
        <div className='navbar-container'>
            <img src={logoImg} id='logo'  />
            <div className='navbar-tabs'>
                {tabs.map((tab) =>
                    <button
                        onClick={() => {
                            setTab(tab);
                        }}
                        className='navbar-button'
                        key={tab}>
                        {tab}
                    </button>
                )}
            </div>
        </div>
    )
}