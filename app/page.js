import { Button } from "@/components/ui/button"
import { UserButton } from "@clerk/nextjs"
const page = () => {
  return (
    <div>
        <Button>Button</Button>
        <UserButton />
    </div>
  )
}
export default page