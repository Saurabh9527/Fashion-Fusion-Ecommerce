
const BASEURL = import.meta.env.VITE_BACKEND_API_ENDPOINT;

export const API_ENDPOINT = {
    GET:{
        get_products: `${BASEURL}/api/v1/product`,
        search_products: `${BASEURL}/api/v1/product/search`,
        get_product_details: `${BASEURL}/api/v1/product`,
        get_similar_products: `${BASEURL}/api/v1/product/getSimillarProduct`,
        
    },
    POST:{
        get_auth: `${BASEURL}/api/v1/auth/validate`,
    }
}