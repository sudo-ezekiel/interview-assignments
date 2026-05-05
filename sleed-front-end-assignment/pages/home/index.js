"use client";

import { useRouter } from "next/navigation";

import HeroImageSection from "@/components/home/heroImageSection";
import PhotoGallerySection from "@/components/home/photoGallerySection";
import HalfSizeImagesSection from "@/components/home/halfSizeImagesSection";

const HomePage = () => {
  const router = useRouter();

  return (
    <>
      <HeroImageSection />
      <PhotoGallerySection />
      <HalfSizeImagesSection />
    </>
  );
};

export default HomePage;
