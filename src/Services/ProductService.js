const BASE_URL = "./public/data/products.json"

export const getAllProducts = async () => {

    try {
        const response = await fetch(BASE_URL);

        if (!response.ok)
            throw new Error(`[ERROR] - Error al intentar obtener los productos - Status Code: ${response.status}`)

        const data = await response.json();

        return data;
    }
    catch(error) {
        console.log(error);
    }
}