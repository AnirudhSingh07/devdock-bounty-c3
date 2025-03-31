import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Filter, Plus, Search } from "lucide-react"
import { WorkoutCard } from "@/components/workout-card"
import { Input } from "@/components/ui/input"

export default function WorkoutsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between gap-4 md:items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Workouts</h1>
          <p className="text-muted-foreground">Browse and discover workouts tailored to your goals.</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Create Workout
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search workouts..." className="w-full pl-8" />
        </div>
        <Button variant="outline" className="md:w-auto">
          <Filter className="mr-2 h-4 w-4" /> Filter
        </Button>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Workouts</TabsTrigger>
          <TabsTrigger value="recommended">Recommended</TabsTrigger>
          <TabsTrigger value="saved">Saved</TabsTrigger>
          <TabsTrigger value="my-workouts">My Workouts</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <WorkoutCard
              title="Full Body HIIT"
              level="Intermediate"
              duration="30 min"
              calories="320"
              image="/placeholder.svg?height=200&width=300"
            />
            <WorkoutCard
              title="Upper Body Strength"
              level="Advanced"
              duration="45 min"
              calories="280"
              image="/placeholder.svg?height=200&width=300"
            />
            <WorkoutCard
              title="Cardio Blast"
              level="Beginner"
              duration="25 min"
              calories="220"
              image="/placeholder.svg?height=200&width=300"
            />
            <WorkoutCard
              title="Core Crusher"
              level="Intermediate"
              duration="20 min"
              calories="180"
              image="/placeholder.svg?height=200&width=300"
            />
            <WorkoutCard
              title="Yoga Flow"
              level="All Levels"
              duration="40 min"
              calories="150"
              image="/placeholder.svg?height=200&width=300"
            />
            <WorkoutCard
              title="Lower Body Focus"
              level="Intermediate"
              duration="35 min"
              calories="250"
              image="/placeholder.svg?height=200&width=300"
            />
            <WorkoutCard
              title="Morning Energizer"
              level="Beginner"
              duration="15 min"
              calories="120"
              image="/placeholder.svg?height=200&width=300"
            />
            <WorkoutCard
              title="Strength & Conditioning"
              level="Advanced"
              duration="50 min"
              calories="400"
              image="/placeholder.svg?height=200&width=300"
            />
            <WorkoutCard
              title="Flexibility & Mobility"
              level="All Levels"
              duration="30 min"
              calories="100"
              image="/placeholder.svg?height=200&width=300"
            />
          </div>
        </TabsContent>
        <TabsContent value="recommended">
          <Card>
            <CardHeader>
              <CardTitle>Personalized Recommendations</CardTitle>
              <CardDescription>Workouts tailored to your fitness level and goals</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <WorkoutCard
                  title="Weight Loss Circuit"
                  level="Intermediate"
                  duration="40 min"
                  calories="350"
                  image="/placeholder.svg?height=200&width=300"
                />
                <WorkoutCard
                  title="Muscle Building Basics"
                  level="Beginner"
                  duration="45 min"
                  calories="280"
                  image="/placeholder.svg?height=200&width=300"
                />
                <WorkoutCard
                  title="Endurance Builder"
                  level="Intermediate"
                  duration="35 min"
                  calories="300"
                  image="/placeholder.svg?height=200&width=300"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="saved">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <WorkoutCard
              title="Full Body HIIT"
              level="Intermediate"
              duration="30 min"
              calories="320"
              image="/placeholder.svg?height=200&width=300"
            />
            <WorkoutCard
              title="Yoga Flow"
              level="All Levels"
              duration="40 min"
              calories="150"
              image="/placeholder.svg?height=200&width=300"
            />
          </div>
        </TabsContent>
        <TabsContent value="my-workouts">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <WorkoutCard
              title="My Custom Routine"
              level="Advanced"
              duration="55 min"
              calories="420"
              image="/placeholder.svg?height=200&width=300"
            />
            <Card className="flex flex-col items-center justify-center p-6 border-dashed">
              <Plus className="h-8 w-8 text-muted-foreground mb-2" />
              <p className="text-muted-foreground font-medium">Create New Workout</p>
              <Button variant="outline" className="mt-4">
                Get Started
              </Button>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

