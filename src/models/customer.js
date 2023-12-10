import pool from "@/db";

export const getCustomerById = async (id) => {
    const { rows } = await pool.query(
        "SELECT * FROM customer WHERE customer_id = $1",
        [id]
    );
    return rows[0];
}

export const getCustomerByEmail = async (email) => {
    const { rows } = await pool.query(
        "SELECT * FROM customer WHERE email = $1",
        [email]
    );
    return rows[0];
}

export const getCustomers = async () => {
    const {rows} = await pool.query(
        "SELECT * FROM customer"
    );

    return rows
    
 }
