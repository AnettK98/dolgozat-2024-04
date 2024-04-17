import { Link } from 'react-router-dom'

export default function Kezdolap() {
    return (
        <>
        
            <nav className='nav bg-dark justify-content-center'>
                <Link className='nav-link link-light' to='/'>Kezdőlap</Link>
                <Link className='nav-link link-light' to='/kilatok'>Kilátók</Link>
                <Link className='nav-link link-light' to='/kepek'>Képek</Link>
            </nav>
            <div>
                <p>A Balaton környékén az utóbbi időben gombamódra szaporodnak az épített balatoni kilátók, amelyeket ha megmászunk, csodás kilátás nyílik a tóra és a part menti térségre.
                </p>
                <br />
                <p>A kilátók többsége csak gyalog közelíthető meg, de szinte mindegyikhez feltolhatjuk a bringánkat.
                </p>
                <br />
                <p>Ezeken túl természetesen rengeteg olyan hely is található, mely kilátó nélkül is nagyszerű panorámát kínál.
                </p>
            </div>
        </>
    )
}