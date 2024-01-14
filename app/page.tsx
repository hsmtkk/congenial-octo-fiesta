// app/page.tsx
import { Button } from '@nextui-org/button';
import NavBar from './components/NavBar';

export default function Page() {
    return (
        <div>
            <NavBar />
            <Button>Click me</Button>
        </div>
    )
}