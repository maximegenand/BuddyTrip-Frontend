  // Fonction pour vérifier si une date est valide et supérieure ou égale à la date d'aujourd'hui
  const isValidDate = (dateText) => {
    const cleanedDateText = dateText.replace(/[^0-9]/g, "");
    // transforme la string dans parseInt() en entier
    const day = parseInt(cleanedDateText.slice(0, 2));
    const month = parseInt(cleanedDateText.slice(2, 4));
    const year = parseInt(cleanedDateText.slice(4, 8));

    // Vérifier que l'année est supérieure ou égale à l'année courante
    const currentYear = new Date().getFullYear();
    if (year < currentYear) {
      return false;
    } else if (year === currentYear) {
      // Si l'année est égale à l'année courante, vérifier le mois et le jour
      const currentMonth = new Date().getMonth() + 1; // Les mois vont de 0 à 11 dans JavaScript, donc on ajoute 1
      if (month < currentMonth) {
        return false;
      } else if (month === currentMonth) {
        const currentDay = new Date().getDate();
        if (day < currentDay) {
          return false;
        }
      }
    }

    // Vérifier que le mois est compris entre 1 et 12
    if (month < 1 || month > 12) {
      return false;
    }
    // Vérifier que le jour est compris entre 1 et 31
    if (day < 1 || day > 31) {
      return false;
    }
    // Vérifier la validité de la date en créant un objet Date avec les valeurs
    const parsedDate = new Date(year, month - 1, day);
    //on vérifie avec isNan() si le valeur dedans n'est pas un nombre
    if (isNaN(parsedDate)) {
      return false;
    }

    return true;
  };

module.exports = { isValidDate };