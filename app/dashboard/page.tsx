import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Calendar, Dumbbell, LineChart, Plus, Target, Trophy, Users } from "lucide-react"
import { WorkoutCard } from "@/components/workout-card"
import { BuddySuggestion } from "@/components/buddy-suggestion"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between gap-4 md:items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, Alex! Track your progress and connect with buddies.</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Log Workout
        </Button>
      </div>

      {/* Stats Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Weekly Workouts</CardTitle>
            <Dumbbell className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4/5</div>
            <p className="text-xs text-muted-foreground">1 more to reach your goal</p>
            <Progress value={80} className="mt-2" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Streak</CardTitle>
            <Trophy className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12 days</div>
            <p className="text-xs text-muted-foreground">+3 days from last week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Goal Progress</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">68%</div>
            <p className="text-xs text-muted-foreground">Weight loss goal: 10lbs</p>
            <Progress value={68} className="mt-2" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Buddies</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7</div>
            <p className="text-xs text-muted-foreground">3 new connections this week</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="workouts">Workouts</TabsTrigger>
          <TabsTrigger value="buddies">Buddies</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="lg:col-span-4">
              <CardHeader>
                <CardTitle>Weekly Activity</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <div className="h-[200px] w-full flex items-end justify-between">
                  {[40, 30, 70, 80, 100, 60, 20].map((height, i) => (
                    <div key={i} className="relative h-full flex items-end">
                      <div className="w-8 bg-primary rounded-t-md mx-1" style={{ height: `${height}%` }} />
                      <span className="absolute bottom-[-20px] text-xs text-muted-foreground left-1/2 transform -translate-x-1/2">
                        {["M", "T", "W", "T", "F", "S", "S"][i]}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle>Upcoming Workouts</CardTitle>
                <CardDescription>Your scheduled sessions for the week</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-2" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">HIIT Training</p>
                      <p className="text-xs text-muted-foreground">Today, 6:00 PM</p>
                    </div>
                    <Button variant="outline" size="sm">
                      <Calendar className="mr-2 h-4 w-4" />
                      Details
                    </Button>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-2" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Running with Sarah</p>
                      <p className="text-xs text-muted-foreground">Tomorrow, 7:30 AM</p>
                    </div>
                    <Button variant="outline" size="sm">
                      <Calendar className="mr-2 h-4 w-4" />
                      Details
                    </Button>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-2" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Strength Training</p>
                      <p className="text-xs text-muted-foreground">Friday, 5:00 PM</p>
                    </div>
                    <Button variant="outline" size="sm">
                      <Calendar className="mr-2 h-4 w-4" />
                      Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="workouts" className="space-y-4">
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
            <Card className="flex flex-col items-center justify-center p-6 border-dashed">
              <Plus className="h-8 w-8 text-muted-foreground mb-2" />
              <p className="text-muted-foreground font-medium">Browse More Workouts</p>
              <Button variant="outline" className="mt-4">
                Explore Library
              </Button>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="buddies" className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <BuddySuggestion
              name="Sarah Johnson"
              goal="Weight Loss"
              compatibility="92%"
              image="/placeholder.svg?height=100&width=100"
            />
            <BuddySuggestion
              name="Mike Chen"
              goal="Muscle Building"
              compatibility="87%"
              image="/placeholder.svg?height=100&width=100"
            />
            <BuddySuggestion
              name="Emma Wilson"
              goal="Marathon Training"
              compatibility="85%"
              image="/placeholder.svg?height=100&width=100"
            />
            <BuddySuggestion
              name="James Rodriguez"
              goal="Overall Fitness"
              compatibility="81%"
              image="/placeholder.svg?height=100&width=100"
            />
            <BuddySuggestion
              name="Aisha Patel"
              goal="Yoga & Flexibility"
              compatibility="78%"
              image="/placeholder.svg?height=100&width=100"
            />
            <Card className="flex flex-col items-center justify-center p-6 border-dashed">
              <Users className="h-8 w-8 text-muted-foreground mb-2" />
              <p className="text-muted-foreground font-medium">Find More Buddies</p>
              <Button variant="outline" className="mt-4">
                Browse Community
              </Button>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="analytics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Fitness Progress</CardTitle>
              <CardDescription>Track your improvements over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center border rounded-md">
                <div className="flex flex-col items-center text-center p-4">
                  <LineChart className="h-10 w-10 text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium">Detailed Analytics</h3>
                  <p className="text-sm text-muted-foreground max-w-md">
                    View comprehensive charts and statistics about your workouts, nutrition, and body metrics.
                  </p>
                  <Button className="mt-4">View Full Analytics</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

