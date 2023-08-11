  // Fonction pour formater le texte de l'horaire
  const formatTime = (text) => {
    // Supprimer tous les caractères non numériques de la chaîne de texte
    const cleanedText = text.replace(/[^0-9]/g, "");

    // Appliquer le format "HH:mm" jusqu'à 4 caractères
    if (cleanedText.length <= 2) {
      // Si la longueur est inférieure ou égale à 2, cela signifie que l'utilisateur saisit l'heure (ex: "2")
      return cleanedText;
    } else {
      // Si la longueur est supérieure à 2, cela signifie que l'utilisateur saisit la minute
      const hour = cleanedText.slice(0, 2);
      const minute = cleanedText.slice(2, 4);
      return `${hour}:${minute}`;
    }
  };

  // Fonction pour gérer l'affichage d'une date au format "HH h mm"
  const timeToText = (text, space = "h") => {
    const date = new Date(text);
    const hour = date.getUTCHours().toString().padStart(2, '0');
    const minute = date.getUTCMinutes().toString().padStart(2, '0');
    return hour+space+minute;
  }

module.exports = { formatTime, timeToText };