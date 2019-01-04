/*
1 - Créer une variable csvPath, qui contient
le chemin absolu entre la racine du disque
et le fichier stats.csv

2 - Utiliser (style au choix sync/async/promises...)
la fonction readFile (ou readFileSync si sync) pour lire
le contenu du fichier

3 - Transformer le contenu en une chaine de caractères avec
.toString()

4 - Utiliser la méthode .split pour transformer cette chaine
en tableau de ligne (sur le séparateur \n)

5 - Pour chaque ligne, utiliser à nouveau la méthode .split
pour transformer la ligne en un tableau [navigateur, stat]
 (sur le séparateur ,)

6 - Afficher chaque ligne sous la forme :
console.log("Chrome (all)", 63.16);

*/
