const Countris =({countryInfo})=>{
    const { name, flags, capital, subregion,region,population,area,currencies,languages,borders ,timezones, car , tld, maps, startOfWeek, coatOfArms,} = countryInfo
    const CurrencyName = Object.values(currencies)[0]
    const LanguageName = Object.values(languages)[0]
    const TimeName = timezones.join("  ")
    return (<div className="innerDiv">
        <h1 className="flexy" >{name.common}</h1>
        <div className="border1">
        <img src={flags.png} className="border pic"></img></div>
        <div className="flexy "><div className="shrift">Official Name : </div> {name.official}</div>
        <div className="flexy "><div className="shrift">Capital : </div> {capital}</div>
        <div className="flexy "><div className="shrift">Region : </div> {region}, {subregion}</div>
        <div className="flexy "><div className="shrift">Population : </div> {population}</div>
        <div className="flexy "><div className="shrift">Area : </div> {area} km2</div>
        <div className="flexy "><span className="shrift">Currency : </span> {CurrencyName.name} "{CurrencyName.symbol}"</div>
        <div className="flexy "><div className="shrift">Language : </div> {LanguageName}</div>
        {borders == undefined ?  null : (<div className="flexy "><div className="shrift">Borders : </div> {borders.join(" ")} </div>   ) }
        
        
        <div className="flexy "><div className="shrift">Timezones : </div> {TimeName}</div>
        <div className="flexy "><div className="shrift">Driving Side : </div> {car.side.charAt(0).toUpperCase() + car.side.slice(1)}</div>
        <div className="flexy "><div className="shrift">Top Level Domain : </div> {tld}</div>
        <div className="flexy "><div className="shrift">Start of the week : </div> {startOfWeek.charAt(0).toUpperCase() + startOfWeek.slice(1)}</div>
        <h1 className="flexy">Maps</h1>
      <a href={maps.googleMaps} className="doorLine">View in google maps</a>
      <a href={maps.openStreetMaps} className="doorLine">View in street maps</a>
      <h1 className="flexy">Coat of arms</h1>
      <div className="border11">
      <img src={coatOfArms.png} className="ArmsPic border"></img>
      </div>
    </div>)
}
export default Countris;