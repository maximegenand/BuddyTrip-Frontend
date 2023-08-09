// On sélectionne l'icone en fonction de la catégorie de l'event

function findCategory(category) {
    if (category === 'travel car') return 'car';
    if (category === 'travel train') return 'train';
    if (category === 'travel plane') return 'plane';
    return 'play'
  }

module.exports = { findCategory };
