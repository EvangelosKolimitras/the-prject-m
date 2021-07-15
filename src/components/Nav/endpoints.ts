interface Entpoint {
    id: string;
    endpoint: string;
    path: string;
}

export const entpoints: { [key: string]: Entpoint } = {
    '1': {
        id: '1',
        endpoint: 'weddings',
        path: '/weddings'
    },
    '2': {
        id: '2',
        endpoint: 'christening',
        path: '/christening'
    },
    '3': {
        id: '3',
        endpoint: 'weddings',
        path: '/weddings'
    },
    '4': {
        id: '4',
        endpoint: 'portraits',
        path: '/portraits'
    },
    '5': {
        id: '5',
        endpoint: 'food-photography',
        path: '/food-photography'
    },
    '6': {
        id: '6',
        endpoint: 'interior-photography',
        path: '/interior-photography'
    },
    '7': {
        id: '7',
        endpoint: 'events',
        path: '/events'
    },
    '8': {
        id: '8',
        endpoint: 'business-portfolio',
        path: '/business-portfolio'
    }
}

export const createEntpoints = (entpoits: { [key: string]: Entpoint }): Entpoint[] => Object.keys(entpoints).map(key => entpoints[key]);