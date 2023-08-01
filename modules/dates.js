import { format, isSameYear, isSameMonth, getDate } from "date-fns";
import { fr } from 'date-fns/locale'

// Fonction pour formater une date au format 'jour mois' sans afficher le mois si le mois est identique entre les deux dates
function formatDate(
  date,               // Date à afficher en format String (peut contenir un time aussi)
  showYear = false,   // false: affiche l'année seulement si celle-ci est différente de l'actuelle ; true: l'affiche tout le temps
  short = false,      // false: affiche le mois en mode "décembre" ; true: affiche le mois en mode "déc."
  range = false,      // utilisé seulement par les fonctions
  showMonth = true    // utilisé seulement par les fonctions
) {
  // On raccourci le nom du mois si le paramètre true est ON
  const month = short ? 'MMM' : 'MMMM'; 
  // On renvoie 1er pour le jour si c'est le cas
  let day = 'd';
  if (getDate(date) === 1) day = 'do';
  
  // On vérifie le year actuel pour l'afficher si ce n'est pas le même que l'année en cours, sauf si on est dans un range
  if (!showYear && !range) if (!isSameYear(date, new Date())) showYear = true;
  // On retourne le format 'dd MMMM? y'
  if (showYear) return format(date, `${day} ${month} y`, { locale: fr });

  // On retourne le format 'dd MMMM?'
  if (showMonth) return format(date, `${day} ${month}`, { locale: fr });

  // Si on est dans un range et qu'on n'affiche pas le month, on retourne au format 'dd'
  return format(date, day, { locale: fr });
  }


  // Fonction pour afficher un range de deux dates
  const formatPeriod = dates => {
    // On créé la variable dateStart et dateEnd
    const [ dateStart, dateEnd ] = dates;
  
    // On vérifie que les années sont identiques
    const sameYear = isSameYear(dateStart, dateEnd);
    // On vérifie que les mois sont identiques
    const sameMonth = isSameMonth(dateStart, dateEnd);
  
    // On formate les dates
    const dateStartString = formatDate(dateStart, !sameYear, true, true, !sameMonth);
    const dateEndString = formatDate(dateEnd, false, true);

    // Afficher le message
    return `du ${dateStartString} au ${dateEndString}`;
  }

module.exports = { formatDate, formatPeriod };