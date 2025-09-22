<<<<<<< HEAD
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';

export type LogoItem =
  | {
      node: React.ReactNode;
      href?: string;
      title?: string;
      ariaLabel?: string;
    }
  | {
      src: string;
      alt?: string;
      href?: string;
      title?: string;
      srcSet?: string;
      sizes?: string;
      width?: number;
      height?: number;
    };
=======
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Image from "next/image";

export type LogoNodeItem = {
  node: React.ReactNode;
  href?: string;
  title?: string;
  ariaLabel?: string;
};

export type LogoImageItem = {
  src: string;
  alt?: string;
  href?: string;
  title?: string;
  srcSet?: string;
  sizes?: string;
  width?: number;
  height?: number;
};

declare module "react" {
  interface CSSProperties {
    "--logoloop-gap"?: string;
    "--logoloop-logoHeight"?: string;
    "--logoloop-fadeColor"?: string;
    "--logoloop-fadeColorAuto"?: string;
  }
}

export type LogoItem = LogoNodeItem | LogoImageItem;
>>>>>>> a89ec2506039fa1e25afad5d269884c9e4aa7e32

export interface LogoLoopProps {
  logos: LogoItem[];
  speed?: number;
<<<<<<< HEAD
  direction?: 'left' | 'right';
=======
  direction?: "left" | "right";
>>>>>>> a89ec2506039fa1e25afad5d269884c9e4aa7e32
  width?: number | string;
  logoHeight?: number;
  gap?: number;
  pauseOnHover?: boolean;
  fadeOut?: boolean;
  fadeOutColor?: string;
  scaleOnHover?: boolean;
  ariaLabel?: string;
  className?: string;
  style?: React.CSSProperties;
}

const ANIMATION_CONFIG = {
  SMOOTH_TAU: 0.25,
  MIN_COPIES: 2,
<<<<<<< HEAD
  COPY_HEADROOM: 2
} as const;

const toCssLength = (value?: number | string): string | undefined =>
  typeof value === 'number' ? `${value}px` : (value ?? undefined);

const cx = (...parts: Array<string | false | null | undefined>) => parts.filter(Boolean).join(' ');
=======
  COPY_HEADROOM: 2,
} as const;

const toCssLength = (value?: number | string): string | undefined =>
  typeof value === "number" ? `${value}px` : value;

const cx = (...parts: Array<string | false | null | undefined>) =>
  parts.filter(Boolean).join(" ");
>>>>>>> a89ec2506039fa1e25afad5d269884c9e4aa7e32

