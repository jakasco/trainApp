HUOM! node js ei ole pakko asentaa mikäli ei tarvitse backendiin mennä (mitä ei tässä
tässä ohjelman versiossa tarvita), appi aukeaa selaimessa kun avaa sen tiedosto sijainnin

ASENNUS:

-Lataa node js -> https://nodejs.org/en/download/current/
-Asenna js express -> https://expressjs.com/en/starter/installing.html

-Avaa komentorivi ja kirjoita:
	1.cd [Projektisi sijainti]
	2. npm start		
-Palvelimen pitäisi aueta ja tulla teksti: "Server opened in 1337"
-Avaa nettiselain ja kirjoita localhost:1337
-Appi avautuu

TIEDOSTOT:

index.html ja style.css  (Frontend)
database.js		 (Backend)

PARANNUKSET:

-Ohjelmaa voisi jatkaa siten, että backendiin tallennetaan
asemia joilla on usein käyty, ja nämä tulisivat automaattisesti
hausta tai esimerkiksi suosikit kohta, jolloin ei tarvitsisi 
alkaa erikseen hakea joka kerta tätä asemaa

-Combobox josta valita asema, ettei tarvitse kirjoittaa

-Valita missä järjestyksessä haun tulokset näytetään, esim. junan numeron vai ajan mukaan

HUOMIOITAVAA JUNA-AJOISTA

https://rata.digitraffic.fi/#junat 

-> scheduledTime: datetime Info Aikataulun mukainen pysähtymis- tai lähtöaika

Junan ajoissa on jotain virheitä, tai sitten en ole osannut
katsoa niitä oikein jsonista. Noiden parametrien pitäisi kertoa lähtöajat,
mutta ohjelmassa ne ovat 3 tuntia jäljessä ja pitää koodissa muuttaa manuaalisesti

Hiiren klikkauksella ja Enteriä painamalla saa hakukentästä haettua tulokset.