function GlassCard({ children }) {

  return (

    <div className="

      bg-white/10

      backdrop-blur-2xl

      border

      border-white/20

      rounded-3xl

      shadow-2xl

      p-6

      hover:scale-[1.02]

      transition-all

      duration-300

    ">

      {children}

    </div>

  );

}

export default GlassCard;