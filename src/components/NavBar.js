import Link from "next/link";

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand text-white" href="#">QKByte</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link text-white" href="#">Hardware y periféricos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" href="#">Software</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" href="#">PCs montados</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/contacto" className="text-white">Contacto</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}