/**
 * Script Google Apps Script pour recevoir les données du formulaire
 * et les enregistrer dans une feuille Google Sheets
 *
 * INSTRUCTIONS D'INSTALLATION :
 * 1. Créez une nouvelle feuille Google Sheets
 * 2. Dans la feuille, ajoutez ces en-têtes dans la première ligne (A1 à E1) :
 *    - A1: Timestamp
 *    - B1: Nom
 *    - C1: Email
 *    - D1: Ville d'installation
 *    - E1: Message
 * 3. Allez dans Extensions > Apps Script
 * 4. Copiez-collez tout ce code dans l'éditeur Apps Script
 * 5. Cliquez sur "Déployer" > "Nouveau déploiement"
 * 6. Sélectionnez "Application Web"
 * 7. Dans "Exécuter en tant que" : choisissez votre compte
 * 8. Dans "Qui peut accéder" : choisissez "Tout le monde"
 * 9. Cliquez sur "Déployer"
 * 10. Copiez l'URL du déploiement qui apparaît
 * 11. Utilisez cette URL dans votre formulaire React
 */

function doPost(e) {
  try {
    // Récupérer la feuille active
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Parser les données JSON envoyées depuis le formulaire
    const data = JSON.parse(e.postData.contents);

    // Créer une nouvelle ligne avec les données
    const timestamp = new Date();
    const row = [
      timestamp,
      data.nom || '',
      data.email || '',
      data.villeInstallation || '',
      data.message || ''
    ];

    // Ajouter la ligne à la feuille
    sheet.appendRow(row);

    // Retourner une réponse de succès
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'success',
        message: 'Données enregistrées avec succès'
      }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // En cas d'erreur, logger et retourner une réponse d'erreur
    Logger.log('Erreur: ' + error.toString());

    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'error',
        message: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Fonction pour tester le script (optionnel)
function testDoPost() {
  const testData = {
    postData: {
      contents: JSON.stringify({
        nom: 'Test Nom',
        email: 'test@example.com',
        villeInstallation: 'Paris',
        message: 'Ceci est un message de test'
      })
    }
  };

  const result = doPost(testData);
  Logger.log(result.getContent());
}
