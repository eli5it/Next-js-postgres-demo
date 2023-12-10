import pool from "@/db";


export const getPayments = async () => {
    const {rows} = await pool.query(
        "SELECT * FROM payment"
    );

    return rows
}