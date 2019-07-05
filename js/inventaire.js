        // Main
        var idInventaire = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        var condition = ['Neuf', 'Occasion'];
        var marque = ["Mazda", "Mercedes-Benz", "Toyota", "Audi", "Ford"];
        var modele = ["3", "CX-5", "GLA", "C43 AMG", "Corolla", "RAV4", "A5", "A3", "Focus HB", "Escape"];
        var annee = [2020, 2019, 2018, 2011, 2015];
        var odometre = [0, 10000, 40000, 60000, 100000, 136000];
        var portes = [2, 4, 5];
        var couleur = ["Noir", "Blanc", "Rouge", "Gris"];
        var transmission = ["Automatique", "Manuel"];
        var vitresElectrique = ["Non", "Oui"];
        var climatisateur = ["Non", "Oui"];
        var prix = [45000, 31500, 29000, 18000, 15000, 13000, 12000, 10000];



        function controlInventaire() {
            // on cree le tableau LIGNE, contenant les lignes
            var inventaireLigne = new Array();

            // on cree les lignes (tableau COLONE) les unes après les autres
            for (var i = 0; i < 10; i++)
                inventaireLigne[i] = new Array();

            //Assignation des valeurs manuellement INVENTAIRE...
            var libelle = ["Code : ", "Condition : ", "Marque : ", "Modèle : ", "Année : ", "Odomètre : ",
                "Portes : ", "Couleur : ", "Transmission : ", "Vitres électriques : ", "Climatisateur : ", "Prix : $ "
            ];




            //Auto 1
            inventaireLigne[0][0] = idInventaire[0];
            inventaireLigne[0][1] = condition[0];
            inventaireLigne[0][2] = marque[2];
            inventaireLigne[0][3] = modele[4];
            inventaireLigne[0][4] = annee[0];
            inventaireLigne[0][5] = odometre[0];
            inventaireLigne[0][6] = portes[1];
            inventaireLigne[0][7] = couleur[2];
            inventaireLigne[0][8] = transmission[0];
            inventaireLigne[0][9] = vitresElectrique[1];
            inventaireLigne[0][10] = climatisateur[1];
            inventaireLigne[0][11] = prix[3];
            //Auto 2
            inventaireLigne[1][0] = idInventaire[1];
            inventaireLigne[1][1] = condition[1];
            inventaireLigne[1][2] = marque[0];
            inventaireLigne[1][3] = modele[1];
            inventaireLigne[1][4] = annee[2];
            inventaireLigne[1][5] = odometre[2];
            inventaireLigne[1][6] = portes[2];
            inventaireLigne[1][7] = couleur[0];
            inventaireLigne[1][8] = transmission[0];
            inventaireLigne[1][9] = vitresElectrique[1];
            inventaireLigne[1][10] = climatisateur[1];
            inventaireLigne[1][11] = prix[2];
            //Auto 3
            inventaireLigne[2][0] = idInventaire[2];
            inventaireLigne[2][1] = condition[1];
            inventaireLigne[2][2] = marque[3];
            inventaireLigne[2][3] = modele[6];
            inventaireLigne[2][4] = annee[3];
            inventaireLigne[2][5] = odometre[5];
            inventaireLigne[2][6] = portes[0];
            inventaireLigne[2][7] = couleur[3];
            inventaireLigne[2][8] = transmission[0];
            inventaireLigne[2][9] = vitresElectrique[1];
            inventaireLigne[2][10] = climatisateur[1];
            inventaireLigne[2][11] = prix[4];
            //Auto 4
            inventaireLigne[3][0] = idInventaire[3];
            inventaireLigne[3][1] = condition[1];
            inventaireLigne[3][2] = marque[3];
            inventaireLigne[3][3] = modele[7];
            inventaireLigne[3][4] = annee[3];
            inventaireLigne[3][5] = odometre[2];
            inventaireLigne[3][6] = portes[1];
            inventaireLigne[3][7] = couleur[3];
            inventaireLigne[3][8] = transmission[0];
            inventaireLigne[3][9] = vitresElectrique[1];
            inventaireLigne[3][10] = climatisateur[1];
            inventaireLigne[3][11] = prix[3];
            //Auto 5
            inventaireLigne[4][0] = idInventaire[4];
            inventaireLigne[4][1] = condition[1];
            inventaireLigne[4][2] = marque[1];
            inventaireLigne[4][3] = modele[2];
            inventaireLigne[4][4] = annee[4];
            inventaireLigne[4][5] = odometre[1];
            inventaireLigne[4][6] = portes[1];
            inventaireLigne[4][7] = couleur[0];
            inventaireLigne[4][8] = transmission[0];
            inventaireLigne[4][9] = vitresElectrique[1];
            inventaireLigne[4][10] = climatisateur[1];
            inventaireLigne[4][11] = prix[2];
            //Auto 6
            inventaireLigne[5][0] = idInventaire[5];
            inventaireLigne[5][1] = condition[0];
            inventaireLigne[5][2] = marque[1];
            inventaireLigne[5][3] = modele[3];
            inventaireLigne[5][4] = annee[2];
            inventaireLigne[5][5] = odometre[1];
            inventaireLigne[5][6] = portes[0];
            inventaireLigne[5][7] = couleur[3];
            inventaireLigne[5][8] = transmission[0];
            inventaireLigne[5][9] = vitresElectrique[1];
            inventaireLigne[5][10] = climatisateur[1];
            inventaireLigne[5][11] = prix[0];
            //Auto 7
            inventaireLigne[6][0] = idInventaire[6];
            inventaireLigne[6][1] = condition[0];
            inventaireLigne[6][2] = marque[2];
            inventaireLigne[6][3] = modele[5];
            inventaireLigne[6][4] = annee[1];
            inventaireLigne[6][5] = odometre[0];
            inventaireLigne[6][6] = portes[2];
            inventaireLigne[6][7] = couleur[1];
            inventaireLigne[6][8] = transmission[0];
            inventaireLigne[6][9] = vitresElectrique[1];
            inventaireLigne[6][10] = climatisateur[1];
            inventaireLigne[6][11] = prix[1];
            //Auto 8
            inventaireLigne[7][0] = idInventaire[7];
            inventaireLigne[7][1] = condition[1];
            inventaireLigne[7][2] = marque[0];
            inventaireLigne[7][3] = modele[0];
            inventaireLigne[7][4] = annee[4];
            inventaireLigne[7][5] = odometre[3];
            inventaireLigne[7][6] = portes[2];
            inventaireLigne[7][7] = couleur[2];
            inventaireLigne[7][8] = transmission[0];
            inventaireLigne[7][9] = vitresElectrique[1];
            inventaireLigne[7][10] = climatisateur[1];
            inventaireLigne[7][11] = prix[6];
            //Auto 9
            inventaireLigne[8][0] = idInventaire[8];
            inventaireLigne[8][1] = condition[1];
            inventaireLigne[8][2] = marque[4];
            inventaireLigne[8][3] = modele[8];
            inventaireLigne[8][4] = annee[4];
            inventaireLigne[8][5] = odometre[4];
            inventaireLigne[8][6] = portes[1];
            inventaireLigne[8][7] = couleur[1];
            inventaireLigne[8][8] = transmission[0];
            inventaireLigne[8][9] = vitresElectrique[1];
            inventaireLigne[8][10] = climatisateur[1];
            inventaireLigne[8][11] = prix[7];
            //Auto 10
            inventaireLigne[9][0] = idInventaire[9];
            inventaireLigne[9][1] = condition[1];
            inventaireLigne[9][2] = marque[4];
            inventaireLigne[9][3] = modele[9];
            inventaireLigne[9][4] = annee[4];
            inventaireLigne[9][5] = odometre[3];
            inventaireLigne[9][6] = portes[2];
            inventaireLigne[9][7] = couleur[3];
            inventaireLigne[9][8] = transmission[0];
            inventaireLigne[9][9] = vitresElectrique[1];
            inventaireLigne[9][10] = climatisateur[1];
            inventaireLigne[9][11] = prix[5];

            //Affichage de l'inventaire...


            var data = "<table class='table table-stripped'>";
            for (var i = 0; i < inventaireLigne.length; i++) {
                data += "<tr>";
                for (var j = 0; j < inventaireLigne[i].length; j++) {
                    data += "<td>" + libelle[j] + inventaireLigne[i][j] + "</td>";
                }
                data += "</tr>";
            }
            data += "</table>";
            // data = document.getElementById("dataTable").document.getElementsByClassName("collapse");
            document.getElementById("dataTable").innerHTML = data;

        }

        function controlRecherche() {
            var input, filter, table, tr, td, i, txtValue;
            input = document.getElementById("myRechercheMarque");
            filter = input.value.toUpperCase();
            table = document.getElementById("myTable");
            tr = table.getElementsByTagName("tr");
            for (i = 0; i < tr.length; i++) {
                td = tr[i].getElementsByTagName("td")[2];
                if (td) {
                    txtValue = td.textContent || td.innerText;
                    if (txtValue.toUpperCase().indexOf(filter) > -1) {
                        tr[i].style.display = "";
                    } else {
                        tr[i].style.display = "none";
                    }
                }
            }
        }
