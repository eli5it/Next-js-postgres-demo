import pool from "@/db";

export const getProducts = async () => { 
    const {rows} = await pool.query(
        "SELECT * FROM product"
    );

    return rows
}


export const getProductById = async (id ) => { 
    const { rows } = await pool.query(
        "SELECT * FROM product WHERE product_id = $1",
        [id]
    );

    return rows[0];
}