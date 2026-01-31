//? en chipMode tenemos 3 opciones ['real' |  'hash'  | 'fixed' | 'none']

const columns = [
	//{ key: '_id', label: 'Id' },
	{ key: 'title', label: 'Título' },
	{ key: 'director', label: 'Director' },
	{ key: 'productor', label: 'Productor', isArray: true, isChip: true, chipMode:'hash' },
	//{ key: 'productor', label: 'Productor', isArray: true, isChip: true, //! chipColor: { background: '#1976d2', color: '#fff' } },

];

export default { columns };

