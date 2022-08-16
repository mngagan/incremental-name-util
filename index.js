export default function incrementalName() {
    let args = arguments
    if (!args[0]) {
        console.warn('In valid arguments')
        return ''
    }
    if (!(
        typeof args[0] === 'object' &&
        !Array.isArray(args[0]) &&
        args[0] !== null
    )) {
        console.warn('In valid arguments')
        return ''
    }
    let { existingNames = [], name = '' } = args[0]
    let index = 1
    if (!Array.isArray(existingNames)) return name
    return !existingNames.includes(name) ? name : validateName({ existingNames, name, index })
}

const validateName = ({ existingNames, name, index }) => {
    return !existingNames.includes(`${name}_${index}`) ? `${name}_${index}` : validateName({ existingNames, name, index: index + 1 })
}