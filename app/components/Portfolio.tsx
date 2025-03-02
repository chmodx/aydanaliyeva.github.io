"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Palette, Maximize } from "lucide-react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import AnimatedSectionHeader from "./AnimatedSectionHeader"

const artworks = [
  {
    title: "Desert/Dunes in Distortion",
    description:
      "Immerse yourself in the sensory landscape of the desert with this captivating mixed media artwork on cardboard. Inspired by the desert's unique soundscapes and textures, this piece invites viewers to feel the whispers of the sand, the distortions of heat, and the chaotic beauty of its shifting dunes. Through a dynamic blend of materials and techniques, experience the desert's symphony as it resonates with layers of sound, texture, and emotion. Let the artwork transport you to a realm where every grain of sand tells a story, and where chaos and harmony intertwine in a mesmerizing dance of creation.",
    details: "Painting, Oil on Pressed Cardboard / 55 W x 25 H cm",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-AsP2g5qbHIl1gbXDohDybak9PDNXty.png",
  },
  {
    title: "Nocturnal Forest",
    description:
      "In my latest painting, I delved into a realm where music meets visual expression, crafting a painting on canvas using a blend of oil and tempera paints. Inspired by the evocative melodies of classical music, I ventured into the realms of abstract and expressionism, aiming to evoke a profound emotional journey within the viewer.\n\nIn this composition, I sought to conjure sensations of mystery and solitude, tinged with a subtle glimmer of hope. Through transitional colors I depicted the viewer as if wandering through a dense forest, enveloped by an atmosphere of enigma and introspection.\n\nContrasted and main element of the composition is the moon, its soft glow casting an ethereal light upon the scene, serving as a beacon of guidance amidst the darkness. Through the interplay of light and shadow, I aimed to convey a sense of loneliness tempered by the tranquil beauty of the nocturnal landscape.\n\nAs the viewer immerses themselves in the painting, they may feel a profound sense of introspection and contemplation, as if they too are wandering through the labyrinthine depths of the forest, seeking solace and illumination in the midst of uncertainty.",
    details: "Painting, Oil on Canvas / 60 W x 40 H cm",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-p4oz6l6I2GvNppt0hT3O85KPxZXYjx.png",
  },
  {
    title: "The Field",
    description:
      "The Field is an oil painting on canvas that captures the essence of a field through an expressionist lens. Inspired by the works of Vincent van Gogh and his letters to his brother, which detail his thoughts on color combinations for his artworks and the feelings behind them, this piece reflects my exploration of the relationship between chaos and tranquility.\n\nIn this work, I aimed to depict the vibrant yet turbulent environment surrounding the field, utilizing a palette that mirrors the shifting colors of the sky and the earth. The sun, peeking out from behind a cloud, serves as the focal point of the painting, representing a moment of harmony amidst the chaos. This interplay of light and color invites viewers to experience the tranquility that exists within the natural disorder, encapsulating both the beauty and complexity of the landscape.",
    details: "Painting, Oil on Canvas / 55 W x 20 H cm",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-13eaQnsesUQNFEyIudRV6WyujNesg3.png",
  },
  {
    title: "Shaman: Fourteen Echoes of Power",
    description:
      "This evocative artwork portrays a shaman standing in a powerful pose, rhythmically drumming on an intricately designed drum. The title, \"Fourteen Echoes of Power,\" stems from the 14 lacing points on the drum, which symbolize the 14 elements of the world and their profound connection to nature. These lacing points are not merely structural—they carry meaning, echoing the shaman's role as a bridge between the spiritual and earthly realms, and reflecting the balance and harmony inherent in the natural world.\n\nThe choice of a muted grey palette creates a serene yet mysterious atmosphere, with deliberate accents of blue and yellow to draw the viewer's eye to significant details. The blue and yellow hues highlight the tapes around the drum and the flowing elements of the shaman's attire, adding an ethereal dimension to the composition.\n\nThe color scheme was inspired by the letters of Vincent van Gogh, particularly one in which he described a painting created with a predominance of grey tones offset by two light colors. This concept resonated deeply with me, leading to the intentional use of this color palette to evoke both harmony and contrast.\n\nThrough this piece, I aim to invite viewers to reflect on the intricate relationships between humanity, nature, and the spiritual forces that bind them. The rhythmic drumming of the shaman, paired with the symbolic 14 lacing points, embodies a timeless connection to the world's elemental energies.",
    details: "Painting, Gouache and Watercolor on Paper / 50 W x 70 H cm",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1GBOdeh57ESIHqG7q4kngGk4JrTFz7.png",
  },
  {
    title: "Red Journey",
    description:
      '"Red Journey" is an artwork that explores the contrast between the majestic mountain and the lone parachuter. The use of oil and acrylic paints on canvas creates a striking visual impact, with the mountain depicted in darker hues while the parachute stands out in vibrant red. The grey sky with hints of blue adds a bright effect to the piece, enhancing the overall atmosphere. Texture is utilized to draw parallels between the mountain and other elements in the composition. Inspired by a photograph, I aimed to convey the sense of grandeur and solitude associated with mountains, juxtaposed with the presence of the parachuter. Through this work, viewers are invited to experience the interplay of texture, contrast, and emotions, evoking a contemplative response to the relationship between the mountain and the parachuter.',
    details: "Painting, Oil on canvas / 70 W x 110 H cm",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-KoOOiaVqIuFtwWuq1DfZO7QmmTidRF.png",
  },
  {
    title: "Waves",
    description:
      '"Waves" is a captivating expressionist rendition captured on canvas with the medium of oil paint. Inspired by the works of Gustave Courbet, particularly his masterful portrayal of waves, this artwork channels the essence of nature\'s tumultuous beauty with an impassioned brushstroke.\n\nThe focus of the piece lies in the depiction of waves, rendered with fluidity and intensity that mirrors their ever-shifting forms and colors. Utilizing a palette predominantly comprised of varying tones of blue, artwork captures the essence of the ocean\'s depth and movement. Contrastingly, bursts of bright yellow, white, and orange strokes represent the sun\'s radiant presence, casting a luminous glow upon the tumultuous waters.\n\nThrough strong, flowing brushstrokes imbues the composition with a palpable sense of energy and motion, evoking the relentless force of the waves as they crash against the rocks. It is a symphony of tension and tranquility, where the viewer is invited to experience the magnificent collision of peace and passion inherent in the tumultuous embrace of the ocean.\n\n"Waves" beckons viewers to immerse themselves in the awe-inspiring power of nature, to feel the rhythmic pulse of the waves and to hear the symphony of their crashing against the shore. It is a testament to the eternal dance between serenity and chaos, captured in vibrant hues and bold strokes of expressionist artistry.',
    details: "Painting, Oil on Canvas / 75 W x 120 H cm",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-32ajXH25qd4uUY885yIdlljct2orEW.png",
  },
  {
    title: "Shaman: Echoes from Beyond",
    description:
      "In this oil-on-canvas piece, a shaman stands with a drum in one hand and a drumstick in the other, embodying an age-old connection between Earth and the cosmos. The shaman's attire is adorned with symbols that honor the forces of nature, with elements that hint at a deep respect for the land and its rhythms. The background, an abstract blend of earthy tones, suggests a natural environment infused with shamanic energy.\n\nThe drum, a focal point of the artwork, is portrayed with hues inspired by the planet Pluto, representing the shaman's bridge to realms beyond our own—a link to the outer world and spirit realms. An animal symbol on the drum further embodies this connection, signifying the shaman's role as a guide between worlds. Bold and energetic brushstrokes evoke movement and spiritual power, inviting viewers into the artwork's depth and mystery, where the spirit of the shaman resonates beyond the canvas.",
    details: "Painting, Oil on Canvas / 97 W x 93 H cm",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cUpQqF7AR6BIgv7rtbkM9sddJVp36Q.png",
  },
  {
    title: "Autumn",
    description:
      "In my painting, I embarked on a journey to encapsulate the essence of autumn using a canvas as my medium and oil paints as my palette. With each stroke of the brush, I sought to evoke the vibrant hues of fall foliage, from the fiery oranges to the rich browns and golden yellows that dance across the canvas.\n\nWorking in an abstract style, I allowed the colors to blend and merge, creating a tapestry of swirling forms and textures that mimic the chaotic beauty of nature in its seasonal transformation. The layers of paint build upon one another, creating depth and dimension, while hints of crimson and deep purple add a sense of mystery and intrigue.\n\nAs I immersed myself in the creative process, I aimed not only to capture the visual splendor of autumn but also the intangible essence of the season – the crispness in the air, the rustle of leaves underfoot, and the fleeting sense of nostalgia that accompanies the changing of the seasons. As in one morning i woke up and saw changing weather and colors also i felt really touched and wanted to capture this moment. For me personally, autumn is time of rethinking and slowing of time.",
    details: "Painting, Oil on Canvas / 50 W x 70 H cm",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Q1CAwbUdDDe0z6QfIXv6GVfQXqjcMS.png",
  },
  {
    title: "Reflection",
    description:
      "\"The Reflection\" is inspired by a serene moment near my home, where the bright sunlight filtered through the trees, creating an enchanting interplay of light and shadow on the ground. The composition intentionally places the sun and trees in the top third of the canvas, while the remaining two-thirds capture the intricate shadows, inviting viewers to experience the scene as if gazing upward toward the sunlight.\n\nIn the shadowed area, I used tones of green, violet-grey, and ultramarine blue to craft not only the ground's reflection but also an ethereal sense of another world—perhaps a universe beyond our own. Hidden within the reflection is a subtle moon, a symbolic contrast to the sun, representing dualities like light and dark, reality and imagination.\n\nAmid this tranquil scene, a lone silhouette traverses the landscape, adding a human connection to the painting's exploration of light, space, and introspection. The calming ambiance and layered reflections encourage viewers to pause, reflect, and immerse themselves in its otherworldly beauty.\n\nThis artwork is designed to be hung high, allowing the viewer to look upward and fully experience the expressive warmth of the sunlight.",
    details: "Painting, Oil on Canvas / 70 W x 110 H cm",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-YmhGLqENX8TacYWGCPBBEwkKzMLBbX.png",
  },
  {
    title: "Desert: Path of the Dunes",
    description:
      "In my abstract work depicting the desert, I sought to express not just the physical vastness of the landscape but also the emotional weight it carries. This piece is deeply influenced by The Alchemist by Paulo Coelho, a story that speaks to the desert as a metaphor for the soul's journey—its trials, its silences, and the lessons it imparts. In the book, the desert becomes a place of profound discovery, and I wanted to capture that essence of inner reflection and solitude.\n\nIn creating this artwork, I was drawn to the dunes of the desert, particularly their flowing, ever-changing forms. I listened to recordings of desert winds and imagined myself standing among those dunes, where the sound of the wind is almost a voice itself, speaking of the passage of time and the isolation that one feels in such an endless expanse. As I painted, I let that sound guide me, hoping to infuse the movement and texture of the sand with the subtle echoes of wind and the stillness of the desert's breath. It's a landscape that is both empty and full, where loneliness becomes almost tangible, and the whisper of the wind is a constant companion. My hope is that viewers can immerse themselves in that experience, feeling not only the desolation but also the quiet beauty of the desert, where time seems to stretch and the surroundings become a mirror for introspection.",
    details: "Painting, Acrylic and Tempera on Pressed Cardboard / 70 W x 25 H cm",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7zvATJUrqMMBVxldLzCLII3axhgU7E.png",
  },
]

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 transition-colors duration-300 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSectionHeader title="Portfolio" />
        <div className="grid grid-cols-1 gap-12">
          {artworks.map((artwork, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="relative aspect-[4/3] cursor-pointer group">
                      <Image
                        src={artwork.image || "/placeholder.svg"}
                        alt={artwork.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Maximize className="w-10 h-10 text-white" />
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl">
                    <div className="relative aspect-[4/3] w-full">
                      <Image
                        src={artwork.image || "/placeholder.svg"}
                        alt={artwork.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </DialogContent>
                </Dialog>
                <div className="p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4 dark:text-white">{artwork.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 whitespace-pre-line">{artwork.description}</p>
                  </div>
                  <div className="flex items-center text-gray-500 dark:text-gray-400">
                    <Palette className="w-5 h-5 mr-2 flex-shrink-0" />
                    <span>{artwork.details}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

