'use strict'

var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'jalkapallo'
});

module.exports = {
    haeSarjataulukko: function () {
        return new Promise((resolve, reject) => {
            con.query('SELECT sarjataulukko.id, nimi, ottelumaara, voittoja, tasapeleja, tappioita, tehdyt_maalit, paastetyt_maalit, pisteet FROM sarjataulukko LEFT JOIN joukkue ON sarjataulukko.joukkue_id = joukkue.id ORDER BY pisteet DESC', function (err, result, fields) {
                if (err) {
                    console.log("Virhe haettaessa dataa Sarjataulukko-taulusta, syy: " + err);
                    reject("Virhe haettaessa dataa Sarjataulukko-taulusta, syy: " + err);
                } else {
                    console.log("Sarjataulukko = " + JSON.stringify(result));
                    resolve(result);
                }
            })
        })
    },

    haePelaajat: function () {
        return new Promise((resolve, reject) => {
            con.query('SELECT pelaaja.id, sukunimi, etunimi, pelinumero, nimi AS joukkue FROM pelaaja LEFT JOIN joukkue ON pelaaja.joukkue_id = joukkue.id ORDER BY sukunimi ASC', function (err, result, fields) {
                if (err) {
                    console.log("Virhe haettaessa dataa Pelaaja-taulusta, syy: " + err);
                    reject("Virhe haettaessa dataa Pelaaja-taulusta, syy: " + err);
                } else {
                    console.log("Pelaajat = " + JSON.stringify(result));
                    resolve(result);
                }
            })
        })
    },

    haeJoukkueet: function () {
        return new Promise((resolve, reject) => {
            con.query('SELECT id, nimi, kaupunki, perustamisvuosi FROM joukkue ORDER BY nimi ASC', function (err, result, fields) {
                if (err) {
                    console.log("Virhe haettaessa dataa Joukkue-taulusta, syy: " + err);
                    reject("Virhe haettaessa dataa Joukkue-taulusta, syy: " + err);
                } else {
                    console.log("Joukkueet = " + JSON.stringify(result));
                    resolve(result);
                }
            })
        })
    }
 }