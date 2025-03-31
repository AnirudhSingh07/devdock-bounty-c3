import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { BuddySuggestion } from "@/components/buddy-suggestion"
import { Filter, Search, UserPlus } from "lucide-react"

export default function BuddiesPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between gap-4 md:items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Fitness Buddies</h1>
          <p className="text-muted-foreground">Connect with people who share your fitness goals.</p>
        </div>
        <Button>
          <UserPlus className="mr-2 h-4 w-4" /> Find Buddies
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search buddies..." className="w-full pl-8" />
        </div>
        <Button variant="outline" className="md:w-auto">
          <Filter className="mr-2 h-4 w-4" /> Filter
        </Button>
      </div>

      <Tabs defaultValue="suggestions" className="space-y-4">
        <TabsList>
          <TabsTrigger value="suggestions">Suggestions</TabsTrigger>
          <TabsTrigger value="my-buddies">My Buddies</TabsTrigger>
          <TabsTrigger value="requests">Requests</TabsTrigger>
        </TabsList>
        <TabsContent value="suggestions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Top Matches</CardTitle>
              <CardDescription>People with similar fitness goals and schedules</CardDescription>
            </CardHeader>
            <CardContent>
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
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>More Suggestions</CardTitle>
              <CardDescription>Other fitness enthusiasts you might connect with</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
                <BuddySuggestion
                  name="David Kim"
                  goal="Strength Training"
                  compatibility="76%"
                  image="/placeholder.svg?height=100&width=100"
                />
                <BuddySuggestion
                  name="Lisa Thompson"
                  goal="HIIT Workouts"
                  compatibility="74%"
                  image="/placeholder.svg?height=100&width=100"
                />
                <BuddySuggestion
                  name="Carlos Mendez"
                  goal="Calisthenics"
                  compatibility="72%"
                  image="/placeholder.svg?height=100&width=100"
                />
                <BuddySuggestion
                  name="Sophia Lee"
                  goal="Running"
                  compatibility="70%"
                  image="/placeholder.svg?height=100&width=100"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="my-buddies">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="p-4">
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 rounded-full overflow-hidden border-2 border-primary">
                  <img
                    src="/placeholder.svg?height=100&width=100"
                    alt="John Smith"
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
                </div>
                <div>
                  <h3 className="font-medium">John Smith</h3>
                  <p className="text-sm text-muted-foreground">Weight Training</p>
                  <div className="mt-1 text-xs">
                    <span className="text-green-500">● Online</span>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="ml-auto">
                  Message
                </Button>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 rounded-full overflow-hidden border-2 border-primary">
                  <img
                    src="/placeholder.svg?height=100&width=100"
                    alt="Maria Garcia"
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-gray-400 rounded-full border-2 border-white" />
                </div>
                <div>
                  <h3 className="font-medium">Maria Garcia</h3>
                  <p className="text-sm text-muted-foreground">Yoga & Pilates</p>
                  <div className="mt-1 text-xs">
                    <span className="text-gray-500">● Offline</span>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="ml-auto">
                  Message
                </Button>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 rounded-full overflow-hidden border-2 border-primary">
                  <img
                    src="/placeholder.svg?height=100&width=100"
                    alt="Robert Johnson"
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
                </div>
                <div>
                  <h3 className="font-medium">Robert Johnson</h3>
                  <p className="text-sm text-muted-foreground">Running</p>
                  <div className="mt-1 text-xs">
                    <span className="text-green-500">● Online</span>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="ml-auto">
                  Message
                </Button>
              </div>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="requests">
          <Card>
            <CardHeader>
              <CardTitle>Buddy Requests</CardTitle>
              <CardDescription>People who want to connect with you</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 border rounded-lg">
                  <div className="h-12 w-12 rounded-full overflow-hidden">
                    <img
                      src="/placeholder.svg?height=100&width=100"
                      alt="Alex Thompson"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">Alex Thompson</h3>
                    <p className="text-sm text-muted-foreground">CrossFit Enthusiast</p>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      Ignore
                    </Button>
                    <Button size="sm">Accept</Button>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 border rounded-lg">
                  <div className="h-12 w-12 rounded-full overflow-hidden">
                    <img
                      src="/placeholder.svg?height=100&width=100"
                      alt="Jessica Williams"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">Jessica Williams</h3>
                    <p className="text-sm text-muted-foreground">Cardio & HIIT</p>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      Ignore
                    </Button>
                    <Button size="sm">Accept</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

