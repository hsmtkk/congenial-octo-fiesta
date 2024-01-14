import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const prisma = new PrismaClient()

export async function POST(req: Request) {
    console.log("/api/auth/login")
    const { email, password } = await req.json()
    const user = await prisma.user.findUnique({ where: { email } })
    if (!user) {
        return NextResponse.json({ error: "User not found" }, { status: 401 })
    }
    const isValidUser = verifyPassword(password, user.password)
    if (!isValidUser) {
        return NextResponse.json({ error: "Wrong password" }, { status: 401 })
    }
    const secretKey: string = process.env.SECRET_KEY!
    const token = jwt.sign({ id: user.id }, secretKey, {
        expiresIn: "1d",
    })
    return NextResponse.json({ token })
}

const verifyPassword = (password: string, hashedPassowrd: string): boolean => {
    return bcrypt.compareSync(password, hashedPassowrd)
}