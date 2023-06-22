const useRepeat = (count: number, element: any) => {
    const result = []
    for ( let i = 0; i < count; i++  ) {
        result.push(element)
    }

    return result
}

export  default  useRepeat