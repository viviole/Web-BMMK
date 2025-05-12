"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpIcon, BookOpenIcon, CalendarIcon, HeartIcon, UsersIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Home() {
  const programs = [
    {
      title: "Mentoring Kelas Kecil",
      description:
        "Program mentoring dalam kelompok kecil untuk membangun karakter Kristiani dan memahami Alkitab bersama.",
      icon: <UsersIcon className="h-10 w-10 text-primary" />,
      link: "#",
    },
    {
      title: "Mentoring Kelas Besar",
      description: "Kegiatan retreat untuk memperdalam iman dan membangun kebersamaan antar mahasiswa Kristen.",
      icon: <HeartIcon className="h-10 w-10 text-primary" />,
      link: "#",
    },
    {
      title: "Sekolah Mentor",
      description: "Sesi pembelajaran Alkitab secara mendalam dengan pembimbing yang berpengalaman.",
      icon: <BookOpenIcon className="h-10 w-10 text-primary" />,
      link: "#",
    },
    {
      title: "Creation Camp",
      description: "Seminar dengan topik-topik relevan untuk kehidupan mahasiswa Kristen di era modern.",
      icon: <CalendarIcon className="h-10 w-10 text-primary" />,
      link: "#",
    },
  ]

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-background dark:from-white/5 dark:to-background z-0" />
        <div className="container relative z-10 px-4 py-24 md:py-32 lg:py-40">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Badan Mentoring Mahasiswa Kristen
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-prose">
                Membentuk karakter Kristiani mahasiswa melalui program mentoring yang transformatif, mempersiapkan
                generasi muda untuk menjadi terang dan garam dunia.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href="#programs">Lihat Program</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="#about">Tentang Kami</Link>
                </Button>
              </div>
            </motion.div>
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="Ilustrasi BMMK"
                width={500}
                height={500}
                className="rounded-lg shadow-lg"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-muted/50 dark:bg-muted/20">
        <div className="container px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Tentang BMMK</h2>
            <div className="mt-4 mx-auto w-24 h-1 bg-primary rounded-full"></div>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Tentang BMMK"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4">Visi Kami</h3>
              <p className="text-muted-foreground mb-6">
                Menjadi wadah pembentukan karakter Kristiani yang transformatif bagi mahasiswa, mempersiapkan mereka
                menjadi pemimpin yang berkarakter Kristus di tengah masyarakat.
              </p>
              <h3 className="text-2xl font-bold mb-4">Misi Kami</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-primary">•</span>
                  <span>Menyelenggarakan program mentoring yang alkitabiah dan relevan</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-primary">•</span>
                  <span>Membangun komunitas mahasiswa Kristen yang solid dan saling menguatkan</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-primary">•</span>
                  <span>Mengembangkan kepemimpinan Kristiani di kalangan mahasiswa</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-primary">•</span>
                  <span>Menjadi berkat bagi kampus dan masyarakat sekitar</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-16 md:py-24">
        <div className="container px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Program Kerja</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Berbagai program yang kami selenggarakan untuk membangun iman dan karakter Kristiani mahasiswa
            </p>
            <div className="mt-4 mx-auto w-24 h-1 bg-primary rounded-full"></div>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border border-border h-full">
                  <CardHeader>
                    <div className="mb-2">{program.icon}</div>
                    <CardTitle>{program.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{program.description}</CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" asChild className="w-full">
                      <Link href={program.link}>Lihat Selengkapnya</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-muted/50 dark:bg-muted/20">
        <div className="container px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Testimoni</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Apa kata mahasiswa tentang program BMMK
            </p>
            <div className="mt-4 mx-auto w-24 h-1 bg-primary rounded-full"></div>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border border-border h-full">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                        <Image
                          src="/placeholder.svg?height=48&width=48"
                          alt={`Testimoni ${item}`}
                          width={48}
                          height={48}
                          className="rounded-full"
                        />
                      </div>
                      <div>
                        <CardTitle className="text-lg">Mahasiswa {item}</CardTitle>
                        <CardDescription>Fakultas Teknik</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Program mentoring BMMK sangat membantu saya dalam pertumbuhan iman dan menghadapi tantangan
                      sebagai mahasiswa Kristen. Saya mendapatkan komunitas yang mendukung dan pembimbing yang luar
                      biasa.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <motion.div
            className="bg-black/5 dark:bg-white/5 rounded-xl p-8 md:p-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight">Bergabunglah dengan BMMK</h2>
                <p className="mt-4 text-muted-foreground">
                  Jadilah bagian dari komunitas mahasiswa Kristen yang bertumbuh bersama dalam iman dan karakter. Daftar
                  sekarang untuk mengikuti program mentoring kami.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-end">
                <Button size="lg" asChild>
                  <Link href="#contact">Daftar Sekarang</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="#contact">Hubungi Kami</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Scroll to top button */}
      <Button
        variant="outline"
        size="icon"
        className="fixed bottom-6 right-6 z-50 rounded-full shadow-lg"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ArrowUpIcon className="h-5 w-5" />
      </Button>
    </div>
  )
}
