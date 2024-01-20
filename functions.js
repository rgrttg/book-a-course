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
  let telefonG = document.getElementById("telG").value;
  let telefonP = document.getElementById("telP").value;
  let agb = document.getElementById("agb").value;
  let newsletter = document.getElementById("nLetterJa").value;
  let bemerkung = document.getElementById("bem").value;
  // prüfen ob NICHT gesetzt
  // if (!vorname) {
  // dann error ausgeben

  // } else {
  // sonst speichern

  // jetzt senden
    document.getElementById('myForm').submit();
  // }
}