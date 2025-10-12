const BASE_URL = "./public/data/products.json"
const LIMIT_PAGE = 12;

export const getAllProducts = async (pageNumber) => {

    try {
        const response = await fetch(BASE_URL);

        if (!response.ok)
            throw new Error(`[ERROR] - Error al intentar obtener los productos - Status Code: ${response.status}`)

        const data = await response.json();

        const listInit = (pageNumber - 1) * LIMIT_PAGE;

        return data.slice(listInit, listInit+LIMIT_PAGE);
    }
    catch(error) {
        console.log(error);
    }
}