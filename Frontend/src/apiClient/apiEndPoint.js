
const BASEURL = import.meta.env.VITE_BACKEND_API_ENDPOINT;

export const API_ENDPOINT = {
    GET:{
        get_products: `${BASEURL}/api/v1/product`,
        search_products: `${BASEURL}/api/v1/product/search`,
        get_product_details: `${BASEURL}/api/v1/product`,
        get_similar_products: `${BASEURL}/api/v1/product/getSimillarProduct`,
        get_cart_products: `${BASEURL}/api/v1/cart`,
        get_addresses: `${BASEURL}/api/v1/address`,
    },
    POST:{
        get_auth: `${BASEURL}/api/v1/auth/validate`,
        add_to_cart: `${BASEURL}/api/v1/cart`,
        add_to_wishlist: `${BASEURL}/api/v1/wishlist`,
        add_new_address: `${BASEURL}/api/v1/address`,
        signup: `${BASEURL}/api/v1/user`,
        verify_otp: `${BASEURL}/api/v1/otp`,
        resent_otp: `${BASEURL}/api/v1/otp`
    },
    PATCH: {
        update_quantity: `${BASEURL}/api/v1/cart`,
        update_address: `${BASEURL}/api/v1/address`
    },
    DELETE:{
        delete_cart_product: `${BASEURL}/api/v1/cart`,
        delete_address: `${BASEURL}/api/v1/address`
    }
}