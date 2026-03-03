"use client"

import Image from "next/image"
import { useState } from "react"
import { X } from "lucide-react"

const images = [
  {
    src: "/images/disaster-1.jpg",
    alt: "Enchentes devastam bairros em Minas Gerais",
    caption: "Ruas completamente submersas pela força das águas",
  },
  {
    src: "/images/disaster-2.jpg",
    alt: "Voluntários ajudando vítimas",
    caption: "Voluntários trabalham incansavelmente para ajudar as vítimas",
  },
  {
    src: "/images/disaster-3.jpg",
    alt: "Casas destruídas por deslizamentos",
    caption: "Deslizamentos de terra destroem comunidades inteiras",
  },
  {
    src: "/images/disaster-4.jpg",
    alt: "Famílias recebendo doações",
    caption: "Famílias recebem esperança através de doações",
  },
]

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <section id="galeria" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
            A Realidade que <span className="text-primary">Não Podemos Ignorar</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Cada imagem conta uma história de perda, mas também de esperança. 
            Veja o que está acontecendo e entenda a urgência da sua ajuda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl cursor-pointer aspect-[4/3]"
              onClick={() => setSelectedImage(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-foreground font-medium text-lg">
                  {image.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div 
            className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <div className="relative w-full max-w-4xl aspect-[4/3]">
              <Image
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                fill
                className="object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
