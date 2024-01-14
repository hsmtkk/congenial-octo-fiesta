import NavBar from "@/app/components/NavBar"
import { Button, Input } from "@nextui-org/react"

export default function Login() {
    return (
        <div>
            <NavBar />
            <h2>アカウントにログイン</h2>
            <Input label="メールアドレス" />
            <Input label="パスワード" />
            <Button>ログイン</Button>
        </div>
    )
}