"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Smartphone, Shield, ArrowLeft } from "lucide-react"
import { useSearchParams } from "next/navigation"

export default function AuthPage() {
  const [step, setStep] = useState<"phone" | "otp">("phone")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [otp, setOtp] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const searchParams = useSearchParams()
  const role = searchParams.get("role") as "buyer" | "artisan" | null

  const handleSendOTP = async () => {
    if (phoneNumber.length !== 10) return
    setIsLoading(true)

    // Mock OTP sending
    setTimeout(() => {
      setIsLoading(false)
      setStep("otp")
      console.log("[auth] OTP sent to", phoneNumber)
    }, 1500)
  }

  const handleVerifyOTP = async () => {
    if (otp.length !== 6) return
    setIsLoading(true)

    // Mock OTP verification
    setTimeout(() => {
      setIsLoading(false)
      if (otp === "123456") {
        // Redirect based on role
        if (role === "artisan") {
          window.location.href = "/dashboard"
        } else {
          window.location.href = "/home"
        }
      } else {
        alert("Invalid OTP. Use 123456 for demo.")
      }
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-riv-parchment flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <img
            src="https://res.cloudinary.com/dsmxrbinn/image/upload/v1758380091/logo_hng7q9.png"
            alt="Rivayat"
            className="h-12 mx-auto mb-4"
          />
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
                      onChange={(e) =>
                        setPhoneNumber(e.target.value.replace(/\D/g, "").slice(0, 10))
                      }
                      className="rounded-l-none"
                    />
                  </div>
                  <p className="text-xs text-riv-maroon/60">
                    We'll send you a verification code via SMS
                  </p>
                </div>

                <Button
                  onClick={handleSendOTP}
                  disabled={phoneNumber.length !== 10 || isLoading}
                  className="w-full bg-riv-saffron hover:bg-riv-saffron/90 text-white"
                >
                  {isLoading ? "Sending..." : "Send OTP"}
                </Button>
              </>
            )}

            {step === "otp" && (
              <>
                <div className="text-center">
                  <p className="text-sm text-riv-maroon/80 mb-4">
                    Enter the 6-digit code sent to
                  </p>
                  <p className="font-medium text-riv-maroon">+91 {phoneNumber}</p>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setStep("phone")}
                    className="text-riv-saffron mt-2"
                  >
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
                    onChange={(e) =>
                      setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))
                    }
                    className="text-center text-lg tracking-widest"
                  />
                </div>

                <Button
                  onClick={handleVerifyOTP}
                  disabled={otp.length !== 6 || isLoading}
                  className="w-full bg-riv-saffron hover:bg-riv-saffron/90 text-white"
                >
                  {isLoading ? "Verifying..." : "Verify OTP"}
                </Button>

                <div className="text-center">
                  <Badge
                    variant="outline"
                    className="text-riv-saffron border-riv-saffron"
                  >
                    Demo: Use 123456 as OTP
                  </Badge>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
