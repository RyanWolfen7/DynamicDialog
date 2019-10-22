export const Schema = ( props = {} ) => {
    let { name, addressLine1, postcode, city } = props

    return {
        name: {
            'Name': { fieldName: 'addressLine1', defaultValue: name, field: 'pharmacy_name' }
        },
        address: {
            'Address Line 1': { fieldName: 'addressLine1', defaultValue: addressLine1, field: 'address.addressLine1' },
            'Postcode': { fieldName: 'postcode', defaultValue: postcode, field: 'address.postcode' },
            'City': { fieldName: 'city', defaultValue: city, field: 'address.city' }
        },
    }
}   
