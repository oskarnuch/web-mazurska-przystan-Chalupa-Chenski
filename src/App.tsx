import {type ChangeEvent, type SyntheticEvent, useState} from 'react'
import './App.css'

type Sprzet = 'kajak' | 'rower' | 'omega'

function App() {

    //usestate
    const [imie, setImie] = useState<string>('');
    const [sprzet, setSprzet] = useState<Sprzet>('kajak');
    const [godziny, setGodziny] = useState<number>(1);
    const [kapok, setKapok] = useState<boolean>(false);
    const [instruktor, setInstruktor] = useState<boolean>(false);
    const [platnosc, setPlatnosc] = useState<'Karta' | 'blik'>('blik');
    const [regulamin, setRegulamin] = useState<boolean>(true);
    const [finalnaCena, setFinalnaCena] = useState<number>(0);

    //handlery
    const handleName =
        (e: ChangeEvent<HTMLInputElement>) => setImie(e.target.value);
    const handleSprzet =
        (e: ChangeEvent<HTMLSelectElement>) => setSprzet(e.target.value as Sprzet);
    const handleHours =
        (e: ChangeEvent<HTMLInputElement>) => setGodziny(Number(e.target.value));
    const handleKapok =
        (e: ChangeEvent<HTMLInputElement>) => setKapok(e.target.checked);
    const handleInstruktor =
        (e: ChangeEvent<HTMLInputElement>) => setInstruktor(e.target.checked);
    const handlePlatnosc =
        (e: ChangeEvent<HTMLSelectElement>) => setPlatnosc(e.target.value as 'Karta' | 'blik');
    const handleRegulamin =
        (e: ChangeEvent<HTMLInputElement>) => setRegulamin(e.target.checked);

    const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        const wynik = calculateTotal();
        setFinalnaCena(wynik);
    };

    //funkcja
    const calculateTotal = (): number => {
        const ceny = {
            kajak: 20,
            rower: 35,
            omega: 150
        };
        let suma = ceny[sprzet] * godziny;
        if (instruktor) suma += 50 * godziny;
        if (kapok) suma += 5;
        return suma;
    };

    const isFormValid = imie.length > 0 && regulamin;

    //html
    return (
        <>
            <div>
                <span id="offer" style={{flex: 3}}>
            <h2>Nasza oferta:</h2>
                <h3>Sprzęt pływający</h3>
            <ul>
                <li>Kajaki - 20zł/h</li>
                <li>Rowerki wodne - 35zł/h</li>
                <li>Omega 150zł/h <br/><b>!WYMAGANY PATENT!</b></li>
            </ul>
                <h3>Dodatki</h3>
                <ul>
                    <li>Kapok dziecięcy - 5zł</li>
                    <li>Instruktor - 50zł/h</li>
                </ul>
        </span>
                <span id="forms" style={{flex: 5}}>
                <h2>Wypełnij formularz rezerwacyjny:</h2>
            <form style={{display: "flex", flexDirection: "column", justifyContent:"center"}}
                  onSubmit={handleSubmit}>

                <label>Podaj swoje imię: <input type="text" value={imie} onChange={handleName}/></label><br/>
                <label>Wybierz, co chcesz wypożyczyć: <select value={sprzet} onChange={handleSprzet}>
                        <option value="kajak">Kajak</option>
                        <option value="rower">Rower wodny</option>
                        <option value="omega">Omega</option>
                    </select>
                    {sprzet=="omega"&& <h4>!WYMAGANY PATENT!</h4>}
                </label><br/>
                <label>Na ile godzin chcesz wynająć sprzęt?<br/>
                    <input type="range"
                           min={1}
                           max={8}
                           step={1}
                           value={godziny} onChange={handleHours}
                    />{godziny} h</label><br/>
                <label><input type="checkbox" checked={kapok} onChange={handleKapok}/>Chcę kapok dla dziecka</label><br/>
                <label><input type="checkbox" checked={instruktor} onChange={handleInstruktor}/>Chcę pływać z instruktorem</label><br/>
                <label>Płacę <select value={platnosc} onChange={handlePlatnosc}>
                    <option value="karta">kartą</option>
                    <option value="BLIK">BLIK-iem</option>
                </select></label><br/>
                <label><input type="checkbox" checked={regulamin} onChange={handleRegulamin}/>Akceptuję regulamin przystani</label>
                <button type="submit" disabled={!isFormValid}>Zarezerwuj</button>
            </form>
            <h2>Podsumowanie:</h2>
            <p>Cena końcowa: <strong>{finalnaCena} zł</strong></p>
        </span>
            </div>

        </>
    );
}

export default App