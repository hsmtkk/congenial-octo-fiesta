import { PrismaClient } from '@prisma/client'
import bcrypt from "bcrypt"

const prisma = new PrismaClient()
const SALT_ROUNDS = 10

export async function POST(req: Request) {
    console.log("/api/auth/register")
    const { username, email, password } = await req.json()
    const hashedPassword = hashString(password)
    const user = await prisma.user.create({
        data: { username, email, password: hashedPassword }
    })
    return Response.json(user)
}

const hashString = (orig: string) => {
    const hash = bcrypt.hashSync(orig, SALT_ROUNDS)
    return hash
}