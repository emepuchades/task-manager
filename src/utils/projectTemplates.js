const projectTemplates = [
    {
        id: 'basic',
        name: 'Básico',
        description: 'Para casi cualquier proyecto.',
        lists: ['Por hacer', 'En curso', 'Hecho'],
    },
    {
        id: 'sprint',
        name: 'Sprint',
        description: 'Para trabajar por iteraciones.',
        lists: ['Backlog', 'Por hacer', 'En curso', 'Revisión', 'Hecho'],
    },
    {
        id: 'empty',
        name: 'Vacío',
        description: 'Empiezas sin columnas y las creas tú.',
        lists: [],
    },
]

export default projectTemplates
