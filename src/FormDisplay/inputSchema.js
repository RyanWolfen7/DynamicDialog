export const Schema = ( props = {} ) => {
    let { name, address: { address, postcode, city } } = props
    console.log(props)

    return {
        name: {
            'Name': { fieldName: 'name', defaultValue: name, field: 'name' }
        },
        address: {
            'Address Line 1': { fieldName: 'address', defaultValue: address, field: 'address.address' },
            'Postcode': { fieldName: 'postcode', defaultValue: postcode, field: 'address.postcode' },
            'City': { fieldName: 'city', defaultValue: city, field: 'address.city' }
        },
    }
}   
