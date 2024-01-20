function setStore() { // Erweitert von: file:///home/petra/Documents/form-intro/session-storage.html
  event.preventDefault();
  // alle daten in variablen speichern
  let anrede = document.getElementById("anr").value;
  let vorname = document.getElementById("vname").value;
  let nachname = document.getElementById("nname").value;
  let geburtsdatum = document.getElementById("geb").value;
  let strasse = document.getElementById("str").value;
  let plz = document.getElementById("plz").value;
  let ort = document.getElementById("ort").value;
  let email = document.getElementById("email").value;
  let telefonG = document.getElementById("phoneG").value; // String!
  let telefonP = document.getElementById("phoneP").value; // String!
  let agb = document.getElementById("agb").checked;
  let newsletter = document.getElementById("nLetterJa").checked;
  let bemerkung = document.getElementById("bem").value;
  // DEVS
  console.log(vorname);
  console.log(nachname);
  console.log(geburtsdatum);
  console.log(strasse);
  console.log(plz);
  console.log(ort);
  console.log(email);
  console.log(telefonG);
  console.log(telefonP);
  console.log(agb);
  console.log(newsletter);
  console.log(bemerkung);
  
  // prüfen ob NICHT gesetzt
  // if (!telefonP || !telefonP || !agb) 
  if (!vorname || !nachname || !geburtsdatum || !strasse || !plz || !ort || !email || !agb) 
  {
    // dann error ausgeben
    document.getElementById("error").innerText = "Bitte alles ausfüllen!";
  } else {
    // sonst speichern
    sessionStorage.setItem('vorname', vorname);
    sessionStorage.setItem('nachname', nachname);
    sessionStorage.setItem('geburtsdatum', geburtsdatum);
    sessionStorage.setItem('strasse', strasse);
    sessionStorage.setItem('plz', plz);
    sessionStorage.setItem('ort', ort);
    sessionStorage.setItem('email', email);
    sessionStorage.setItem('agb', agb);

  // jetzt senden
    document.getElementById('myForm').submit();
  }
}
