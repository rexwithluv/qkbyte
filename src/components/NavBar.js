import Link from "next/link";

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" href="#">QKByte</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" href="#">Hardware</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="#">Periféricos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="#">Software</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="#">PCs montados</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}