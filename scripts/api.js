const getResponse = async (value) => {

    const options = {
        method: 'GET',
        url: 'https://weatherapi-com.p.rapidapi.com/current.json',
        params: { q: `${value}` },
        headers: {
            'X-RapidAPI-Key': '7653558c72msh4744c32ce35a248p148572jsn1385e9bed9b2',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };


    try {

        const response = await axios.request(options);
        //console.log(response.data);
        return response.data

    } catch (error) {

        console.error(error);

    }

}

export default getResponse