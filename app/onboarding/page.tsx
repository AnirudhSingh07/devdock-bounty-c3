"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider"
import { Dumbbell, ArrowRight, ArrowLeft } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function OnboardingPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [fitnessGoal, setFitnessGoal] = useState("lose-weight")
  const [fitnessLevel, setFitnessLevel] = useState(2)
  const [isLoading, setIsLoading] = useState(false)

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1)
    } else {
      setIsLoading(true)
      // Simulate completion
      setTimeout(() => {
        setIsLoading(false)
        router.push("/dashboard")
      }, 1500)
    }
  }

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-muted/30">
      <div className="flex items-center mb-8">
        <Dumbbell className="mr-2 h-6 w-6 text-primary" />
        <h1 className="text-2xl font-bold">Fitness Buddy</h1>
      </div>

      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle className="text-2xl">Set up your profile</CardTitle>
          <CardDescription>
            Tell us about your fitness journey so we can match you with the right buddies
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-8">
            <div className="flex justify-between mb-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`flex flex-col items-center ${i <= step ? "text-primary" : "text-muted-foreground"}`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 ${
                      i < step
                        ? "bg-primary text-primary-foreground"
                        : i === step
                          ? "border-2 border-primary"
                          : "border-2 border-muted-foreground"
                    }`}
                  >
                    {i < step ? "✓" : i}
                  </div>
                  <span className="text-xs">{i === 1 ? "Goals" : i === 2 ? "Experience" : "Preferences"}</span>
                </div>
              ))}
            </div>
            <div className="w-full bg-muted h-2 rounded-full">
              <div
                className="bg-primary h-2 rounded-full transition-all"
                style={{ width: `${((step - 1) / 2) * 100}%` }}
              />
            </div>
          </div>

          {step === 1 && (
            <div className="space-y-4">
              <h3 className="text-lg font-medium">What's your primary fitness goal?</h3>
              <RadioGroup value={fitnessGoal} onValueChange={setFitnessGoal}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="lose-weight" id="lose-weight" />
                    <Label htmlFor="lose-weight">Lose weight</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="build-muscle" id="build-muscle" />
                    <Label htmlFor="build-muscle">Build muscle</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="improve-fitness" id="improve-fitness" />
                    <Label htmlFor="improve-fitness">Improve overall fitness</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="train-event" id="train-event" />
                    <Label htmlFor="train-event">Train for an event</Label>
                  </div>
                </div>
              </RadioGroup>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-4">What's your fitness level?</h3>
                <Slider
                  value={[fitnessLevel]}
                  min={1}
                  max={5}
                  step={1}
                  onValueChange={(value) => setFitnessLevel(value[0])}
                  className="mb-6"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Beginner</span>
                  <span>Intermediate</span>
                  <span>Advanced</span>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">How often do you exercise?</h3>
                <RadioGroup defaultValue="2-3-times">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="rarely" id="rarely" />
                      <Label htmlFor="rarely">Rarely</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="1-time" id="1-time" />
                      <Label htmlFor="1-time">1 time a week</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="2-3-times" id="2-3-times" />
                      <Label htmlFor="2-3-times">2-3 times a week</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="4-plus" id="4-plus" />
                      <Label htmlFor="4-plus">4+ times a week</Label>
                    </div>
                  </div>
                </RadioGroup>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <h3 className="text-lg font-medium">What types of workouts do you prefer?</h3>
              <Tabs defaultValue="cardio">
                <TabsList className="grid grid-cols-4 mb-4">
                  <TabsTrigger value="cardio">Cardio</TabsTrigger>
                  <TabsTrigger value="strength">Strength</TabsTrigger>
                  <TabsTrigger value="flexibility">Flexibility</TabsTrigger>
                  <TabsTrigger value="sports">Sports</TabsTrigger>
                </TabsList>
                <TabsContent value="cardio" className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="running" className="rounded text-primary" />
                    <Label htmlFor="running">Running</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="cycling" className="rounded text-primary" />
                    <Label htmlFor="cycling">Cycling</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="swimming" className="rounded text-primary" />
                    <Label htmlFor="swimming">Swimming</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="hiit" className="rounded text-primary" />
                    <Label htmlFor="hiit">HIIT</Label>
                  </div>
                </TabsContent>
                <TabsContent value="strength" className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="weightlifting" className="rounded text-primary" />
                    <Label htmlFor="weightlifting">Weightlifting</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="bodyweight" className="rounded text-primary" />
                    <Label htmlFor="bodyweight">Bodyweight</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="crossfit" className="rounded text-primary" />
                    <Label htmlFor="crossfit">CrossFit</Label>
                  </div>
                </TabsContent>
                <TabsContent value="flexibility" className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="yoga" className="rounded text-primary" />
                    <Label htmlFor="yoga">Yoga</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="pilates" className="rounded text-primary" />
                    <Label htmlFor="pilates">Pilates</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="stretching" className="rounded text-primary" />
                    <Label htmlFor="stretching">Stretching</Label>
                  </div>
                </TabsContent>
                <TabsContent value="sports" className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="basketball" className="rounded text-primary" />
                    <Label htmlFor="basketball">Basketball</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="soccer" className="rounded text-primary" />
                    <Label htmlFor="soccer">Soccer</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="tennis" className="rounded text-primary" />
                    <Label htmlFor="tennis">Tennis</Label>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={handleBack} disabled={step === 1}>
            <ArrowLeft className="mr-2 h-4 w-4" /> Back
          </Button>
          <Button onClick={handleNext} disabled={isLoading}>
            {isLoading ? "Finalizing..." : step === 3 ? "Finish" : "Next"}
            {!isLoading && step !== 3 && <ArrowRight className="ml-2 h-4 w-4" />}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

