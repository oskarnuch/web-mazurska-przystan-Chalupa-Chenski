import './App.css'

function App() {


  return (
    <>
        <div>
            <h1>Przystań Mazurska</h1>
        <form style={{display: "flex", flexDirection: "column", justifyContent:"center"}}>

            <label>Podaj swoje imię: <input type="text" /*value={imie} onChange={handleName}*//></label><br/>
            <label>Wybierz, co chcesz wypożyczyć:<br/>
                <select /*value={sprzet} onChange={handleSprzet}*/>
                <option value="kajak">Kajak (20zł/h)</option>
                <option value="rower">Rower wodny (35zł/h)</option>
                <option value="omega">Omega (150zł/h)  !WYMAGAMY PATENTU!</option>
                </select>
            </label><br/>
            <label>Na ile godzin chcesz wynająć sprzęt?<br/>
                <input type="range"
                       min={1}
                       max={8}
                       step={1}
                       /*value={godziny} onChange={handleHours}*/
                /> godzin...</label><br/>
            <label><input type="checkbox" /*checked={kapok} onChange={handleKapok}*//>Chcę kapok dla dziecka (5zł)</label><br/>
            <label><input type="checkbox" /*checked={instruktor} onChange={handleInstruktor} *//>Chcę pływać z instruktorem (50zł/h)</label><br/>
            <label>Płacę <select /*value={platnosc} onChange={handlePlatnosc}*/>
                <option value="karta">kartą</option>
                <option value="BLIK">BLIK-iem</option>
            </select></label><br/>
            <label><input type="checkbox" /*checked={regulamin} onChange={handleRegulamin}*//>Akceptuję regulamin przystani</label>
            <button>Zarezerwuj</button>
        </form>
            <h2>Podsumowanie:</h2>
        </div>
    </>
  )
}

export default App
