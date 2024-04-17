import React from 'react'
import { Link } from 'react-router-dom'
import kép1 from '../kepek/1_bokkhegy.jpg';
import kép2 from '../kepek/2_cserehegy.jpg';
import kép3 from '../kepek/3_somlyohegy.jpg';
import kép4 from '../kepek/4_kisfaludy.jpg';
import kép5 from '../kepek/5_folly.jpg';
import kép6 from '../kepek/6_ovari.jpg';

export default function Kepek() {
    return(
        <>
        <nav className='nav bg-dark justify-content-center'>
                <Link className='nav-link link-light' to='/'>Kezdőlap</Link>
                <Link className='nav-link link-light' to='/kilatok'>Kilátók</Link>
                <Link className='nav-link link-light' to='/kepek'>Képek</Link>
        </nav>
        <div className="container">
      <div className="row">
        <div className="col-md-6 mb-3">
          <img src={kép1} className="img-fluid" alt="Kép 1" />
        </div>
        <div className="col-md-6 mb-3">
          <img src={kép2} className="img-fluid" alt="Kép 2" />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 mb-3">
          <img src={kép3} className="img-fluid" alt="Kép 3" />
        </div>
        <div className="col-md-6 mb-3">
          <img src={kép4} className="img-fluid" alt="Kép 4" />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 mb-3">
          <img src={kép5} className="img-fluid" alt="Kép 5" />
        </div>
        <div className="col-md-6 mb-3">
          <img src={kép6} className="img-fluid" alt="Kép 6" />
        </div>
      </div>
    </div>
        </>
    )
}