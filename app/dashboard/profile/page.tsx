"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Camera, Edit, Save } from "lucide-react"

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between gap-4 md:items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">My Profile</h1>
          <p className="text-muted-foreground">Manage your account settings and profile information.</p>
        </div>
        <Button variant={isEditing ? "default" : "outline"} onClick={() => setIsEditing(!isEditing)}>
          {isEditing ? (
            <>
              <Save className="mr-2 h-4 w-4" /> Save Changes
            </>
          ) : (
            <>
              <Edit className="mr-2 h-4 w-4" /> Edit Profile
            </>
          )}
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-7">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Profile Picture</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <div className="relative mb-4">
              <div className="h-32 w-32 rounded-full overflow-hidden border-4 border-muted">
                <img src="/placeholder.svg?height=128&width=128" alt="Profile" className="object-cover w-full h-full" />
              </div>
              {isEditing && (
                <Button size="icon" className="absolute bottom-0 right-0 rounded-full h-8 w-8">
                  <Camera className="h-4 w-4" />
                </Button>
              )}
            </div>
            <div className="text-center">
              <h3 className="font-bold text-lg">Alex Johnson</h3>
              <p className="text-sm text-muted-foreground">@alexjohnson</p>
            </div>
            <div className="grid grid-cols-2 gap-4 w-full mt-6">
              <div className="text-center">
                <p className="text-2xl font-bold">12</p>
                <p className="text-xs text-muted-foreground">Buddies</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">87</p>
                <p className="text-xs text-muted-foreground">Workouts</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6 md:col-span-5">
          <Tabs defaultValue="personal" className="space-y-4">
            <TabsList>
              <TabsTrigger value="personal">Personal Info</TabsTrigger>
              <TabsTrigger value="fitness">Fitness Profile</TabsTrigger>
              <TabsTrigger value="privacy">Privacy</TabsTrigger>
            </TabsList>
            <TabsContent value="personal">
              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>Update your personal details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First name</Label>
                      <Input id="firstName" defaultValue="Alex" disabled={!isEditing} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last name</Label>
                      <Input id="lastName" defaultValue="Johnson" disabled={!isEditing} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue="alex@example.com" disabled={!isEditing} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="username">Username</Label>
                    <Input id="username" defaultValue="alexjohnson" disabled={!isEditing} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea
                      id="bio"
                      defaultValue="Fitness enthusiast focused on weight loss and building strength. Love outdoor activities and group workouts!"
                      disabled={!isEditing}
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="fitness">
              <Card>
                <CardHeader>
                  <CardTitle>Fitness Profile</CardTitle>
                  <CardDescription>Update your fitness goals and preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="fitnessGoal">Primary Fitness Goal</Label>
                    <select
                      id="fitnessGoal"
                      className="w-full p-2 rounded-md border"
                      defaultValue="lose-weight"
                      disabled={!isEditing}
                    >
                      <option value="lose-weight">Lose Weight</option>
                      <option value="build-muscle">Build Muscle</option>
                      <option value="improve-fitness">Improve Overall Fitness</option>
                      <option value="train-event">Train for an Event</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="fitnessLevel">Fitness Level</Label>
                    <select
                      id="fitnessLevel"
                      className="w-full p-2 rounded-md border"
                      defaultValue="intermediate"
                      disabled={!isEditing}
                    >
                      <option value="beginner">Beginner</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label>Preferred Workout Types</Label>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="cardio" defaultChecked disabled={!isEditing} />
                        <Label htmlFor="cardio">Cardio</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="strength" defaultChecked disabled={!isEditing} />
                        <Label htmlFor="strength">Strength Training</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="hiit" defaultChecked disabled={!isEditing} />
                        <Label htmlFor="hiit">HIIT</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="yoga" disabled={!isEditing} />
                        <Label htmlFor="yoga">Yoga</Label>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="availability">Workout Availability</Label>
                    <Textarea
                      id="availability"
                      defaultValue="Weekdays: 6-7 AM, Weekends: Flexible"
                      disabled={!isEditing}
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="privacy">
              <Card>
                <CardHeader>
                  <CardTitle>Privacy Settings</CardTitle>
                  <CardDescription>Control who can see your profile and activity</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Profile Visibility</Label>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <input type="radio" id="public" name="visibility" defaultChecked disabled={!isEditing} />
                        <Label htmlFor="public">Public - Anyone can see your profile</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="radio" id="buddies" name="visibility" disabled={!isEditing} />
                        <Label htmlFor="buddies">Buddies Only - Only your connections can see your profile</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="radio" id="private" name="visibility" disabled={!isEditing} />
                        <Label htmlFor="private">Private - Only you can see your profile</Label>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Activity Sharing</Label>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="shareWorkouts" defaultChecked disabled={!isEditing} />
                        <Label htmlFor="shareWorkouts">Share completed workouts</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="shareProgress" defaultChecked disabled={!isEditing} />
                        <Label htmlFor="shareProgress">Share fitness progress</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="shareLocation" disabled={!isEditing} />
                        <Label htmlFor="shareLocation">Share workout location</Label>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <p className="text-sm text-muted-foreground">
                    Your privacy is important to us. Read our{" "}
                    <a href="#" className="text-primary hover:underline">
                      Privacy Policy
                    </a>
                    .
                  </p>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

