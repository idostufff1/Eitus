// Autor: meeskond (Eitus)
// Siin on kõik mängud ja nende tutvustused.
// Võti on sama mis HTMLs onclick sees.
var mangud = {
  gta1: { nimi: "Grand Theft Auto", aasta: 1997, tekst: "Esimene GTA. Vaade on ülevalt alla ja mängija varastab autosid ning teeb tööd kurjategijatele kolmes linnas." },
  london: { nimi: "GTA London 1969", aasta: 1999, tekst: "Lisapakett esimesele mängule. Tegevus on Londonis aastal 1969." },
  gta2: { nimi: "Grand Theft Auto 2", aasta: 1999, tekst: "Jätk esimesele osale. Vaade on ikka ülevalt ja tegevus käib tulevikulinnas, kus tegutsevad erinevad jõugud." },
  gta3: { nimi: "Grand Theft Auto III", aasta: 2001, tekst: "Esimene GTA, mis on täielikult 3D. Tegevus on Liberty Citys ja mängija on peategelane, kes ei räägi." },
  vc: { nimi: "Vice City", aasta: 2002, tekst: "Tegevus on 1980. aastate Miamist inspireeritud linnas. Peategelane on Tommy Vercetti." },
  sa: { nimi: "San Andreas", aasta: 2004, tekst: "Peategelane on Carl Johnson. Mängus on kolm linna ja nende vahel maastik. Seda mängu mäletavad paljud." },
  advance: { nimi: "Advance", aasta: 2004, tekst: "Mäng Game Boy Advance'ile. Tegevus on Liberty Citys ja vaade on ülevalt." },
  lcs: { nimi: "Liberty City Stories", aasta: 2005, tekst: "Tegevus on Liberty Citys, mis oli juba kolmandast osast tuttav. Tuli esmalt PSP-le." },
  vcs: { nimi: "Vice City Stories", aasta: 2006, tekst: "Tegevus on Vice Citys aastal 1984. Peategelane on Victor Vance." },
  gta4: { nimi: "Grand Theft Auto IV", aasta: 2008, tekst: "Peategelane on Niko Bellic, kes tuleb Liberty Citysse. Mäng on tõsisem kui vanemad osad." },
  cw: { nimi: "Chinatown Wars", aasta: 2009, tekst: "Mäng Nintendo DS-ile, hiljem ka teistele seadmetele. Vaade on ülevalt ja peategelane on Huang Lee." },
  gta5: { nimi: "Grand Theft Auto V", aasta: 2013, tekst: "Mängus on kolm peategelast: Michael, Franklin ja Trevor. Tegevus on Los Santoses. Mängu on müüdud väga palju." },
  gta6: { nimi: "Grand Theft Auto VI", aasta: 2026, tekst: "Uus osa, mis on veel tulemas. Tegevus on Vice Citys." }
};

// Funktsioon, mis näitab valitud mängu infot lehel
function naita(kood) {
  var mang = mangud[kood];
  // võtame lehelt elemendid kätte
  document.getElementById("mangu_nimi").innerHTML = mang.nimi;
  document.getElementById("mangu_aasta").innerHTML = "Aasta: " + mang.aasta;
  document.getElementById("mangu_tekst").innerHTML = mang.tekst;
}
