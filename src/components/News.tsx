import { Button } from "@/components/ui/button";
import newsItems from "@/data/newsItems";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

/**
 * Smooth full-width continuous scroller
 *
 * Key ideas:
 * - innerRef is translated using transform (GPU) for smooth animation
 * - we keep a floating position `posRef` in pixels
 * - when pos >= halfWidth we subtract halfWidth to loop seamlessly
 * - Prev/Next perform a short tween, then resume
 */

const News = () => {
  // Config — tweak these
  const SPEED_PX_PER_SEC = 25; // px per second (lower = slower)
  const CARD_WIDTH = 450; // match your card width (min-max)
  const GAP_PX = 24; // same as Tailwind `space-x-6` (1.5rem = 24px)
  const JUMP_DISTANCE = CARD_WIDTH + GAP_PX; // amount Prev/Next jumps
  const JUMP_DURATION = 400; // ms for manual jump animation

  const duplicated = [...newsItems, ...newsItems];

  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);

  const posRef = useRef(0); // virtual x offset in px
  const halfWidthRef = useRef(0); // width of one set of items
  const rafRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);
  const isAnimatingJump = useRef(false);

  const [isPaused, setIsPaused] = useState(false);

  // compute halfWidth after mount and on resize
  useEffect(() => {
    const compute = () => {
      const inner = innerRef.current;
      if (!inner) return;
      // half is width of the first set (we duplicated array)
      halfWidthRef.current = inner.scrollWidth / 2;
    };
    compute();
    const onResize = () => compute();
    window.addEventListener("resize", onResize);
    // also compute after images load (give them a moment)
    const t = setTimeout(compute, 600);
    return () => {
      window.removeEventListener("resize", onResize);
      clearTimeout(t);
    };
  }, []);

  // main rAF loop for continuous scroll (time-based)
  useEffect(() => {
    const step = (now: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = now;
      const dt = now - lastTimeRef.current;
      lastTimeRef.current = now;

      if (!isPaused && !isAnimatingJump.current) {
        // advance position by time-based delta
        posRef.current += (SPEED_PX_PER_SEC * dt) / 1000;
      }

      const inner = innerRef.current;
      const half = halfWidthRef.current || (inner ? inner.scrollWidth / 2 : 1);

      // wrap without jumping
      if (posRef.current >= half) posRef.current -= half;
      if (posRef.current < 0) posRef.current += half;

      if (inner) {
        // transform the inner track leftwards
        inner.style.transform = `translateX(${-posRef.current}px)`;
      }

      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      lastTimeRef.current = null;
    };
  }, [isPaused]); // restart effect when pause changes

  // Tween helper for manual jumps (smooth)
  const animateTo = (target: number, duration = JUMP_DURATION) => {
    if (isAnimatingJump.current) return Promise.resolve();
    isAnimatingJump.current = true;
    return new Promise<void>((resolve) => {
      const start = performance.now();
      const from = posRef.current;
      const diff = target - from;

      const tick = (t: number) => {
        const elapsed = t - start;
        const p = Math.min(1, elapsed / duration);
        // easeOutQuad
        const eased = 1 - (1 - p) * (1 - p);
        posRef.current = from + diff * eased;

        const inner = innerRef.current;
        if (inner) inner.style.transform = `translateX(${-posRef.current}px)`;

        if (p < 1) {
          requestAnimationFrame(tick);
        } else {
          // wrap into [0, half)
          const half = halfWidthRef.current || (innerRef.current ? innerRef.current.scrollWidth / 2 : 1);
          posRef.current = ((posRef.current % half) + half) % half;
          isAnimatingJump.current = false;
          resolve();
        }
      };

      requestAnimationFrame(tick);
    });
  };

  const handlePrev = async () => {
    // pause auto while performing manual jump
    setIsPaused(true);
    const half = halfWidthRef.current || (innerRef.current ? innerRef.current.scrollWidth / 2 : 1);
    // desired new position (move left/back)
    const target = posRef.current - JUMP_DISTANCE;
    // normalize target to allow smooth tweening across boundary
    let normalized = target;
    if (normalized < 0) normalized += half; // prefer positive target for tween
    await animateTo(normalized, JUMP_DURATION);
    setIsPaused(false);
  };

  const handleNext = async () => {
    setIsPaused(true);
    const half = halfWidthRef.current || (innerRef.current ? innerRef.current.scrollWidth / 2 : 1);
    const target = posRef.current + JUMP_DISTANCE;
    let normalized = target;
    if (normalized >= half) normalized -= half;
    await animateTo(normalized, JUMP_DURATION);
    setIsPaused(false);
  };

  return (
    <section id="news" className="py-20 bg-white">
      <div className="w-full mx-auto px-6">
       <div className="flex justify-center text-center mx-auto mb-12 px-4">
  <div className="w-full max-w-4xl">
    <h2 className="text-4xl md:text-6xl font-bold mb-4 text-black">
      Client Showcase
    </h2>
    <p className="text-lg md:text-2xl text-black leading-relaxed">
      Stay updated with our latest insights, awards, and company developments.
    </p>
  </div>
</div>


        {/* full width wrapper */}
        <div
          className="relative w-full"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* left/right buttons: visible on mobile/tablet always, desktop only on hover */}
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2 z-20">
            <div className="pointer-events-auto">
              <Button
                onClick={handlePrev}
                className="hidden sm:flex bg-black/90 text-white hover:bg-black px-8 py-6 rounded-none  "
                aria-label="Previous"
              >
                <ArrowLeft className="w-4 h-4" /> Prev
              </Button>

              {/* always visible on small screens */}
              <Button
                onClick={handlePrev}
                className="flex sm:hidden bg-black/90 text-white hover:bg-black px-3 py-2 rounded-full items-center gap-2"
                aria-label="Previous mobile"
              >
                <ArrowLeft className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2 z-20">
            <div className="pointer-events-auto">
              <Button
                onClick={handleNext}
                className="hidden sm:flex bg-black/90 text-white hover:bg-black px-8 py-6 rounded-none items-center gap-2 "
                aria-label="Next"
              >
                Next <ArrowRight className="w-4 h-4" />
              </Button>

              <Button
                onClick={handleNext}
                className="flex sm:hidden bg-black/90 text-white hover:bg-black px-3 py-2 rounded-full items-center gap-2"
                aria-label="Next mobile"
              >
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* visible track (overflow hidden) */}
          <div
            ref={wrapperRef}
            className="w-full overflow-hidden"
            // wrapper contains innerRef which is translated
          >
            <div
              ref={innerRef}
              className="flex items-start gap-6 will-change-transform"
              style={{
                transform: "translateX(0px)",
                transition: isAnimatingJump.current ? `transform ${JUMP_DURATION}ms ease-out` : "none",
              }}
            >
              {duplicated.map((item, idx) => (
                <a
                  key={idx}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block min-w-[250px] max-w-[250px] md:min-w-[450px] md:max-w-[450px] flex-shrink-0"
                >
                  <article className="cursor-pointer">
                    <div className="relative overflow-hidden mb-4 ">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-48 md:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 border border-border group-hover:border-primary transition-colors duration-300 "></div>
                    </div>
                    <div className="space-y-3">
                      <div className="text-sm text-black">{item.date}</div>
                      <h3 className="text-xl font-bold leading-tight text-black group-hover:text-primary transition-colors duration-300">
                        {item.title}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </article>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 ml-8 text-left">
          <Link to="/news">
            <Button variant="outline" size="lg" className="rounded-full px-8">
              See more articles
            </Button>
          </Link>
        </div>
      </div>

      {/* hide webkit scrollbar if any (inner element might be scrollable in dev) */}
      <style>{`
        /* hide any scrollbars if a dev browser shows them */
        .no-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
};

export default News;
