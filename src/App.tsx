import { useState } from 'react'
import './App.css'

type Sprzet = 'kajak' | 'rower' | 'omega'

function App() {

    const [imie, setImie] = useState<string>('');
    const [sprzet, setSprzet] = useState<Sprzet>('kajak');
    const [godziny, setGodziny] = useState<number>(1);
    const [kapok, setKapok] = useState<boolean>(false);
    const [instruktor, setInstruktor] = useState<boolean>(false);
    const [platnosc, setPlatnosc] = useState<'Karta' | 'blik'>('blik');
    const [regulamin, setRegulamin] = useState<boolean>(true);

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
    }


}

export default App
