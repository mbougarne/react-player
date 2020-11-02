import Search from './search/Search'
import '../styles/Header.css'

export default function Header()
{
    return (
        <div className="Header">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Search />
                    </div>
                </div>
            </div>
        </div>
    )
}