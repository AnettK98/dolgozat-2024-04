import { Link } from 'react-router-dom'

export default function Kilatok() {
    return(
        <>
            <nav className='nav bg-dark justify-content-center'>
                <Link className='nav-link link-light' to='/'>Kezdőlap</Link>
                <Link className='nav-link link-light' to='/kilatok'>Kilátók</Link>
                <Link className='nav-link link-light' to='/kepek'>Képek</Link>
            </nav>
            <div className='container'>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>Város</th>
                            <th>Kilátó</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Alsóörs</td>
                            <td>Csere-hegyi kilátó</td>
                        </tr>
                        <tr>
                            <td>Alsóörs</td>
                            <td>Somlyó-hegyi kilátó</td>
                        </tr>
                        <tr>
                            <td>Ábrahámyhegy</td>
                            <td>Bökk-hegyi kilátó</td>
                        </tr>
                        <tr>
                            <td>Badacsony</td>
                            <td>Kisfaludy kilátó</td>
                        </tr>
                        <tr>
                            <td>Badacsonyörs</td>
                            <td>Folly arborétum kilátója</td>
                        </tr>
                        <tr>
                            <td>Balatonalmádi</td>
                            <td>Óvári messzelátó</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </>
    )
}