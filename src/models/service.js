import pool from "@/db";

export const getServices = async () => { 
    const {rows} = await pool.query(
        "SELECT * FROM services"
    );

    return rows
}

export const getServiceById = async (id ) => {
    const { rows } = await pool.query(
        "SELECT * FROM services WHERE service_id = $1",
        [id]
    );

    return rows[0];
}