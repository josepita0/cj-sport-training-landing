import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

type MobileAutoCarouselProps<T> = {
  items: T[];
  renderSlide: (item: T) => React.ReactNode;
  getKey?: (item: T, index: number) => string | number;
  delay?: number;
  className?: string;
  itemClassName?: string;
};

export function MobileAutoCarousel<T>({
  items,
  renderSlide,
  getKey,
  delay = 4000,
  className,
  itemClassName,
}: MobileAutoCarouselProps<T>) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [reducedMotion, setReducedMotion] = React.useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  const autoplayPlugin = React.useRef(
    Autoplay({ delay, stopOnInteraction: true, playOnInit: true }),
  );

  React.useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReducedMotion(mql.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  React.useEffect(() => {
    if (!api) return;

    const onSelect = () => setSelectedIndex(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);

    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  return (
    <div className={cn("md:hidden", className)}>
      <Carousel
        key={reducedMotion ? "reduced-motion" : "autoplay"}
        setApi={setApi}
        opts={{ loop: true, align: "start" }}
        plugins={reducedMotion ? [] : [autoplayPlugin.current]}
        className="w-full"
      >
        <CarouselContent className="-ml-3">
          {items.map((item, index) => (
            <CarouselItem
              key={getKey ? getKey(item, index) : index}
              className={cn("basis-[88%] pl-3 sm:basis-[75%]", itemClassName)}
            >
              {renderSlide(item)}
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {items.length > 1 && (
        <div
          className="mt-4 flex justify-center gap-2"
          role="tablist"
          aria-label="Slides del carrusel"
        >
          {items.map((item, index) => (
            <button
              key={getKey ? getKey(item, index) : index}
              type="button"
              role="tab"
              aria-selected={index === selectedIndex}
              aria-label={`Ir al slide ${index + 1}`}
              onClick={() => api?.scrollTo(index)}
              className={cn(
                "h-1.5 rounded-full transition-all",
                index === selectedIndex
                  ? "w-6 bg-primary"
                  : "w-1.5 bg-muted-foreground/40",
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}
