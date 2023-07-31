// Fonction pour formater une date au format 'jour mois' sans afficher le mois si le mois est identique entre les deux dates
function formatDate(date, showMonth = true) {
    const options = showMonth ? { day: '2-digit', month: 'short' } : { day: '2-digit' };
    return date.toLocaleDateString('fr-FR', options);
  }
  
  // Fonction pour afficher le message
const screenPeriod = dates => {
    // Analyser les dates du tableau en objets de type Date
    const dateStart = new Date(dates[0]);
    const dateEnd = new Date(dates[1]);
  
    // Vérifier si les mois sont identiques
    const sameMonth = dateStart.getMonth() === dateEnd.getMonth();
  
    // Formater les dates
    const dateStartString = formatDate(dateStart, !sameMonth);
    const dateEndString = formatDate(dateEnd);

    // Afficher le message
    return `du ${dateStartString} au ${dateEndString}`;
  }

module.exports = { screenPeriod };