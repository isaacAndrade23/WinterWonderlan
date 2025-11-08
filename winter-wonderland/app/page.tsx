"use client";

import Head from "next/head";
import Image from "next/image";
import Snowfall from "react-snowfall";

// Lista de experiencias extraída de la imagen
const experiences = [
  {
    name: "Ice Skating Rink",
    description:
      "Festive outdoor Synthetic Ice Skating Rink perfect for family fun.",
  },
  {
    name: "Santa’s Village",
    description: "Take photos and share your Christmas wish list with Santa.",
  },
  {
    name: "Gingerbread Express Train",
    description: "Hop aboard the Choo Choo train.",
  },
  {
    name: "Santa’s Workshop Vendor Village",
    description: "Shop local artisan gifts, holiday decor, and festive treats.",
  },
  {
    name: "Christmas Light Tunnel",
    description: "Travel through the illuminated tunnel.",
  },
  {
    name: "“Cheers & Cheer” Garden (21+)",
    description: "Relax and unwind in a beer and wine garden.",
  },
  {
    name: "Live Entertainment",
    description: "Live Mariachis, local talent performances, DJs and choirs.",
  },
  {
    name: "Holly-Jolly Food Truck Row",
    description:
      "Delicious food and holiday favorites from local food truck vendors.",
  },
  {
    name: "Holiday Tree Lighting",
    description: "Opening celebration and Grand Tree lighting.",
  },
  {
    name: "The North Pole Pass",
    description:
      "Special access to lounge seating area, frontline access, and more.",
  },
];

export default function Home() {
  return (
    <div className="bg-white">
      <Snowfall
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          zIndex: 11,
        }}
        snowflakeCount={250}
      />

      <main className="relative z-10">
        <section className="relative h-[60vh] w-full overflow-hidden md:h-[80vh]">
          <Image
            src="/img/santashero.webp"
            alt="Banner de Santa's Wonderland en Exposition Park"
            fill
            priority
            quality={75}
            className="object-cover object-center"
          />
        </section>

        {/* --- Sección Mensaje (Basada en "A Message from Adriana") --- */}
        <section className="bg-gray-900 p-8 text-center text-white md:p-16 ">
          <div className="mx-auto max-w-3xl ">
            <div className="bg-brand-red mb-8 inline-block rounded px-8 py-3 text-white">
              <h2 className="m-0 text-3xl">A Message from Adriana Gallardo</h2>
            </div>
            <p className="mb-6 text-lg leading-relaxed">
              "For me, the holidays have always been more than gifts. They're
              about gratitude and creating lasting memories. Santa's Wonderland
              is a heartfelt tradition created to celebrate the families that
              inspire us. A place where joy and new traditions are made."
            </p>

            <p className="font-cursive text-3xl">
              With love and gratitude,
              <br />
              Adriana Gallardo
            </p>
          </div>
        </section>

        {/* --- Sección Experiencias (Basada en "Santa's Wonderland Experiences") --- */}
        <section className="bg-gray-100 p-8 text-center md:p-16">
          <div className="bg-brand-red mb-8 inline-block rounded px-8 py-3 text-red-900 font-extrabold">
            {/* (Limpié las clases de aquí que estaban raras) */}
            <h2 className="m-0 text-3xl font-montserrat md:text-4xl">
              Santa's Wonderland Experiences
            </h2>
          </div>
          <div className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-6 text-left md:grid-cols-2 lg:grid-cols-3">
            {experiences.map((exp) => (
              <div
                key={exp.name}
                className="rounded-lg bg-white p-6 shadow-md transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="text-brand-red mb-2 text-xl font-bold font-montserrat text-red-900 ">
                  {exp.name}
                </h3>
                <p className="text-gray-700">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white p-8 text-center md:p-16">
          <h2 className="text-4xl font-montserrat font-bold mb-4 text-gray-900">
            Our Sponsors
          </h2>
          <p className="text-xl text-gray-700 mb-12">
            A huge thank you to our partners for making this magic possible.
          </p>

          <div className="mb-12 flex justify-center">
            <div className="relative h-24 w-48">
              <Image
                src="/logos/logo-principal.png"
                alt="Sponsor Principal"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-12 gap-y-8 md:gap-x-16">
            <div className="relative h-16 w-36">
              <Image
                src="/logos/logo-secundario-1.png" // <-- CAMBIA ESTO
                alt="Sponsor Logo"
                fill
                className="object-contain"
              />
            </div>

            <div className="relative h-16 w-36">
              <Image
                src="/logos/logo-secundario-2.png"
                alt="Sponsor Logo"
                fill
                className="object-contain"
              />
            </div>

            <div className="relative h-16 w-36">
              <Image
                src="/logos/logo-secundario-3.png"
                alt="Sponsor Logo"
                fill
                className="object-contain"
              />
            </div>

            <div className="relative h-16 w-36">
              <Image
                src="/logos/logo-secundario-4.png"
                alt="Sponsor Logo"
                fill
                className="object-contain"
              />
            </div>

            <div className="relative h-16 w-36">
              <Image
                src="/logos/logo-secundario-5.png"
                alt="Sponsor Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
