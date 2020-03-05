const getDataFast = async () => {
    const response = await fetch("http://localhost:5000/product")
    const data = await response.json();
    console.log( data )
}

getDataFast()