"use strict";

var data = [
  {
    id: 136,
    name: "steve",
    scores: [ 42, 47, 12, 65, 81 ]
  },
  {
    id: 247,
    name: "tony",
    scores: [ 79, 19, 13, 65, 88 ]
  },
  {
    id: 288,
    name: "natasha",
    scores: [ 93, 4, 79, 87, 39 ]
  }
];

// - afficher une table html contenant chaque ligne (avec en-tête)
// affiche une autre table html contenant le nom des utilisateurs et leur score moyen
// afficher une table html contenant les cinq meilleurs scores et le nom du joueur par ordre décroissant et l'index du score

// indices : boucle for pour parcourir le tableau de données
// pour lire le nom : user.name
// pour lire le score : user.scores

// TABLEAU I
// tableau récapitulatif sans tri
// renvoie un getElementById = null ou undefined

var table1 = document.getElementById('table1');


for (var user of data) {
  console.log(user.name);
  console.log(user.id);
  console.log(user.scores);

  var row = table1.createElement('tr');
  row.innerHTML = '<td>'+ user.id +'</td><td>' + user.name + '</td><td>' + user.scores+ '</td>');

};

// TABLEAU 2

// Calculer le score moyen des joueurs
// essai d'utiliser reduce

// for (var user of data) {
//   var sum = data[user.scores].reduce((a, b)=> a + b,0);
//   console.log(sum);
// }

// écriture du score moyen dans le tableau

// var average = function () {
//   for (var user of data) {
//      / scores.length;
//   }
// }
//
// for (var user of data) {
//   document.getElementById('#table2').write('<tr><td>'+ date[user.id] +'</td><td>' + data[user.name] + '</td><td>' + average(data[user.scores]).value + '</td></tr>');


// TABLEAU 3
// Etapes
// Trier les users par ordre alphabétique
// Trier tous les scores par ordre décroissant
// afficher les 5 meilleurs scores
// aller chercher l'user pour chaque score
// aller chercher l'index de l'array des scores pour l'afficher à côté
