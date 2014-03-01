
function User(nom, prenom, mail){
	this.nom = nom;
	this.prenom = prenom;
	this.mail = mail;
}

var Colonne = function(id, titre, type, choix){ //type = colonne ou ligne, choix = solo ou multi
	this.id = id;
	this.titre = titre;
	this.type = type;
	this.choix = choix;
}


var Event = function(id, nbreTotal, nbreDispo, tableauId, colonneId, ligneId, users){
	this.id = id;
	this.nbreTotal = nbreTotal;
	this.nbreDispo = nbreDispo;
	this.tableau = tableauId;
	this.colonne = colonneId;
	this.ligne = ligneId;
	this.users = users;
}

var Tableau = function(id, titre, nbreColonnes, nbreLignes){
	this.id = id;
	this.titre = titre;
	this.nbreColonnes = nbreColonnes;
	this.nbreLignes = nbreLignes;
	this.colonnes = [];
	this.lignes = [];
	this.events = [];
	this.createColonnes = function createColonnes(){
		var nbrecol = this.nbreColonnes;
		for (i = 1; i < nbrecol + 1; ++i) {
    		console.log(i);
    		var colonne = new Colonne(i,"Colonne " + i, "colonne", "multi");
			this.colonnes.push(colonne);
		}
	};
	this.createLignes = function createLignes(){
		var nbrelig = this.nbreLignes;
		for (i = 1; i < nbrelig + 1; ++i) {
    		console.log(i);
    		var ligne = new Colonne(i,"Ligne " + i, "ligne", "multi");
			this.lignes.push(ligne);
		}
	};
	this.createEvents = function(){
		var nbrelig = this.nbreLignes;
		var nbrecol = this.nbreColonnes;
		for (li = 1; li < nbrelig + 1; ++li) {
			for (co = 1; co < nbrecol + 1; ++co) {
				event = new Event(li.toString() + co.toString(), 10,10, this.id, co, li, []);
				this.events.push(event);
			}
		}
	};
};

/*var nbrelig = this.nbreLignes;
		for (i = 1; i < nbrelig + 1; ++i) {
    		var nbrecol = this.nbreColonnes;
    		for (i = 1; i < nbrecol + 1; ++i) {
	    		console.log(i);
	    		var event = new Event(i,"Colonne " + i, "colonne", "multi");
				this.colonnes.push(colonne);
			}
		}*/

var tableau1 = new Tableau(1,"Tableau 1", 3,3);
tableau1.createColonnes();
tableau1.createLignes();
tableau1.createEvents();

console.log(JSON.stringify(tableau1));
