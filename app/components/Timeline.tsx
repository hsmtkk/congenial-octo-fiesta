import React from "react"
import { Textarea } from "@nextui-org/react"
import { Button } from '@nextui-org/button'
import Post from "@/app/components/Post"

const Timeline = () => {
    return (
        <div>
            <form>
                <Textarea placeholder="What's on your mind?" />
                <Button>投稿</Button>
            </form>
            <Post />
        </div>
    )
}

export default Timeline
