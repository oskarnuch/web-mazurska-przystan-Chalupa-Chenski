import './App.css'

function App() {


  return (
    <>
        <form>
            <label>Podaj swoje imię: <input type="text" /*value={imie}*//></label><br/>
            <label>Wybierz, co chcesz wypożyczyć:<br/>
                <input type="radio" value="kajak"/>Kajak (20zł/h)<br/>
                <input type="radio" value="rower"/>Rower wodny (35zł/h)<br/>
                <input type="radio" value="omega"/>Omega (150zł/h)  !WYMAGAMY PATENTU!<br/>
            </label>
            <label>Na ile godzin chcesz wynająć sprzęt?<br/>
                <div style={{display: "flex", alignItems: "center", gap: "10px"}}>
                <input type="range"
                       min={1}
                       max={8}
                       step={1}
                       /*value={hours}*/
                /><span style={{fontFamily: "Arial", fontStyle:"oblique"}}>godzin...</span>
                </div></label><br/>
            <label><input type="checkbox"/>Chcę kapok dla dziecka (5zł)</label><br/>
            <label><input type="checkbox"/>Chcę pływać z instruktorem (50zł/h)</label><br/>
            <label>Płacę <select>
                <option value="card">kartą</option>
                <option value="BLIK">BLIK-iem</option>
            </select></label><br/>
            <label><input type="checkbox"/>Akceptuję regulamin przystani</label>
        </form>
    </>
  )
}

export default App
