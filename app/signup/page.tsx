import NavBar from "@/app/components/NavBar"
import { Button, Input } from "@nextui-org/react"

export default function Signup() {
    return (
        <div>
            <NavBar />
            <h2>アカウントを作成</h2>
            <Input label="名前" />
            <Input label="メールアドレス" />
            <Input label="パスワード" />
            <Button>新規登録</Button>
        </div>
    )
}