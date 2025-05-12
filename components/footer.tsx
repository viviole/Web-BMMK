import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { FacebookIcon, InstagramIcon, MapPinIcon, PhoneIcon, SendIcon, PhoneIcon as WhatsappIcon } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted/50 dark:bg-muted/20 border-t">
      <div className="container px-4 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                B
              </span>
              <span className="font-bold text-xl">BMMK</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Badan Mentoring Mahasiswa Kristen (BMMK) adalah organisasi yang berfokus pada pembentukan karakter
              Kristiani mahasiswa melalui program mentoring.
            </p>
            <div className="flex gap-4">
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" aria-label="Facebook">
                  <FacebookIcon className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" aria-label="Instagram">
                  <InstagramIcon className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" aria-label="WhatsApp">
                  <WhatsappIcon className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Tautan Cepat</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="#programs" className="text-muted-foreground hover:text-foreground transition-colors">
                  Program Kerja
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Galeri
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Artikel
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Kontak</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPinIcon className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <p className="text-muted-foreground">Gedung Fakultas, Lantai 2, Ruang 203, Kampus Universitas</p>
              </div>
              <div className="flex items-center gap-3">
                <PhoneIcon className="h-5 w-5 text-primary shrink-0" />
                <Link
                  href="tel:+6281234567890"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  +62 812 3456 7890
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <SendIcon className="h-5 w-5 text-primary shrink-0" />
                <Link
                  href="mailto:info@bmmk.org"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  info@bmmk.org
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div id="contact">
            <h3 className="font-bold text-lg mb-4">Hubungi Kami</h3>
            <form className="space-y-4">
              <Input placeholder="Nama" required />
              <Input type="email" placeholder="Email" required />
              <Textarea placeholder="Pesan" className="min-h-[100px]" required />
              <Button type="submit" className="w-full">
                Kirim Pesan
              </Button>
            </form>
          </div>
        </div>

        {/* Map */}
        <div className="mt-12">
          <h3 className="font-bold text-lg mb-4">Lokasi Kami</h3>
          <div className="w-full h-[300px] bg-muted rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.4!2d106.8!3d-6.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTInMDAuMCJTIDEwNsKwNDgnMDAuMCJF!5e0!3m2!1sen!2sid!4v1620000000000!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="BMMK Location"
            ></iframe>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Badan Mentoring Mahasiswa Kristen (BMMK). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
