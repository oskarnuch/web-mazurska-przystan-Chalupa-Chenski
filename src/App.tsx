import {type ChangeEvent, useState} from 'react'
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
            <input value={imie} onChange={handleName} />
            <select value={sprzet} onChange={handleSprzet}>...</select>
            <input type="range" value={godziny} onChange={handleHours} />
            <input type="checkbox" checked={kapok} onChange={handleKapok} />
            <input type="checkbox" checked={instruktor} onChange={handleInstruktor} />
            <select value={platnosc} onChange={handlePlatnosc}>...</select>
            <input type="checkbox" checked={regulamin} onChange={handleRegulamin} />

            Wynik: {calculateTotal()} zł
            Przycisk: <button disabled={!isFormValid}>Rezerwuję</button>
        </>
    );
}

export default App
