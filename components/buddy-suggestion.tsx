import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { UserPlus } from "lucide-react"
import Image from "next/image"

interface BuddySuggestionProps {
  name: string
  goal: string
  compatibility: string
  image: string
}

export function BuddySuggestion({ name, goal, compatibility, image }: BuddySuggestionProps) {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex items-center gap-4">
          <div className="relative h-16 w-16 rounded-full overflow-hidden border-2 border-primary">
            <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
          </div>
          <div>
            <h3 className="font-medium">{name}</h3>
            <p className="text-sm text-muted-foreground">{goal}</p>
            <div className="mt-1 text-xs font-medium text-primary">{compatibility} match</div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-0">
        <Button className="w-full">
          <UserPlus className="mr-2 h-4 w-4" /> Connect
        </Button>
      </CardFooter>
    </Card>
  )
}

