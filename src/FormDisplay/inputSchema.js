export const Schema = ( props = {} ) => {
    let { name, address: { address, postcode, city } } = props

    return {
        name: {
            'name': { fieldName: 'name', defaultValue: name, field: 'name' }
        },
        address: {
            'address': { fieldName: 'address', defaultValue: address, field: 'address.address' },
            'postcode': { fieldName: 'postcode', defaultValue: postcode, field: 'address.postcode' },
            'city': { fieldName: 'city', defaultValue: city, field: 'address.city' }
        },
    }
}   
