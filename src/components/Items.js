import axios from "axios";

export async function getItems(category, skip, limit) {

    const url = `https://dummyjson.com/products${category}?sortBy=title&order=asc`;

    var options = {
        method: 'GET',
        url,
        params: {
        limit,
        skip
        },
      };
      const response = await axios.request(options);

    return { total: response.data.total, products: response.data.products };
}