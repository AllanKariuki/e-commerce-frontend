import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import ProductDetailCard from "../components/ProductDetailCard";
import StayInTouch from "../components/StayInTouch";
import FreshArrivals from "../components/index/FreshArrivals";
import Promotions from "../components/index/Promotions";
import FAQS from "../components/index/FAQS";
import BrandStory from "../components/index/BrandStory";
import Testimonials from "../components/index/Testimonials";
import Categories from "../components/index/Categories";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "../redux/store";
import { fetchProducts, selectProducts } from "../redux/slices/productsSlice";

const slides = [
  {
    eyebrow: "Summer 2026",
    title: ["Color", "of Summer", "Outfit"],
    sub: "Sun-friendly fabrics, breezy silhouettes and AI try-on — built for the season.",
    image: "/assets/images/cool-denim.jpg",
    cta: "Start shopping",
    accent: "bg-coral-soft",
  },
  {
    eyebrow: "New drop",
    title: ["Light", "linen", "essentials"],
    sub: "Stitched in Nairobi, made to move with you all year long.",
    image: "/assets/images/hoodie.jpg",
    cta: "Shop linen",
    accent: "bg-mint",
  },
  {
    eyebrow: "Limited edition",
    title: ["Studio", "capsule", "collection"],
    sub: "Twelve handpicked pieces, available while stocks last.",
    image: "/assets/images/sweat-shirt.jpg",
    cta: "Explore capsule",
    accent: "bg-sand",
  },
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector(selectProducts);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchProducts({}) as any);
  }, [dispatch]);

  const nextSlide = () => setCurrentSlide((p) => (p + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((p) => (p - 1 + slides.length) % slides.length);

  const slide = slides[currentSlide];

  return (
    <div className="bg-page">
      {/* HERO ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div
          className={`relative overflow-hidden rounded-card-lg ${slide.accent} transition-colors duration-500`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 md:p-12 lg:p-14 min-h-[520px] md:min-h-[600px]">
            {/* Text */}
            <div className="lg:col-span-6 flex flex-col justify-between relative z-10">
              <div>
                <span className="chip bg-white/90 text-ink-1 border-transparent">
                  <Sparkles size={12} /> {slide.eyebrow}
                </span>
                <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.95] mt-6 text-ink-1">
                  {slide.title.map((line) => (
                    <span key={line} className="block">{line}</span>
                  ))}
                </h1>
                <p className="text-ink-muted leading-relaxed max-w-md mt-6">
                  {slide.sub}
                </p>
              </div>

              <div className="flex items-center gap-3 mt-8">
                <button
                  onClick={() => navigate("/products")}
                  className="btn-pill btn-primary px-7 py-4"
                >
                  {slide.cta}
                  <ArrowUpRight size={16} />
                </button>
                <button
                  onClick={() => navigate("/products")}
                  className="btn-pill btn-light"
                >
                  Top collections
                </button>
              </div>
            </div>

            {/* Image */}
            <div className="lg:col-span-6 relative">
              <div className="relative h-full min-h-[300px] rounded-card-lg overflow-hidden bg-ink-1/5">
                <img
                  src={slide.image}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Floating product card */}
                <div className="absolute bottom-5 left-5 right-5 lg:right-auto lg:max-w-[260px] bg-white/95 backdrop-blur rounded-card p-3 flex items-center gap-3 shadow-card">
                  <div className="w-12 h-12 rounded-xl bg-surface-2 shrink-0 overflow-hidden">
                    <img src={slide.image} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[13px] font-medium text-ink-1 truncate">Featured look</p>
                    <p className="text-xs text-ink-muted">From Ksh 4,500</p>
                  </div>
                  <button
                    onClick={() => navigate("/products")}
                    className="w-9 h-9 rounded-full bg-ink-1 text-white flex items-center justify-center shrink-0"
                  >
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Slide controls */}
          <div className="absolute top-6 right-6 flex items-center gap-2 z-20">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-white/95 backdrop-blur hover:bg-white text-ink-1 flex items-center justify-center transition-colors"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-white/95 backdrop-blur hover:bg-white text-ink-1 flex items-center justify-center transition-colors"
            >
              <ChevronRight size={16} />
            </button>
          </div>

          {/* Slide indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === currentSlide ? "w-8 bg-ink-1" : "w-1.5 bg-ink-1/30"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* PROMOTIONS ====================================================== */}
      <Promotions />

      {/* FRESH ARRIVALS ================================================== */}
      <FreshArrivals />

      {/* PRODUCT CATALOG ================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-20">
        <header className="flex items-end justify-between mb-10">
          <div>
            <span className="chip mb-4">Product catalog</span>
            <h2 className="font-display text-4xl md:text-5xl text-ink-1 mt-3 leading-tight max-w-xl">
              The full collection, ready to shop
            </h2>
          </div>
          <button
            onClick={() => navigate("/products")}
            className="hidden md:inline-flex btn-pill btn-ghost"
          >
            View all
            <ArrowUpRight size={14} />
          </button>
        </header>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {products.slice(0, 8).map((product) => (
            <ProductDetailCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* CATEGORIES ====================================================== */}
      <Categories />

      {/* TESTIMONIALS ==================================================== */}
      <Testimonials />

      {/* BRAND STORY ===================================================== */}
      <BrandStory />

      {/* FAQ ============================================================= */}
      <FAQS />

      {/* NEWSLETTER ====================================================== */}
      <StayInTouch />
    </div>
  );
};

export default Index