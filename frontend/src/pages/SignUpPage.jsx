import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Eye, EyeOff, Loader2, Lock, Mail, MessageSquare, User } from "lucide-react";
import { Link } from "react-router-dom";

import AuthImagePattern from "../components/AuthImagePattern";
import toast from "react-hot-toast";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const { signup, isSigningUp } = useAuthStore();

  const validateForm = () => {
    if (!formData.fullName.trim()) return toast.error("Full name is required");
    if (!formData.email.trim()) return toast.error("Email is required");
    if (!/\S+@\S+\.\S+/.test(formData.email)) return toast.error("Invalid email format");
    if (!formData.password) return toast.error("Password is required");
    if (formData.password.length < 6) return toast.error("Password must be at least 6 characters");

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const success = validateForm();

    if (success === true) signup(formData);
  };

return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-gradient-to-br from-base-100 via-base-50 to-base-200">
      {/* left side */}
      <div className="flex flex-col justify-center items-center p-6 sm:p-12 relative overflow-hidden">
        {/* Subtle background effects */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-r from-secondary to-accent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-r from-primary to-secondary rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-gradient-to-r from-accent to-primary rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
        </div>

        <div className="w-full max-w-md space-y-8 relative z-10">
          {/* LOGO */}
          <div className="text-center mb-8">
            <div className="flex flex-col items-center gap-2 group">
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-secondary to-accent rounded-xl blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                {/* Main logo container */}
                <div className="relative size-14 rounded-xl bg-gradient-to-r from-secondary to-accent flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg shadow-secondary/25 hover:shadow-xl hover:shadow-secondary/40">
                  <MessageSquare className="size-7 text-white drop-shadow-sm" />
                </div>
              </div>
              
              <h1 className="text-2xl font-bold mt-2 bg-gradient-to-r from-base-content via-secondary to-base-content bg-clip-text text-transparent">
                Create Account
              </h1>
              <p className="text-base-content/60">Get started with your free account</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium text-base-content/80">Full Name</span>
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none transition-colors duration-200">
                  <User className="size-5 text-base-content/40 group-focus-within:text-secondary group-focus-within:scale-110 transition-all duration-200" />
                </div>
                <input
                  type="text"
                  className="input input-bordered w-full pl-10 pr-4 h-12 transition-all duration-200 bg-base-100/80 backdrop-blur-sm border-base-300/60 hover:border-secondary/50 focus:border-secondary focus:bg-base-100 focus:shadow-md focus:shadow-secondary/10 hover:shadow-sm"
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium text-base-content/80">Email</span>
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none transition-colors duration-200">
                  <Mail className="size-5 text-base-content/40 group-focus-within:text-secondary group-focus-within:scale-110 transition-all duration-200" />
                </div>
                <input
                  type="email"
                  className="input input-bordered w-full pl-10 pr-4 h-12 transition-all duration-200 bg-base-100/80 backdrop-blur-sm border-base-300/60 hover:border-secondary/50 focus:border-secondary focus:bg-base-100 focus:shadow-md focus:shadow-secondary/10 hover:shadow-sm"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium text-base-content/80">Password</span>
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none transition-colors duration-200">
                  <Lock className="size-5 text-base-content/40 group-focus-within:text-secondary group-focus-within:scale-110 transition-all duration-200" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  className="input input-bordered w-full pl-10 pr-12 h-12 transition-all duration-200 bg-base-100/80 backdrop-blur-sm border-base-300/60 hover:border-secondary/50 focus:border-secondary focus:bg-base-100 focus:shadow-md focus:shadow-secondary/10 hover:shadow-sm"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-base-content/40 hover:text-secondary transition-all duration-200 hover:scale-110"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="size-5" />
                  ) : (
                    <Eye className="size-5" />
                  )}
                </button>
              </div>
            </div>

            <button 
              onClick={handleSubmit}
              className="btn btn-primary w-full h-12 bg-gradient-to-r from-secondary to-accent hover:from-secondary/90 hover:to-accent/90 border-0 text-white font-semibold shadow-lg shadow-secondary/25 hover:shadow-xl hover:shadow-secondary/30 hover:scale-[1.02] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100" 
              disabled={isSigningUp}
            >
              {isSigningUp ? (
                <div className="flex items-center gap-2">
                  <Loader2 className="size-5 animate-spin" />
                  Creating Account...
                </div>
              ) : (
                "Create Account"
              )}
            </button>
          </div>

          <div className="text-center">
            <p className="text-base-content/60">
              Already have an account?{" "}
              <Link to="/login" className="link link-primary font-medium hover:text-secondary transition-colors duration-200">
                Sign in
              </Link>
            </p>
          </div>

          {/* Additional signup benefits */}
          <div className="pt-4 space-y-4">
            <div className="divider text-base-content/40 text-sm">What you get</div>
            <div className="grid grid-cols-1 gap-3">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/5 border border-secondary/10 backdrop-blur-sm hover:bg-secondary/10 transition-colors duration-200">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span className="text-sm text-base-content/70">Instant messaging with friends</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-accent/5 border border-accent/10 backdrop-blur-sm hover:bg-accent/10 transition-colors duration-200">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-sm text-base-content/70">Share photos and memories</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10 backdrop-blur-sm hover:bg-primary/10 transition-colors duration-200">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm text-base-content/70">Secure and private conversations</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* right side */}
      <AuthImagePattern
        title="Join our community"
        subtitle="Connect with friends, share moments, and stay in touch with your loved ones."
      />
    </div>
  );
};

export default SignUpPage;