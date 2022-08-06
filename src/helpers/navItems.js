export const navItems = [
    {
        name: 'netflix',
        id: 8,
    },
    {
        name: 'hulu',
        id: 15,
    },
    {
        name: 'amazon-prime',
        id: 9,
    },
    {
        name: 'disney-plus',
        id: 337,
    }
]

export const getNetworkId = (navItems) => {
    let networkId; 
    // no '===' use == for conversion
    if (navItems == 8) {
        networkId = 213
    }
    if (navItems == 15) {
        networkId = 453
    }
    if (navItems == 9) {
        networkId = 1024
    }
    if (navItems == 337) {
        networkId = 2739
    }
 return networkId
}