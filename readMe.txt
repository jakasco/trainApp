HUOM! node js ei ole pakko asentaa mik�li ei tarvitse backendiin menn� (mit� ei t�ss�
t�ss� ohjelman versiossa tarvita), appi aukeaa selaimessa kun avaa sen tiedosto sijainnin

ASENNUS:

-Lataa node js -> https://nodejs.org/en/download/current/
-Asenna js express -> https://expressjs.com/en/starter/installing.html

-Avaa komentorivi ja kirjoita:
	1.cd [Projektisi sijainti]
	2. npm start		
-Palvelimen pit�isi aueta ja tulla teksti: "Server opened in 1337"
-Avaa nettiselain ja kirjoita localhost:1337
-Appi avautuu

TIEDOSTOT:

index.html ja style.css  (Frontend)
database.js		 (Backend)

PARANNUKSET:

-Ohjelmaa voisi jatkaa siten, ett� backendiin tallennetaan
asemia joilla on usein k�yty, ja n�m� tulisivat automaattisesti
hausta tai esimerkiksi suosikit kohta, jolloin ei tarvitsisi 
alkaa erikseen hakea joka kerta t�t� asemaa

-Combobox josta valita asema, ettei tarvitse kirjoittaa

-Valita miss� j�rjestyksess� haun tulokset n�ytet��n, esim. junan numeron vai ajan mukaan

HUOMIOITAVAA JUNA-AJOISTA

https://rata.digitraffic.fi/#junat 

-> scheduledTime: datetime Info Aikataulun mukainen pys�htymis- tai l�ht�aika

Junan ajoissa on jotain virheit�, tai sitten en ole osannut
katsoa niit� oikein jsonista. Noiden parametrien pit�isi kertoa l�ht�ajat,
mutta ohjelmassa ne ovat 3 tuntia j�ljess� ja pit�� koodissa muuttaa manuaalisesti

Hiiren klikkauksella ja Enteri� painamalla saa hakukent�st� haettua tulokset.