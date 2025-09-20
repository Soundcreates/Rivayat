"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Badge } from "@/components/ui/badge"
import { Smartphone, Shield, ArrowLeft } from "lucide-react"

export default function AuthPage() {
  const [step, setStep] = useState<"phone" | "otp" | "profile">("phone")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [otp, setOtp] = useState("")
  const [userType, setUserType] = useState<"buyer" | "artisan">("buyer")
  const [isLoading, setIsLoading] = useState(false)

  const handleSendOTP = async () => {
    if (phoneNumber.length !== 10) return

    setIsLoading(true)
    // Mock OTP sending
    setTimeout(() => {
      setIsLoading(false)
      setStep("otp")
      console.log("[v0] OTP sent to", phoneNumber)
    }, 1500)
  }

  const handleVerifyOTP = async () => {
    if (otp.length !== 6) return

    setIsLoading(true)
    // Mock OTP verification
    setTimeout(() => {
      setIsLoading(false)
      if (otp === "123456") {
        setStep("profile")
      } else {
        alert("Invalid OTP. Try 123456 for demo.")
      }
    }, 1000)
  }

  const handleCompleteSignup = async () => {
    setIsLoading(true)
    // Mock profile creation
    setTimeout(() => {
      setIsLoading(false)
      console.log("[v0] User created as", userType)

      // Redirect based on user type
      if (userType === "artisan") {
        window.location.href = "/dashboard"
      } else {
        window.location.href = "/"
      }
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-riv-parchment flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <img src="/brand/logo.png" alt="Rivayat" className="h-12 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-riv-maroon">Welcome to Rivayat</h1>
          <p className="text-riv-maroon/70">Discover authentic Indian crafts</p>
        </div>

        <Card className="shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-2">
              {step === "phone" && (
                <>
                  <Smartphone className="h-5 w-5" />
                  Enter Phone Number
                </>
              )}
              {step === "otp" && (
                <>
                  <Shield className="h-5 w-5" />
                  Verify OTP
                </>
              )}
              {step === "profile" && "Complete Profile"}
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-6">
            {step === "phone" && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="phone">Mobile Number</Label>
                  <div className="flex">
                    <div className="flex items-center px-3 border border-r-0 rounded-l-md bg-gray-50">
                      <span className="text-sm text-gray-600">+91</span>
                    </div>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter 10-digit mobile number"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, "").slice(0, 10))}
                      className="rounded-l-none"
                    />
                  </div>
                  <p className="text-xs text-riv-maroon/60">We'll send you a verification code via SMS</p>
                </div>

                <Button
                  onClick={handleSendOTP}
                  disabled={phoneNumber.length !== 10 || isLoading}
                  className="w-full bg-riv-saffron hover:bg-riv-saffron/90 text-white"
                >
                  {isLoading ? "Sending..." : "Send OTP"}
                </Button>

                <div className="text-center">
                  <p className="text-xs text-riv-maroon/60">
                    By continuing, you agree to our{" "}
                    <a href="/terms" className="text-riv-saffron hover:underline">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="/privacy" className="text-riv-saffron hover:underline">
                      Privacy Policy
                    </a>
                  </p>
                </div>
              </>
            )}

            {step === "otp" && (
              <>
                <div className="text-center">
                  <p className="text-sm text-riv-maroon/80 mb-4">Enter the 6-digit code sent to</p>
                  <p className="font-medium text-riv-maroon">+91 {phoneNumber}</p>
                  <Button variant="ghost" size="sm" onClick={() => setStep("phone")} className="text-riv-saffron mt-2">
                    <ArrowLeft className="h-4 w-4 mr-1" />
                    Change Number
                  </Button>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="otp">Verification Code</Label>
                  <Input
                    id="otp"
                    type="text"
                    placeholder="Enter 6-digit OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
                    className="text-center text-lg tracking-widest"
                  />
                  <div className="flex justify-between items-center">
                    <p className="text-xs text-riv-maroon/60">Didn't receive code?</p>
                    <Button variant="ghost" size="sm" className="text-riv-saffron">
                      Resend OTP
                    </Button>
                  </div>
                </div>

                <Button
                  onClick={handleVerifyOTP}
                  disabled={otp.length !== 6 || isLoading}
                  className="w-full bg-riv-saffron hover:bg-riv-saffron/90 text-white"
                >
                  {isLoading ? "Verifying..." : "Verify OTP"}
                </Button>

                <div className="text-center">
                  <Badge variant="outline" className="text-riv-saffron border-riv-saffron">
                    Demo: Use 123456 as OTP
                  </Badge>
                </div>
              </>
            )}

            {step === "profile" && (
              <>
                <div className="text-center">
                  <p className="text-sm text-riv-maroon/80">Tell us about yourself to personalize your experience</p>
                </div>

                <div className="space-y-4">
                  <Label>I am a:</Label>
                  <RadioGroup value={userType} onValueChange={(value: "buyer" | "artisan") => setUserType(value)}>
                    <div className="flex items-center space-x-2 p-4 border rounded-lg cursor-pointer hover:bg-riv-parchment/50">
                      <RadioGroupItem value="buyer" id="buyer" />
                      <Label htmlFor="buyer" className="flex-1 cursor-pointer">
                        <div>
                          <p className="font-medium text-riv-maroon">Buyer</p>
                          <p className="text-sm text-riv-maroon/70">I want to discover and purchase authentic crafts</p>
                        </div>
                      </Label>
                    </div>

                    <div className="flex items-center space-x-2 p-4 border rounded-lg cursor-pointer hover:bg-riv-parchment/50">
                      <RadioGroupItem value="artisan" id="artisan" />
                      <Label htmlFor="artisan" className="flex-1 cursor-pointer">
                        <div>
                          <p className="font-medium text-riv-maroon">Artisan</p>
                          <p className="text-sm text-riv-maroon/70">I create and sell handmade crafts</p>
                        </div>
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <Button
                  onClick={handleCompleteSignup}
                  disabled={isLoading}
                  className="w-full bg-riv-saffron hover:bg-riv-saffron/90 text-white"
                >
                  {isLoading ? "Creating Account..." : "Complete Setup"}
                </Button>

                {userType === "artisan" && (
                  <div className="bg-riv-saffron/10 p-4 rounded-lg">
                    <p className="text-sm text-riv-saffron">
                      <strong>Artisan Benefits:</strong> Access to dashboard, catalog management, order tracking, and
                      direct customer communication.
                    </p>
                  </div>
                )}
              </>
            )}
          </CardContent>
        </Card>

        {/* Trust Indicators */}
        <div className="text-center mt-6 space-y-2">
          <div className="flex justify-center space-x-6 text-xs text-riv-maroon/60">
            <span className="flex items-center gap-1">
              <Shield className="h-3 w-3" />
              Secure Login
            </span>
            <span>No Spam</span>
            <span>Trusted by 10,000+ users</span>
          </div>
        </div>
      </div>
    </div>
  )
}
