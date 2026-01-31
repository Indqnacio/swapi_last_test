const columns = [
  { key: '_id', label: 'Id' },
  { key: 'name', label: 'Nombre' },
  { key: 'birthDay', label: 'Nacimiento' },
  { key: 'gender', label: 'Género' },
  { key: 'mass', label: 'Masa' },
  { key: 'hairColor', label: 'Color de pelo', isArray: true, isChip: true, chipMode:'real'},
  { key: 'eyeColor', label: 'Color de ojos', isArray: true, isChip: true, chipMode:'real' },
  { key: 'skinColor', label: 'Color de piel', isArray: true, isChip: true, chipMode:'real' },
  { key: 'films', label: 'Películas', isArray: true, isChip: true, chipMode:'hash' },
  { key: 'species', label: 'Especies', isArray: true, isChip: true, chipMode:'hash' },
  { key: 'starships', label: 'Naves', isArray: true, isChip: true, chipMode:'hash' },
  { key: 'vehicles', label: 'Vehículos', isArray: true, isChip: true, chipMode:'hash' },
  { key: 'homeworldName', label: 'Planeta' },
];

export default { columns };
