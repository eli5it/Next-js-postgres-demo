import pool from "@/db"
export async function GET(request, params) {
    try {
        const slug = params.params.slug
       const query = `SELECT * FROM users WHERE username = $1`
       const results = await pool.query(query, [slug])


       return new Response(JSON.stringify({ users: results.rows }), { status: 200 })



    } catch (err) {
        console.log(err)
        return new Response(err.message, { status: 500 })

    }
}