import pool from "@/db";

export const getProducts = async () => { 
    const {rows} = await pool.query(
        "SELECT * FROM product"
    );

    return rows
}