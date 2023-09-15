export const jsonToPropTypes = (json) => {
    let result = {};

    for (let key in json) {
        let value = json[key];
        switch (typeof value) {
            case 'string':
                result[key] = 'PropTypes.string.isRequired';
                break;
            case 'number':
                result[key] = 'PropTypes.number.isRequired';
                break;
            case 'boolean':
                result[key] = 'PropTypes.bool.isRequired';
                break;
            case 'object':
                if (Array.isArray(value)) {
                    // For simplicity, we'll assume all items in the array are of the same type as the first item
                    let itemType = typeof value[0];
                    switch (itemType) {
                        case 'string':
                            result[key] = 'PropTypes.arrayOf(PropTypes.string).isRequired';
                            break;
                        case 'number':
                            result[key] = 'PropTypes.arrayOf(PropTypes.number).isRequired';
                            break;
                        // ... handle other types similarly
                        default:
                            result[key] = 'PropTypes.array.isRequired';
                    }
                } else {
                    result[key] = `PropTypes.shape(${jsonToPropTypes(value)}).isRequired`;
                }
                break;
            // ... handle other types similarly
            default:
                result[key] = 'PropTypes.any.isRequired';
        }
    }

    return result;
};
