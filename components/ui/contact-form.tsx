'use client';  // This directive marks this as a Client Component

import { Button } from "@/components/ui/button";
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function ContactForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    const mailtoLink = `mailto:bmmktelkomuniversity@gmail.com?subject=Pesan dari ${encodeURIComponent(
      name
    )}&body=${encodeURIComponent(
      `Nama: ${name}\nEmail: ${email}\n\nPesan:\n${message}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <Input name="name" placeholder="Nama" required />
      <Input name="email" type="email" placeholder="Email" required />
      <Textarea
        name="message"
        placeholder="Pesan"
        className="min-h-[100px]"
        required
      />
      <Button type="submit" className="w-full">
        Kirim Pesan
      </Button>
    </form>
  );
}