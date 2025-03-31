import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, Flame, Play } from "lucide-react"
import Image from "next/image"

interface WorkoutCardProps {
  title: string
  level: string
  duration: string
  calories: string
  image: string
}

export function WorkoutCard({ title, level, duration, calories, image }: WorkoutCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4">
          <span className="inline-block px-2 py-1 text-xs font-medium bg-primary/90 text-primary-foreground rounded-md">
            {level}
          </span>
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="text-lg font-bold">{title}</h3>
        <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Clock className="mr-1 h-4 w-4" />
            {duration}
          </div>
          <div className="flex items-center">
            <Flame className="mr-1 h-4 w-4" />
            {calories} cal
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex gap-2">
        <Button variant="outline" className="w-full">
          Details
        </Button>
        <Button className="w-full">
          <Play className="mr-2 h-4 w-4" /> Start
        </Button>
      </CardFooter>
    </Card>
  )
}

