import { useRef, useEffect } from "react";
import { cn } from "../../lib/utils";

interface FluidFlowGridProps {
  className?: string;
  interactive?: boolean;
  intensity?: number;
  opacity?: number;
  spacing?: number;
  colorMode?: "blue" | "cyan" | "green" | "sustainability";
}

export function FluidFlowGrid({
  className,
  interactive = true,
  intensity = 1,
  opacity = 1,
  spacing = 32,
  colorMode = "sustainability",
}: FluidFlowGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse interaction state (refs to avoid re-renders)
  const mouseRef = useRef({ x: -1000, y: -1000, targetX: -1000, targetY: -1000, isMoving: false });
  const timeRef = useRef(0);
  const rafRef = useRef<number>();
  const isReducedMotion = useRef(false);

  // Animation lifecycle
  useEffect(() => {
    isReducedMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d", { alpha: true });
    if (!canvas || !ctx) return;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let currentSpacing = spacing;
    
    // Smooth entry sequence
    let bootProgress = 0;
    const startTime = performance.now();

    const resize = () => {
      if (!containerRef.current || !canvas) return;
      const rect = containerRef.current.getBoundingClientRect();
      width = rect.width;
      height = rect.height;

      // Cap DPR for performance
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      // Reset transform before applying dpr scale
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      // Adjust spacing based on screen size (mobile performance)
      if (width < 768) {
        currentSpacing = spacing * 1.25; // Less dense on mobile
      } else {
        currentSpacing = spacing;
      }
    };

    window.addEventListener("resize", resize);
    resize();

    // Mouse Tracking (Document level)
    const onMouseMove = (e: MouseEvent) => {
      if (!interactive || isReducedMotion.current) return;
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      // Calculate mouse relative to the container
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;

      // Only track if mouse is somewhat near/inside the section
      if (mx >= -200 && mx <= width + 200 && my >= -200 && my <= height + 200) {
        mouseRef.current.targetX = mx;
        mouseRef.current.targetY = my;
        mouseRef.current.isMoving = true;
      }
    };

    const onMouseLeave = () => {
      mouseRef.current.isMoving = false;
      // Drift away smoothly
      mouseRef.current.targetX = width / 2;
      mouseRef.current.targetY = -1000;
    };

    if (interactive) {
      window.addEventListener("mousemove", onMouseMove, { passive: true });
      window.addEventListener("mouseout", onMouseLeave, { passive: true });
    }

    // Color Palette matching the prompt
    // Dark Tech: Base: #05070D, Primary: Electric Blue, Sec: Cyan, Acc: Green
    const colors = {
      blue: "rgba(30, 90, 255, ", // Electric Blue
      cyan: "rgba(10, 200, 255, ", // Cyan
      green: "rgba(20, 220, 120, ", // Sustainability Green
    };

    const render = (time: number) => {
      const elapsed = time - startTime;
      
      // Entry Animation Logic (0 to 1 over ~1400ms)
      if (bootProgress < 1) {
        bootProgress = Math.min(elapsed / 1400, 1);
        // ease out cubic
        bootProgress = 1 - Math.pow(1 - bootProgress, 3);
      }

      ctx.clearRect(0, 0, width, height);

      if (isReducedMotion.current) {
        timeRef.current = 1000; // Static time
      } else {
        timeRef.current += 0.001 * intensity;
      }

      // Smooth mouse interpolation
      if (!isReducedMotion.current) {
        mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
        mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;
      }

      const cols = Math.floor(width / currentSpacing) + 2;
      const rows = Math.floor(height / currentSpacing) + 2;

      // Draw Atmospheric Background (Layer 3)
      if (bootProgress > 0.1) {
        const bgOpacity = Math.max(0, (bootProgress - 0.1) * 0.3 * opacity);
        const grad = ctx.createRadialGradient(
          mouseRef.current.x, mouseRef.current.y, 0,
          mouseRef.current.x, mouseRef.current.y, 600
        );
        if (colorMode === "sustainability") {
          grad.addColorStop(0, `rgba(30, 90, 255, ${bgOpacity})`);
          grad.addColorStop(0.5, `rgba(10, 200, 255, ${bgOpacity * 0.3})`);
          grad.addColorStop(1, "rgba(5, 7, 13, 0)");
        } else {
          grad.addColorStop(0, colors[colorMode] + `${bgOpacity})`);
          grad.addColorStop(1, "rgba(5, 7, 13, 0)");
        }
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, width, height);
      }

      ctx.lineWidth = 1.2;
      ctx.lineCap = "round";

      // Render Layer 1 & 2 (Vector Field)
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const px = i * currentSpacing;
          const py = j * currentSpacing;

          // Mathematical Flow (Multi-scale turbulence)
          const nx = px * 0.002;
          const ny = py * 0.002;
          
          const largeFlow = Math.sin(nx + timeRef.current) * Math.cos(ny + timeRef.current);
          const mediumFlow = Math.sin(nx * 3 - timeRef.current * 1.5) * Math.cos(ny * 2 + timeRef.current);
          const microFlow = Math.sin(nx * 10 + timeRef.current * 3);

          let angle = largeFlow + mediumFlow * 0.35 + microFlow * 0.12;

          // Layer 3: Mouse interaction disturbance
          let distanceToMouse = 9999;
          if (interactive && !isReducedMotion.current) {
            const dx = px - mouseRef.current.x;
            const dy = py - mouseRef.current.y;
            distanceToMouse = Math.sqrt(dx * dx + dy * dy);
            
            const interactionRadius = width < 768 ? 140 : 240;
            
            if (distanceToMouse < interactionRadius) {
              const influence = 1 - distanceToMouse / interactionRadius;
              // Bend vector away/around cursor tangentially
              const mouseAngle = Math.atan2(dy, dx);
              angle += (mouseAngle - angle) * (influence * 0.8);
            }
          }

          // Flow vector magnitude
          const length = currentSpacing * 0.55;
          const endX = px + Math.cos(angle) * length;
          const endY = py + Math.sin(angle) * length;

          // Subtle Connections
          // If the angle strongly aligns with a specific axis, it occasionally "connects"
          const alignment = Math.abs(Math.sin(angle * 2));
          let isConnection = false;
          if (alignment > 0.95 && Math.random() > 0.98) {
            isConnection = true;
          }

          // Determine Line Color based on palette and interaction
          let lineOpacity = (0.15 + (Math.sin(nx * 5 + timeRef.current * 2) * 0.1)) * opacity;
          
          // Boost opacity near cursor
          if (distanceToMouse < 300) {
            lineOpacity += (1 - distanceToMouse / 300) * 0.4 * opacity;
          }

          // Apply Boot Progress
          lineOpacity *= Math.max(0, bootProgress - 0.2); // Start fading in lines after 20%

          let strokeStyle = colors.blue + `${lineOpacity})`;
          
          if (colorMode === "sustainability") {
            // Subtle accent distribution
            if (isConnection) {
              strokeStyle = colors.green + `${lineOpacity * 1.5})`;
              ctx.lineWidth = 1.8;
            } else if ((i + j) % 7 === 0) {
              strokeStyle = colors.cyan + `${lineOpacity})`;
            }
          } else {
            strokeStyle = colors[colorMode] + `${lineOpacity})`;
            if (isConnection) ctx.lineWidth = 1.8;
          }

          ctx.strokeStyle = strokeStyle;
          ctx.beginPath();
          ctx.moveTo(px, py);
          
          if (isConnection && bootProgress > 0.8) {
            // Draw a longer connection line to neighbor
            ctx.lineTo(px + Math.cos(angle) * currentSpacing * 1.2, py + Math.sin(angle) * currentSpacing * 1.2);
          } else {
            ctx.lineTo(endX, endY);
          }
          
          ctx.stroke();
          ctx.lineWidth = 1.2; // reset
        }
      }

      if (!isReducedMotion.current || bootProgress < 1) {
        rafRef.current = requestAnimationFrame(render);
      }
    };

    rafRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", resize);
      if (interactive) {
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("mouseout", onMouseLeave);
      }
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [interactive, intensity, opacity, spacing, colorMode]);

  return (
    <div 
      ref={containerRef} 
      className={cn(
        "absolute inset-0 w-full h-full bg-[#05070D] overflow-hidden -z-10", 
        className
      )}
      aria-hidden="true"
    >
      <canvas 
        ref={canvasRef}
        className="block w-full h-full pointer-events-none"
      />
    </div>
  );
}

export default FluidFlowGrid;
