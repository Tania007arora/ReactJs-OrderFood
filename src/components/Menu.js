import "../menu.css"
export default function Menu(){
    return(
        <div>
            <nav className="nav flex-column">
                <div className="navItem">
                <a className="nav-link " aria-current="page" href="/orderfood">Menu</a>
                </div>
            </nav>
        </div>
    )
}