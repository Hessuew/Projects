# Etteplan MORE project
```
Tekemäni osat sijaitseva: my-app>src App.vue, store.js js my-app>src>components DtNakyma.vue
Tein sovelluksen käyttäen vuetify tyylikirjastoa boostrap:n sijaan, 
joten komponenttien ulkonäkö on pienesti erilainen, mutta täysin ymmärrettävä ja selkeä
```

## Käytön helppous ja tietojen kattavuus
```
Sovellus on helppokäyttöinen ja kattava tiedoiltaan, mutta paranneltavaa olisi ollut 
peruutettujen junien rivin "himmennys"/disaplointi
Tein datan haun API:sta vuex storeen, josta sitä on helppo käyttää ja tarvittaessa muokata. Tämä mahdollistaa hyvät jatkokehitysmahdollisuudet
Lisäksi komponenttien tiedostollinen rakenne mahdollistaa ymmärrettänät ja selkeät jatkokehitys mahdollisuudet
```


##Puuttuvaa/vajaata
```
Sain tehtyä suurimman osan ennakkotehtävästä, mutta kaikkiin osiin en keksinyt ratkaisua

- Paikkakunnat ovat stationShotCode: en keksinyt miten saada eri API kutsun stationName näkymään vastaavaan kohtaan
- Saapumis/lähtemisaika: lähtöaseman aika, yritin eri mahdollisuuksia saada halutun aseman aika (kirjoitin kommmentteihin yritykseni), mutten onnistunut
- Ajat ovat osaksi jo menneitä kellonaikoja: hain tiedot asemalle saapuvien ja lähtevien junien API puolelta (10 seuraavaa saapuvaa ja lähtevää),
mutta API antaa jo menneitä aikoja silti. En tiedä toimiiko se oikein (vai ymmärsinkö sen toimivuudesta jotain väärin).
```
