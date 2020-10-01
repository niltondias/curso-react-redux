function a() {
    const numeros = 
        Array(3)
        .reduce( (nums) => {
            return [...nums, parseInt( Math.random() * 5 ) ]
        }, [] )

    return numeros
}

console.log(a());