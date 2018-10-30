'use strict'

var express = require('express');
var cons = require('consolidate');
var footballController = require('./footballController');

var app = express();
app.engine('html', cons.handlebars);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

var handlebars = require('handlebars');
handlebars.registerHelper('sijoitus', function (index) {
    return index + 1;
});


var toiminnot = [];
toiminnot.push({ avain: 1, selite: 'valinta 1' });
toiminnot.push({ avain: 2, selite: 'valinta 2' });
toiminnot.push({ avain: 3, selite: 'valinta 3' });
toiminnot.push({ avain: 4, selite: 'valinta 4' });
toiminnot.push({ avain: 5, selite: 'valinta 5' });

var tapahtumat = [
    { paivamaara: '28.10.2018', selite: 'Suomi-Unkari miesten maaottelu' }, 
    { paivamaara: '01.11.2018', selite: 'Futsal turnaus Kuopiossa' }, 
    { paivamaara: '12.11.2018', selite: 'Kauden päättäjäiset Keskuskentällä' }, 
    { paivamaara: '28.11.2018', selite: 'Pikkujoulut' }
];

// Näytetään "etusivu"
app.get('/jalkapallo', function (req, res) {
    res.render('index', {
        toiminnot: toiminnot,
        tapahtumat: tapahtumat
    });
});

// Haetaan sarjataulukko
app.get('/sarjataulukko', function (req, res) {
    footballController.haeSarjataulukko().
        then(data => {
            res.render('sarjataulukko', {
                sarjataulukko: data
            });
        }).catch(err => {
            console.log("Virhe: " + JSON.stringify(err));
        });
});

// Haetaan pelaajat ja joukkueet
app.get('/pelaajatjajoukkueet', function (req, res) {
    var pelaajat = footballController.haePelaajat();
    var joukkueet = footballController.haeJoukkueet();

    Promise.all([pelaajat, joukkueet]).
        then(data => {
            console.log('pelaajat = ' + JSON.stringify(data[0]));
            console.log('joukkueet = ' + JSON.stringify(data[1]));

            res.render('pelaajatjajoukkueet', {
                pelaajat: data[0],
                joukkueet: data[1]
            });
        }).catch(err => {
            console.log("Virhe: " + JSON.stringify(err));
        });
});

// 404 virhettä, jos kutsu ei täsmää edellä oleviin osoitteisiin
app.use(function (req, res, next) {
    res.sendStatus(404);
});

// Kuunnellaan porttia 3000 osoitteessa 127.0.0.1
app.listen(3000, '127.0.0.1', () => {
    console.log("Server running at http://127.0.0.1:3000/");
});