const useResizeObserver = (
  callback: () => void,
  elements: Array<React.RefObject<Element | null>>,
  dependencies: React.DependencyList
) => {
  useEffect(() => {
    if (!window.ResizeObserver) {
      const handleResize = () => callback();
<<<<<<< HEAD
      window.addEventListener('resize', handleResize);
      callback();
      return () => window.removeEventListener('resize', handleResize);
    }

    const observers = elements.map(ref => {
=======
      window.addEventListener("resize", handleResize);
      callback();
      return () => window.removeEventListener("resize", handleResize);
    }

    const observers = elements.map((ref) => {
>>>>>>> a89ec2506039fa1e25afad5d269884c9e4aa7e32
      if (!ref.current) return null;
      const observer = new ResizeObserver(callback);
      observer.observe(ref.current);
      return observer;
    });

    callback();

    return () => {
<<<<<<< HEAD
      observers.forEach(observer => observer?.disconnect());
=======
      observers.forEach((observer) => observer?.disconnect());
>>>>>>> a89ec2506039fa1e25afad5d269884c9e4aa7e32
    };
  }, dependencies);
};

const useImageLoader = (
  seqRef: React.RefObject<HTMLUListElement | null>,
  onLoad: () => void,
  dependencies: React.DependencyList
) => {
  useEffect(() => {
<<<<<<< HEAD
    const images = seqRef.current?.querySelectorAll('img') ?? [];
=======
    const images = seqRef.current?.querySelectorAll("img") ?? [];
>>>>>>> a89ec2506039fa1e25afad5d269884c9e4aa7e32

    if (images.length === 0) {
      onLoad();
      return;
    }

    let remainingImages = images.length;
    const handleImageLoad = () => {
      remainingImages -= 1;
<<<<<<< HEAD
      if (remainingImages === 0) {
        onLoad();
      }
    };

    images.forEach(img => {
=======
      if (remainingImages === 0) onLoad();
    };

    images.forEach((img) => {
>>>>>>> a89ec2506039fa1e25afad5d269884c9e4aa7e32
      const htmlImg = img as HTMLImageElement;
      if (htmlImg.complete) {
        handleImageLoad();
      } else {
<<<<<<< HEAD
        htmlImg.addEventListener('load', handleImageLoad, { once: true });
        htmlImg.addEventListener('error', handleImageLoad, { once: true });
=======
        htmlImg.addEventListener("load", handleImageLoad, { once: true });
        htmlImg.addEventListener("error", handleImageLoad, { once: true });
>>>>>>> a89ec2506039fa1e25afad5d269884c9e4aa7e32
      }
    });

    return () => {
<<<<<<< HEAD
      images.forEach(img => {
        img.removeEventListener('load', handleImageLoad);
        img.removeEventListener('error', handleImageLoad);
=======
      images.forEach((img) => {
        img.removeEventListener("load", handleImageLoad);
        img.removeEventListener("error", handleImageLoad);
>>>>>>> a89ec2506039fa1e25afad5d269884c9e4aa7e32
      });
    };
  }, dependencies);
};

const useAnimationLoop = (
  trackRef: React.RefObject<HTMLDivElement | null>,
  targetVelocity: number,
  seqWidth: number,
  isHovered: boolean,
  pauseOnHover: boolean
) => {
  const rafRef = useRef<number | null>(null);
  const lastTimestampRef = useRef<number | null>(null);
  const offsetRef = useRef(0);
  const velocityRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const prefersReduced =
<<<<<<< HEAD
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (seqWidth > 0) {
      offsetRef.current = ((offsetRef.current % seqWidth) + seqWidth) % seqWidth;
=======
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (seqWidth > 0) {
      offsetRef.current =
        ((offsetRef.current % seqWidth) + seqWidth) % seqWidth;
>>>>>>> a89ec2506039fa1e25afad5d269884c9e4aa7e32
      track.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;
    }

    if (prefersReduced) {
<<<<<<< HEAD
      track.style.transform = 'translate3d(0, 0, 0)';
=======
      track.style.transform = "translate3d(0, 0, 0)";
>>>>>>> a89ec2506039fa1e25afad5d269884c9e4aa7e32
      return () => {
        lastTimestampRef.current = null;
      };
    }

    const animate = (timestamp: number) => {
      if (lastTimestampRef.current === null) {
        lastTimestampRef.current = timestamp;
      }

<<<<<<< HEAD
      const deltaTime = Math.max(0, timestamp - lastTimestampRef.current) / 1000;
=======
      const deltaTime =
        Math.max(0, timestamp - lastTimestampRef.current) / 1000;
>>>>>>> a89ec2506039fa1e25afad5d269884c9e4aa7e32
      lastTimestampRef.current = timestamp;

      const target = pauseOnHover && isHovered ? 0 : targetVelocity;

<<<<<<< HEAD
      const easingFactor = 1 - Math.exp(-deltaTime / ANIMATION_CONFIG.SMOOTH_TAU);
=======
      const easingFactor =
        1 - Math.exp(-deltaTime / ANIMATION_CONFIG.SMOOTH_TAU);
>>>>>>> a89ec2506039fa1e25afad5d269884c9e4aa7e32
      velocityRef.current += (target - velocityRef.current) * easingFactor;

      if (seqWidth > 0) {
        let nextOffset = offsetRef.current + velocityRef.current * deltaTime;
        nextOffset = ((nextOffset % seqWidth) + seqWidth) % seqWidth;
        offsetRef.current = nextOffset;

<<<<<<< HEAD
        const translateX = -offsetRef.current;
        track.style.transform = `translate3d(${translateX}px, 0, 0)`;
=======
        track.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;
>>>>>>> a89ec2506039fa1e25afad5d269884c9e4aa7e32
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      lastTimestampRef.current = null;
    };
<<<<<<< HEAD
  }, [targetVelocity, seqWidth, isHovered, pauseOnHover]);
};

export const LogoLoop = React.memo<LogoLoopProps>(
  ({
    logos,
    speed = 120,
    direction = 'left',
    width = '100%',
=======
  }, [trackRef, targetVelocity, seqWidth, isHovered, pauseOnHover]); // Add trackRef here
};

function hasHref(
  item: LogoItem
): item is
  | (LogoNodeItem & { href: string })
  | (LogoImageItem & { href: string }) {
  // Check if the item is a LogoNodeItem and has a string href
  if ("node" in item) {
    return typeof (item as LogoNodeItem).href === "string";
  }
  // Check if the item is a LogoImageItem and has a string href
  if ("src" in item) {
    return typeof (item as LogoImageItem).href === "string";
  }
  return false;
}
export const LogoLoop: React.FC<LogoLoopProps> = React.memo(
  ({
    logos,
    speed = 120,
    direction = "left",
    width = "100%",
>>>>>>> a89ec2506039fa1e25afad5d269884c9e4aa7e32
    logoHeight = 28,
    gap = 32,
    pauseOnHover = true,
    fadeOut = false,
    fadeOutColor,
    scaleOnHover = false,
<<<<<<< HEAD
    ariaLabel = 'Partner logos',
    className,
    style
=======
    ariaLabel = "Partner logos",
    className,
    style,
>>>>>>> a89ec2506039fa1e25afad5d269884c9e4aa7e32
  }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const seqRef = useRef<HTMLUListElement>(null);

<<<<<<< HEAD
    const [seqWidth, setSeqWidth] = useState<number>(0);
    const [copyCount, setCopyCount] = useState<number>(ANIMATION_CONFIG.MIN_COPIES);
    const [isHovered, setIsHovered] = useState<boolean>(false);

    const targetVelocity = useMemo(() => {
      const magnitude = Math.abs(speed);
      const directionMultiplier = direction === 'left' ? 1 : -1;
=======
    const [seqWidth, setSeqWidth] = useState(0);
    const [copyCount, setCopyCount] = useState<number>(
      ANIMATION_CONFIG.MIN_COPIES
    );
    const [isHovered, setIsHovered] = useState(false);

    const targetVelocity = useMemo(() => {
      const magnitude = Math.abs(speed);
      const directionMultiplier = direction === "left" ? 1 : -1;
>>>>>>> a89ec2506039fa1e25afad5d269884c9e4aa7e32
      const speedMultiplier = speed < 0 ? -1 : 1;
      return magnitude * directionMultiplier * speedMultiplier;
    }, [speed, direction]);

    const updateDimensions = useCallback(() => {
      const containerWidth = containerRef.current?.clientWidth ?? 0;
<<<<<<< HEAD
      const sequenceWidth = seqRef.current?.getBoundingClientRect?.()?.width ?? 0;

      if (sequenceWidth > 0) {
        setSeqWidth(Math.ceil(sequenceWidth));
        const copiesNeeded = Math.ceil(containerWidth / sequenceWidth) + ANIMATION_CONFIG.COPY_HEADROOM;
=======
      const sequenceWidth =
        seqRef.current?.getBoundingClientRect?.()?.width ?? 0;

      if (sequenceWidth > 0) {
        setSeqWidth(Math.ceil(sequenceWidth));
        const copiesNeeded =
          Math.ceil(containerWidth / sequenceWidth) +
          ANIMATION_CONFIG.COPY_HEADROOM;
>>>>>>> a89ec2506039fa1e25afad5d269884c9e4aa7e32
        setCopyCount(Math.max(ANIMATION_CONFIG.MIN_COPIES, copiesNeeded));
      }
    }, []);

<<<<<<< HEAD
    useResizeObserver(updateDimensions, [containerRef, seqRef], [logos, gap, logoHeight]);

    useImageLoader(seqRef, updateDimensions, [logos, gap, logoHeight]);

    useAnimationLoop(trackRef, targetVelocity, seqWidth, isHovered, pauseOnHover);

    const cssVariables = useMemo(
      () =>
        ({
          '--logoloop-gap': `${gap}px`,
          '--logoloop-logoHeight': `${logoHeight}px`,
          ...(fadeOutColor && { '--logoloop-fadeColor': fadeOutColor })
        }) as React.CSSProperties,
      [gap, logoHeight, fadeOutColor]
    );

    const rootClasses = useMemo(
      () =>
        cx(
          'relative overflow-x-hidden group',
          '[--logoloop-gap:32px]',
          '[--logoloop-logoHeight:28px]',
          '[--logoloop-fadeColorAuto:#ffffff]',
          'dark:[--logoloop-fadeColorAuto:#0b0b0b]',
          scaleOnHover && 'py-[calc(var(--logoloop-logoHeight)*0.1)]',
          className
        ),
      [scaleOnHover, className]
    );

    const handleMouseEnter = useCallback(() => {
      if (pauseOnHover) setIsHovered(true);
    }, [pauseOnHover]);

    const handleMouseLeave = useCallback(() => {
      if (pauseOnHover) setIsHovered(false);
    }, [pauseOnHover]);

    const renderLogoItem = useCallback(
      (item: LogoItem, key: React.Key) => {
        const isNodeItem = 'node' in item;
=======
    useResizeObserver(
      updateDimensions,
      [containerRef, seqRef],
      [logos, gap, logoHeight]
    );
    useImageLoader(seqRef, updateDimensions, [logos, gap, logoHeight]);
    useAnimationLoop(
      trackRef,
      targetVelocity,
      seqWidth,
      isHovered,
      pauseOnHover
    );

    const renderLogoItem = useCallback(
      (item: LogoItem, key: React.Key) => {
        const isNodeItem = (item as LogoNodeItem).node !== undefined;
>>>>>>> a89ec2506039fa1e25afad5d269884c9e4aa7e32

        const content = isNodeItem ? (
          <span
            className={cx(
<<<<<<< HEAD
              'inline-flex items-center',
              'motion-reduce:transition-none',
              scaleOnHover &&
                'transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover/item:scale-120'
            )}
            aria-hidden={!!(item as any).href && !(item as any).ariaLabel}
          >
            {(item as any).node}
          </span>
        ) : (
          <img
            className={cx(
              'h-[var(--logoloop-logoHeight)] w-auto block object-contain',
              '[-webkit-user-drag:none] pointer-events-none',
              '[image-rendering:-webkit-optimize-contrast]',
              'motion-reduce:transition-none',
              scaleOnHover &&
                'transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover/item:scale-120'
            )}
            src={(item as any).src}
            srcSet={(item as any).srcSet}
            sizes={(item as any).sizes}
            width={(item as any).width}
            height={(item as any).height}
            alt={(item as any).alt ?? ''}
            title={(item as any).title}
            loading="lazy"
            decoding="async"
            draggable={false}
          />
        );

        const itemAriaLabel = isNodeItem
          ? ((item as any).ariaLabel ?? (item as any).title)
          : ((item as any).alt ?? (item as any).title);

        const inner = (item as any).href ? (
          <a
            className={cx(
              'inline-flex items-center no-underline rounded',
              'transition-opacity duration-200 ease-linear',
              'hover:opacity-80',
              'focus-visible:outline focus-visible:outline-current focus-visible:outline-offset-2'
            )}
            href={(item as any).href}
            aria-label={itemAriaLabel || 'logo link'}
=======
              "inline-flex items-center",
              "motion-reduce:transition-none",
              scaleOnHover &&
                "transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover/item:scale-120"
            )}
            aria-hidden={
              !!(item as LogoNodeItem).href && !(item as LogoNodeItem).ariaLabel
            }
          >
            {(item as LogoNodeItem).node}
          </span>
        ) : (
          <Image
            className={cx(
              "h-[var(--logoloop-logoHeight)] w-auto block object-contain",
              "[-webkit-user-drag:none] pointer-events-none",
              "[image-rendering:-webkit-optimize-contrast]",
              "motion-reduce:transition-none",
              scaleOnHover &&
                "transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover/item:scale-120"
            )}
            src={(item as LogoImageItem).src}
            sizes={(item as LogoImageItem).sizes}
            width={(item as LogoImageItem).width ?? logoHeight}
            height={(item as LogoImageItem).height ?? logoHeight}
            alt={(item as LogoImageItem).alt ?? ""}
            title={(item as LogoImageItem).title}
            loading="lazy"
            unoptimized
            style={{ height: "var(--logoloop-logoHeight)", width: "auto" }}
          />
        );
        // Correct way to check for href
        const hasLink = hasHref(item);

        const itemAriaLabel = isNodeItem
          ? (item as LogoNodeItem).ariaLabel ?? (item as LogoNodeItem).title
          : (item as LogoImageItem).alt ?? (item as LogoImageItem).title;

        const inner = hasLink ? (
          <a
            className={cx(
              "inline-flex items-center no-underline rounded",
              "transition-opacity duration-200 ease-linear",
              "hover:opacity-80",
              "focus-visible:outline focus-visible:outline-current focus-visible:outline-offset-2"
            )}
            href={item.href} // Directly access href after type check
            aria-label={itemAriaLabel || "logo link"}
>>>>>>> a89ec2506039fa1e25afad5d269884c9e4aa7e32
            target="_blank"
            rel="noreferrer noopener"
          >
            {content}
          </a>
        ) : (
          content
        );

        return (
          <li
            className={cx(
<<<<<<< HEAD
              'flex-none mr-[var(--logoloop-gap)] text-[length:var(--logoloop-logoHeight)] leading-[1]',
              scaleOnHover && 'overflow-visible group/item'
=======
              "flex-none mr-[var(--logoloop-gap)] text-[length:var(--logoloop-logoHeight)] leading-[1]",
              scaleOnHover && "overflow-visible group/item"
>>>>>>> a89ec2506039fa1e25afad5d269884c9e4aa7e32
            )}
            key={key}
            role="listitem"
          >
            {inner}
          </li>
        );
      },
      [scaleOnHover]
    );

    const logoLists = useMemo(
      () =>
        Array.from({ length: copyCount }, (_, copyIndex) => (
          <ul
            className="flex items-center"
            key={`copy-${copyIndex}`}
            role="list"
            aria-hidden={copyIndex > 0}
            ref={copyIndex === 0 ? seqRef : undefined}
          >
<<<<<<< HEAD
            {logos.map((item, itemIndex) => renderLogoItem(item, `${copyIndex}-${itemIndex}`))}
=======
            {logos.map((item, itemIndex) =>
              renderLogoItem(item, `${copyIndex}-${itemIndex}`)
            )}
>>>>>>> a89ec2506039fa1e25afad5d269884c9e4aa7e32
          </ul>
        )),
      [copyCount, logos, renderLogoItem]
    );

    const containerStyle = useMemo(
      (): React.CSSProperties => ({
<<<<<<< HEAD
        width: toCssLength(width) ?? '100%',
        ...cssVariables,
        ...style
      }),
      [width, cssVariables, style]
=======
        width: toCssLength(width) ?? "100%",
        ...style,
        "--logoloop-gap": `${gap}px`,
        "--logoloop-logoHeight": `${logoHeight}px`,
        ...(fadeOutColor && { "--logoloop-fadeColor": fadeOutColor }),
      }),
      [width, gap, logoHeight, fadeOutColor, style]
>>>>>>> a89ec2506039fa1e25afad5d269884c9e4aa7e32
    );

    return (
      <div
        ref={containerRef}
<<<<<<< HEAD
        className={rootClasses}
        style={containerStyle}
        role="region"
        aria-label={ariaLabel}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
=======
        className={cx(
          "relative overflow-x-hidden group",
          "dark:[--logoloop-fadeColorAuto:#0b0b0b]",
          scaleOnHover && "py-[calc(var(--logoloop-logoHeight)*0.1)]",
          className
        )}
        style={containerStyle}
        role="region"
        aria-label={ariaLabel}
        onMouseEnter={() => pauseOnHover && setIsHovered(true)}
        onMouseLeave={() => pauseOnHover && setIsHovered(false)}
>>>>>>> a89ec2506039fa1e25afad5d269884c9e4aa7e32
      >
        {fadeOut && (
          <>
            <div
              aria-hidden
              className={cx(
<<<<<<< HEAD
                'pointer-events-none absolute inset-y-0 left-0 z-[1]',
                'w-[clamp(24px,8%,120px)]',
                'bg-[linear-gradient(to_right,var(--logoloop-fadeColor,var(--logoloop-fadeColorAuto))_0%,rgba(0,0,0,0)_100%)]'
=======
                "pointer-events-none absolute inset-y-0 left-0 z-[1]",
                "w-[clamp(24px,8%,120px)]",
                "bg-[linear-gradient(to_right,var(--logoloop-fadeColor,var(--logoloop-fadeColorAuto))_0%,rgba(0,0,0,0)_100%)]"
>>>>>>> a89ec2506039fa1e25afad5d269884c9e4aa7e32
              )}
            />
            <div
              aria-hidden
              className={cx(
<<<<<<< HEAD
                'pointer-events-none absolute inset-y-0 right-0 z-[1]',
                'w-[clamp(24px,8%,120px)]',
                'bg-[linear-gradient(to_left,var(--logoloop-fadeColor,var(--logoloop-fadeColorAuto))_0%,rgba(0,0,0,0)_100%)]'
=======
                "pointer-events-none absolute inset-y-0 right-0 z-[1]",
                "w-[clamp(24px,8%,120px)]",
                "bg-[linear-gradient(to_left,var(--logoloop-fadeColor,var(--logoloop-fadeColorAuto))_0%,rgba(0,0,0,0)_100%)]"
>>>>>>> a89ec2506039fa1e25afad5d269884c9e4aa7e32
              )}
            />
          </>
        )}

        <div
<<<<<<< HEAD
          className={cx('flex w-max will-change-transform select-none', 'motion-reduce:transform-none')}
=======
          className={cx(
            "flex w-max will-change-transform select-none",
            "motion-reduce:transform-none"
          )}
>>>>>>> a89ec2506039fa1e25afad5d269884c9e4aa7e32
          ref={trackRef}
        >
          {logoLists}
        </div>
      </div>
    );
  }
);

<<<<<<< HEAD
LogoLoop.displayName = 'LogoLoop';
=======
LogoLoop.displayName = "LogoLoop";
>>>>>>> a89ec2506039fa1e25afad5d269884c9e4aa7e32

export default LogoLoop;
