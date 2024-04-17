import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [nev, setNev] = useState("");
    const [pontszam, setPontszam] = useState("");
    const [lista, setLista] = useState([]);
    const [hiba, setHiba] = useState({nev: '', pontszam: ''});

    const hozzaadasKezeles = () => {
        let ervenyes = ellenorzes();
        if (ervenyes) {
            setLista([...lista, {nev, pontszam}]);
            setNev("");
            setPontszam("");
            setHiba({nev: '', pontszam: ''});
        }
    };

    const ellenorzes = () => {
        let nevHiba = '';
        let pontszamHiba = '';

        if (nev.length < 3) {
            nevHiba = 'A név nem lehet 3 karakternél rövidebb!';
        }

        if (pontszam < 1 || pontszam > 100) {
            pontszamHiba = 'A pont 0 és 100 közötti szám lehet!';
        }
        if (nevHiba || pontszamHiba) {
            setHiba({nev: nevHiba, pontszam: pontszamHiba});
            return false;
        }

        return true;
    };

    return (
        <div className="container d-flex flex-column">
            <h1 className="mb-3">Vizsga</h1>
            <div className="mb-3">
                <label className="form-label">Név:</label>
                <input
                    type="text"
                    className="form-control"
                    value={nev}
                    onChange={(e) => setNev(e.target.value)}
                />
                {hiba.nev && <div className="alert alert-danger mt-2">{hiba.nev}</div>}
            </div>
            <div className="mb-3">
                <label className="form-label">Pontszám:</label>
                <input
                    type="number"
                    className="form-control"
                    value={pontszam}
                    onChange={(e) => setPontszam(e.target.value)}
                />
                {hiba.pontszam && (
                    <div className="alert alert-danger mt-2">{hiba.pontszam}</div>
                )}
            </div>
            <div>
                <button
                    className="btn btn-primary mb-3"
                    onClick={hozzaadasKezeles}
                >
                    Hozzáadás
                </button>
            </div>
            <ul>
                {lista.map((bejegyzes, index) => (
                    <li key={index} className={bejegyzes.pontszam <= 50 ? "text-danger" : ""}>
                        {bejegyzes.nev}: {bejegyzes.pontszam}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;