// @ts-ignore
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { motion } from "framer-motion";

import "@splidejs/react-splide/css";

import Image from "next/image";
import { X } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

const SlideShow = ({ images }: { images: (string | { src: string; zoomSrc: string })[] }) => {
  const [hovering, setHovering] = useState(false);
  return (
    <Splide
      options={{
        autoplay: "true",
        perPage: 1,
        start: 0,
        rewind: true,
        padding: { left: '3rem', right: '3rem' },
        gap: "1rem",
      }}
      hasTrack={false}
    >
      <SplideTrack>
        {images.map((image, idx) => {
          const isObject = typeof image === "object" && image !== null;
          const displaySrc = isObject ? (image as { src: string }).src : (image as string);
          const zoomSrcVal = isObject ? (image as { zoomSrc: string }).zoomSrc : (image as string);

          return (
            <SplideSlide key={idx} className="flex items-center">
              <Dialog>
                <DialogTrigger
                  className="relative"
                  onMouseEnter={() => setHovering(true)}
                  onMouseLeave={() => setHovering(false)}
                >
                  <Image
                    src={displaySrc}
                    alt="screenshot"
                    width={1000}
                    height={1000}
                    className="w-full rounded-lg h-auto"
                  />
                  <AnimatePresence>
                    {hovering && (
                      <motion.div
                        className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black/50 text-white backdrop-blur-[1px]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        Click to zoom
                      </motion.div>
                    )}
                  </AnimatePresence>
                </DialogTrigger>
                <DialogContent className="max-w-[95vw] max-h-[95vh] w-full h-full flex flex-col items-center justify-center bg-transparent outline-none border-none p-0 shadow-none">
                  <DialogHeader className="w-full absolute top-4 left-4 z-50 flex flex-row justify-between pr-8">
                    <DialogDescription className="text-white drop-shadow-md">
                      {displaySrc.split("/").pop()}
                    </DialogDescription>
                    <DialogClose className="absolute right-8 top-0 rounded-full bg-white/20 p-2 hover:bg-white/40 transition-colors">
                      <X className="h-6 w-6 text-white" />
                      <span className="sr-only">Close</span>
                    </DialogClose>
                  </DialogHeader>
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src={zoomSrcVal}
                      alt="screenshot"
                      fill
                      className="object-contain"
                      sizes="95vw"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            </SplideSlide>
          );
        })}
      </SplideTrack>
      <div className="splide__progress">
        <div className="splide__progress__bar"></div>
      </div>
    </Splide>
  );
};
export default SlideShow;
