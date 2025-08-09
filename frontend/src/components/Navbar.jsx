import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { LogOut, MessageSquare, Settings, User } from "lucide-react";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();

   return (
    <header className="bg-gradient-to-r from-base-100/95 via-base-100/98 to-base-100/95 border-b border-base-300/50 fixed w-full top-0 z-40 backdrop-blur-xl bg-base-100/80 shadow-sm">
      <div className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">
          {/* Left side - Logo */}
          <div className="flex items-center gap-8">
            <Link 
              to="/" 
              className="flex items-center gap-2.5 hover:opacity-80 transition-all duration-300 group"
            >
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-lg blur-md opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                {/* Logo container */}
                <div className="relative size-9 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/20 flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-sm group-hover:shadow-md group-hover:shadow-primary/20">
                  <MessageSquare className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
              <h1 className="text-lg font-bold bg-gradient-to-r from-base-content to-primary bg-clip-text text-transparent group-hover:from-primary group-hover:to-secondary transition-all duration-300">
                Chat With PK
              </h1>
            </Link>
          </div>

          {/* Right side - Navigation */}
          <div className="flex items-center gap-2">
            {/* Settings Link */}
            <Link
              to="/settings"
              className="btn btn-sm gap-2 bg-base-200/50 hover:bg-base-200 border-base-300/50 hover:border-base-300 transition-all duration-200 hover:scale-105 hover:shadow-md group backdrop-blur-sm"
            >
              <Settings className="w-4 h-4 text-base-content/70 group-hover:text-primary group-hover:rotate-45 transition-all duration-300" />
              <span className="hidden sm:inline text-base-content/80 group-hover:text-base-content transition-colors duration-200">
                Settings
              </span>
            </Link>

            {authUser && (
              <>
                {/* Profile Link */}
                <Link 
                  to="/profile" 
                  className="btn btn-sm gap-2 bg-primary/10 hover:bg-primary/20 border-primary/20 hover:border-primary/40 text-primary hover:text-primary transition-all duration-200 hover:scale-105 hover:shadow-md hover:shadow-primary/20 group backdrop-blur-sm"
                >
                  <User className="size-5 group-hover:scale-110 transition-transform duration-300" />
                  <span className="hidden sm:inline font-medium">
                    Profile
                  </span>
                </Link>

                {/* Logout Button */}
                <button 
                  className="btn btn-sm gap-2 bg-error/10 hover:bg-error/20 border-error/20 hover:border-error/40 text-error hover:text-error transition-all duration-200 hover:scale-105 hover:shadow-md hover:shadow-error/20 group backdrop-blur-sm"
                  onClick={logout}
                >
                  <LogOut className="size-5 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                  <span className="hidden sm:inline font-medium">
                    Logout
                  </span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Subtle bottom border gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-base-300/50 to-transparent"></div>
    </header>
  );
};

export default Navbar;