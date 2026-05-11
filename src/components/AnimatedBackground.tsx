import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const keyboardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const kbd = keyboardRef.current;
    if (!kbd) return;

    // Hero state
    gsap.set(kbd, {
      x: typeof window !== "undefined" && window.innerWidth > 768 ? 300 : 0,
      y: typeof window !== "undefined" && window.innerWidth > 768 ? -80 : 120,
      scale: typeof window !== "undefined" && window.innerWidth > 768 ? 0.8 : 0.5,
      rotation: -15,
      opacity: 0.85,
    });

    // Animate in
    gsap.to(kbd, { opacity: 0.85, duration: 1, delay: 2.5 });

    // Skills scroll
    ScrollTrigger.create({
      trigger: "#skills",
      start: "top 50%",
      onEnter: () => {
        gsap.to(kbd, {
          x: 0, y: 0, scale: 1.1, rotation: 5,
          duration: 1.2, ease: "power3.out",
        });
      },
      onLeaveBack: () => {
        gsap.to(kbd, {
          x: typeof window !== "undefined" && window.innerWidth > 768 ? 300 : 0,
          y: typeof window !== "undefined" && window.innerWidth > 768 ? -80 : 120,
          scale: typeof window !== "undefined" && window.innerWidth > 768 ? 0.8 : 0.5,
          rotation: -15, duration: 1.2, ease: "power3.out",
        });
      },
    });

    ScrollTrigger.create({
      trigger: "#projects",
      start: "top 60%",
      onEnter: () => {
        gsap.to(kbd, {
          x: typeof window !== "undefined" && window.innerWidth > 768 ? -200 : 0,
          y: 80, scale: 0.9, rotation: 180,
          duration: 1.2, ease: "power3.inOut",
        });
      },
      onLeaveBack: () => {
        gsap.to(kbd, {
          x: 0, y: 0, scale: 1.1, rotation: 5,
          duration: 1.2, ease: "power3.out",
        });
      },
    });

    ScrollTrigger.create({
      trigger: "#contact",
      start: "top 40%",
      onEnter: () => {
        gsap.to(kbd, {
          x: typeof window !== "undefined" && window.innerWidth > 768 ? 350 : 0,
          y: -100, scale: 0.7, rotation: -8,
          duration: 1.2, ease: "power3.out",
        });
      },
      onLeaveBack: () => {
        gsap.to(kbd, {
          x: typeof window !== "undefined" && window.innerWidth > 768 ? -200 : 0,
          y: 80, scale: 0.9, rotation: 180,
          duration: 1.2, ease: "power3.inOut",
        });
      },
    });

    // Idle float
    gsap.to(kbd, {
      y: "+=12",
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 3.5,
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-purple-600/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />

      {/* 3D Keyboard SVG (CSS-rendered) */}
      <div
        ref={keyboardRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0"
        style={{ perspective: "800px" }}
        aria-hidden="true"
      >
        <KeyboardSVG />
      </div>
    </div>
  );
}

function KeyboardSVG() {
  const keys = [
    // Row 1 - Function keys area
    ["ESC","F1","F2","F3","F4","F5","F6","F7","F8","F9","F10","F11","F12"],
    // Row 2 - Numbers
    ["`","1","2","3","4","5","6","7","8","9","0","-","=","⌫"],
    // Row 3
    ["⇥","Q","W","E","R","T","Y","U","I","O","P","[","]","\\"],
    // Row 4
    ["⇪","A","S","D","F","G","H","J","K","L",";","'","↵"],
    // Row 5
    ["⇧","Z","X","C","V","B","N","M",",",".","/","⇧"],
    // Row 6
    ["⌃","⌥","⌘","SPACE","⌘","⌥","⌃"],
  ];

  const keyColors = [
    "#6366f1","#8b5cf6","#a78bfa","#7c3aed","#4f46e5",
    "#06b6d4","#0891b2","#0e7490","#38bdf8","#7dd3fc",
  ];

  return (
    <div
      className="relative select-none"
      style={{
        transform: "rotateX(30deg) rotateZ(-5deg)",
        transformStyle: "preserve-3d",
        filter: "drop-shadow(0 40px 80px rgba(99,102,241,0.4))",
      }}
    >
      {/* Keyboard base */}
      <div
        className="rounded-2xl p-3 border border-white/10"
        style={{
          background: "linear-gradient(145deg, rgba(30,27,75,0.9) 0%, rgba(15,12,60,0.95) 100%)",
          boxShadow: "0 0 60px rgba(99,102,241,0.3), inset 0 1px 0 rgba(255,255,255,0.05)",
          minWidth: "520px",
        }}
      >
        {keys.map((row, rowIdx) => (
          <div key={rowIdx} className="flex gap-1 mb-1">
            {row.map((key, keyIdx) => {
              const isSpace = key === "SPACE";
              const isWide = ["⌫", "⇥", "\\", "⇪", "↵", "⇧"].includes(key);
              const color = keyColors[(rowIdx * 3 + keyIdx) % keyColors.length];
              return (
                <div
                  key={keyIdx}
                  className="flex items-center justify-center rounded text-white/80 text-[9px] font-mono font-bold border border-white/5 transition-all duration-150 hover:scale-105 hover:brightness-125"
                  style={{
                    background: `linear-gradient(145deg, ${color}33 0%, ${color}11 100%)`,
                    boxShadow: `0 2px 0 rgba(0,0,0,0.5), 0 0 6px ${color}44`,
                    minWidth: isSpace ? "180px" : isWide ? "48px" : "28px",
                    height: rowIdx === 0 ? "18px" : "26px",
                    flex: isSpace ? "1" : "0 0 auto",
                    padding: "0 2px",
                  }}
                >
                  {key.length <= 2 ? key : ""}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {/* Bottom 3D face */}
      <div
        className="absolute bottom-0 left-0 right-0 rounded-b-2xl"
        style={{
          height: "12px",
          background: "linear-gradient(180deg, rgba(15,10,50,0.9) 0%, rgba(5,4,20,0.95) 100%)",
          transform: "translateZ(-12px) translateY(12px)",
          transformOrigin: "top",
        }}
      />
    </div>
  );
}
