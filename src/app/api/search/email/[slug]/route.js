import pool from "@/db"
export async function GET(request, params) {
    try {
        const slug = params.slug.slug
        console.log(slug)
       const query = `SELECT * FROM users WHERE email = $1`

       const results = await pool.query(query, [slug])

       return new Response(JSON.stringify({ users: results.rows }), { status: 200 })



    } catch (err) {
        return new Response(err.message, { status: 500 })

    }
}