

const useCaseOne = (type: string, ...args: any) => {
    const array = [...args]
    switch ( type ) {
        case 'banner':
            return array[0]
            break
        case 'slider':
            return array[1]
            break
        case 'trailer':
            return array[2]
            break
        default:
            return array[0]
    }
}

export default useCaseOne