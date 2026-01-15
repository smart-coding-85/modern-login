import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { cn } from "@/lib/utils"
import { Eye, EyeOff } from "lucide-react"

export default function RegisterPage() {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 1500)
  }

  return (
    <div className="min-h-svh w-full flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 p-4">
      <div className="w-full max-w-[900px] bg-white rounded-3xl shadow-2xl shadow-slate-300/50 overflow-hidden flex flex-col md:flex-row">
        <div className="hidden md:block w-1/2 relative overflow-hidden bg-white">
          <svg 
            className="absolute top-0 left-0 w-full" 
            viewBox="0 0 400 200" 
            preserveAspectRatio="none"
            style={{ height: '180px' }}
          >
            <defs>
              <linearGradient id="purpleGradientTop" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="50%" stopColor="#9333ea" />
                <stop offset="100%" stopColor="#6366f1" />
              </linearGradient>
            </defs>
            <path 
              d="M0,0 L0,120 
                 Q30,140 60,110 
                 Q90,80 130,100 
                 Q160,120 200,90 
                 Q240,60 280,95 
                 Q320,130 360,100 
                 Q390,80 400,110 
                 L400,0 Z" 
              fill="url(#purpleGradientTop)"
            />
          </svg>

          <svg 
            className="absolute bottom-0 left-0 w-full" 
            viewBox="0 0 400 200" 
            preserveAspectRatio="none"
            style={{ height: '180px' }}
          >
            <defs>
              <linearGradient id="purpleGradientBottom" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#6366f1" />
                <stop offset="50%" stopColor="#9333ea" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
            <path 
              d="M0,200 L0,80 
                 Q40,60 80,90 
                 Q120,120 160,85 
                 Q200,50 240,80 
                 Q280,110 320,75 
                 Q360,40 400,70 
                 L400,200 Z" 
              fill="url(#purpleGradientBottom)"
            />
          </svg>

          <div className="absolute inset-0 flex flex-col items-center justify-center px-8 text-center z-10">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              Welcome!
            </h2>
            <p className="text-slate-600 text-sm md:text-base max-w-[280px] leading-relaxed">
              Join us today and discover amazing features. Create your account to get started.
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-slate-800 mb-2">
              Create Account
            </h1>
            <p className="text-slate-500 text-sm">
              Fill in your details to register
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-14 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-l-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className={cn(
                  "w-full pl-20 pr-4 py-3.5 rounded-xl text-sm",
                  "bg-slate-50 border border-slate-200",
                  "text-slate-800 placeholder:text-slate-400",
                  "focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-400",
                  "transition-all duration-200"
                )}
              />
            </div>

            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-14 bg-gradient-to-br from-orange-400 to-orange-500 rounded-l-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={cn(
                  "w-full pl-20 pr-4 py-3.5 rounded-xl text-sm",
                  "bg-slate-50 border border-slate-200",
                  "text-slate-800 placeholder:text-slate-400",
                  "focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-400",
                  "transition-all duration-200"
                )}
              />
            </div>

            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-14 bg-gradient-to-br from-violet-500 to-purple-600 rounded-l-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className={cn(
                  "w-full pl-20 pr-12 py-3.5 rounded-xl text-sm",
                  "bg-slate-50 border border-slate-200",
                  "text-slate-800 placeholder:text-slate-400",
                  "focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-400",
                  "transition-all duration-200"
                )}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-l-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className={cn(
                  "w-full pl-20 pr-12 py-3.5 rounded-xl text-sm",
                  "bg-slate-50 border border-slate-200",
                  "text-slate-800 placeholder:text-slate-400",
                  "focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-400",
                  "transition-all duration-200"
                )}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
              >
                {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

            <div className="flex items-start gap-2 text-sm">
              <input
                type="checkbox"
                required
                className="w-4 h-4 mt-0.5 rounded border-slate-300 text-violet-500 focus:ring-violet-500/20 accent-violet-500"
              />
              <span className="text-slate-600">
                I agree to the{" "}
                <button type="button" className="text-violet-600 hover:text-violet-700 font-medium">
                  Terms of Service
                </button>{" "}
                and{" "}
                <button type="button" className="text-violet-600 hover:text-violet-700 font-medium">
                  Privacy Policy
                </button>
              </span>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={cn(
                "w-full py-4 rounded-full font-semibold text-white text-sm uppercase tracking-wider",
                "bg-gradient-to-r from-violet-500 to-purple-600",
                "hover:from-violet-600 hover:to-purple-700",
                "shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50",
                "active:scale-[0.98] transition-all duration-200",
                "disabled:opacity-60 disabled:cursor-not-allowed disabled:active:scale-100",
                "flex items-center justify-center gap-2"
              )}
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Creating account...
                </>
              ) : (
                "Sign Up"
              )}
            </button>
          </form>

          <p className="text-center text-sm text-slate-500 mt-6">
            Already have an account?{" "}
            <button
              onClick={() => navigate("/login")}
              className="text-violet-600 font-semibold hover:text-violet-700 transition-colors"
            >
              Sign In
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}
