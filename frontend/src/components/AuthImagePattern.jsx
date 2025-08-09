const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-gradient-to-br from-primary/8 via-secondary/5 to-accent/8 p-12 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-16 left-16 w-32 h-32 bg-primary/15 rounded-full animate-pulse blur-xl"></div>
        <div className="absolute bottom-20 right-16 w-28 h-28 bg-secondary/15 rounded-full animate-pulse blur-xl" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-accent/15 rounded-full animate-pulse blur-xl" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-1/4 right-1/3 w-16 h-16 bg-primary/10 rounded-full animate-pulse blur-lg" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="max-w-md text-center relative z-10">
        <div className="grid grid-cols-3 gap-4 mb-12">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className={`aspect-square rounded-3xl bg-gradient-to-br from-primary/25 to-primary/5 border border-primary/20 backdrop-blur-sm relative overflow-hidden
                ${i % 2 === 0 ? "animate-pulse" : ""} 
                ${i === 4 ? "scale-110 shadow-xl shadow-primary/30 ring-2 ring-primary/20" : "shadow-lg shadow-primary/10"}
                hover:scale-105 hover:shadow-xl hover:shadow-primary/25 transition-all duration-500 cursor-pointer
                group`}
              style={{
                animationDelay: `${i * 150}ms`,
                animationDuration: '3s'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/5 to-transparent opacity-60"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              {/* Subtle pattern overlay */}
              <div className="absolute inset-2 rounded-2xl border border-white/10"></div>
            </div>
          ))}
        </div>
        
        <div className="space-y-6 backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/10">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent leading-tight">
            {title}
          </h2>
          <p className="text-base-content/75 text-lg leading-relaxed font-medium">
            {subtitle}
          </p>
          
          {/* Decorative elements */}
          <div className="flex justify-center space-x-2 pt-4">
            <div className="w-2 h-2 bg-primary/40 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-secondary/40 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <div className="w-2 h-2 bg-accent/40 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthImagePattern;