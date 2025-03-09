const baseUrl = "http://localhost:3030/jsonstore/users"

const userServices ={
    async getAll(){
        const users = await fetch(baseUrl)
        const data = await users.json()
        const values = Object.values(data)

        return values;
    }
}

export default userServices