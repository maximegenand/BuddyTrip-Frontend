  // Fonction pour formater le texte de la date
  const formatDate = (text) => {
    // Supprimer tous les caractères non numériques de la chaîne de texte
    const cleanedText = text.replace(/[^0-9]/g, "");

    // Appliquer le format "JJ/MM/AAAA" jusqu'à 8 caractères
    if (cleanedText.length <= 2) {
      // Si la longueur est inférieure ou égale à 2, cela signifie que l'utilisateur saisit le jour (ex: "2")
      return cleanedText;
    } else if (cleanedText.length <= 4) {
      // Si la longueur est entre 3 et 4, cela signifie que l'utilisateur saisit le jour et le mois (ex: "0212" pour le 2 décembre)
      const day = cleanedText.slice(0, 2);
      const month = cleanedText.slice(2);
      return `${day}/${month}`;
    } else {
      // Si la longueur est supérieure à 4, cela signifie que l'utilisateur saisit le jour, le mois et l'année (ex: "02122023" pour le 2 décembre 2023)
      const day = cleanedText.slice(0, 2);
      const month = cleanedText.slice(2, 4);
      const year = cleanedText.slice(4, 8);
      return `${day}/${month}/${year}`;
    }
  };

module.exports = { formatDate };