import Image from "next/image";
import Link from "next/link";
/* import { Button } from "@/components/ui/button"; */
/* import { Input } from "@/components/ui/input"; */
/* import { Textarea } from "@/components/ui/textarea"; */
/* import { ChevronRight, Mail, MapPin, Phone } from "lucide-react"; */

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F5F5F0] text-[#3E2723]">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b border-[#D7CCC8]">
        <Link className="flex items-center justify-center" href="#">
          <TreeIcon className="h-6 w-6 text-[#795548]" />
          <span className="ml-2 text-xl font-bold text-[#3E2723]">
            Custom Furniture Co.
          </span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:text-[#795548] transition-colors"
            href="#features"
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium hover:text-[#795548] transition-colors"
            href="#gallery"
          >
            Gallery
          </Link>
          <Link
            className="text-sm font-medium hover:text-[#795548] transition-colors"
            href="#testimonials"
          >
            Testimonials
          </Link>
          <Link
            className="text-sm font-medium hover:text-[#795548] transition-colors"
            href="#contact"
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-[#EFEBE9]">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <Image
                alt="Custom-made wooden bench"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                height="550"
                src="/placeholder.svg"
                width="550"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-[#3E2723]">
                    Crafting Your Perfect Space
                  </h1>
                  <p className="max-w-[600px] text-[#5D4037] md:text-xl">
                    Bespoke benches and furniture, tailored to your unique style
                    and needs. Transform your space with our custom creations.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-[#795548] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#795548]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#795548]"
                    href="#contact"
                  >
                    Get Started
                  </Link>
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md border border-[#795548] bg-transparent px-8 text-sm font-medium text-[#795548] shadow-sm transition-colors hover:bg-[#795548]/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#795548]"
                    href="#gallery"
                  >
                    View Gallery
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-white"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-[#3E2723]">
              Why Choose Us
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border-[#D7CCC8] p-4 rounded-lg">
                <div className="p-2 bg-[#EFEBE9] text-[#795548] rounded-full">
                  <PaintbrushIcon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-[#3E2723]">
                  Custom Design
                </h3>
                <p className="text-[#5D4037] text-center">
                  Tailored to your specific needs and preferences
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-[#D7CCC8] p-4 rounded-lg">
                <div className="p-2 bg-[#EFEBE9] text-[#795548] rounded-full">
                  <GemIcon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-[#3E2723]">
                  Premium Quality
                </h3>
                <p className="text-[#5D4037] text-center">
                  Crafted from the finest materials for lasting beauty
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-[#D7CCC8] p-4 rounded-lg">
                <div className="p-2 bg-[#EFEBE9] text-[#795548] rounded-full">
                  <ClockIcon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-[#3E2723]">
                  Timely Delivery
                </h3>
                <p className="text-[#5D4037] text-center">
                  Efficient production and delivery process
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="gallery"
          className="w-full py-12 md:py-24 lg:py-32 bg-[#EFEBE9]"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-[#3E2723]">
              Our Creations
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <Image
                alt="Custom wooden bench"
                className="aspect-square object-cover rounded-lg"
                height="400"
                src="/placeholder.svg"
                width="400"
              />
              <Image
                alt="Handcrafted dining table"
                className="aspect-square object-cover rounded-lg"
                height="400"
                src="/placeholder.svg"
                width="400"
              />
              <Image
                alt="Modern outdoor furniture"
                className="aspect-square object-cover rounded-lg"
                height="400"
                src="/placeholder.svg"
                width="400"
              />
              <Image
                alt="Elegant office desk"
                className="aspect-square object-cover rounded-lg"
                height="400"
                src="/placeholder.svg"
                width="400"
              />
              <Image
                alt="Rustic bookshelf"
                className="aspect-square object-cover rounded-lg"
                height="400"
                src="/placeholder.svg"
                width="400"
              />
              <Image
                alt="Minimalist coffee table"
                className="aspect-square object-cover rounded-lg"
                height="400"
                src="/placeholder.svg"
                width="400"
              />
            </div>
          </div>
        </section>
        <section
          id="testimonials"
          className="w-full py-12 md:py-24 lg:py-32 bg-white"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-[#3E2723]">
              What Our Clients Say
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col gap-2 p-6 bg-[#EFEBE9] rounded-lg shadow">
                <p className="text-sm text-[#5D4037]">
                  "The custom bench they created for our entryway is absolutely
                  stunning. It's not just a piece of furniture, it's a work of
                  art."
                </p>
                <p className="font-semibold text-[#3E2723]">- Sarah J.</p>
              </div>
              <div className="flex flex-col gap-2 p-6 bg-[#EFEBE9] rounded-lg shadow">
                <p className="text-sm text-[#5D4037]">
                  "Their attention to detail is impeccable. The dining table
                  they made fits perfectly in our space and matches our style
                  exactly."
                </p>
                <p className="font-semibold text-[#3E2723]">- Michael T.</p>
              </div>
              <div className="flex flex-col gap-2 p-6 bg-[#EFEBE9] rounded-lg shadow">
                <p className="text-sm text-[#5D4037]">
                  "From design to delivery, the whole process was smooth and
                  professional. I highly recommend their services."
                </p>
                <p className="font-semibold text-[#3E2723]">- Emily R.</p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 bg-[#EFEBE9]"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-[#3E2723]">
              Get In Touch
            </h2>
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  {/* <MapPin className="w-5 h-5 text-[#795548]" /> */}
                  <span className="text-[#5D4037]">
                    123 Furniture Lane, Design City, DC 12345
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  {/* <Phone className="w-5 h-5 text-[#795548]" /> */}
                  <span className="text-[#5D4037]">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  {/* <Mail className="w-5 h-5 text-[#795548]" /> */}
                  <span className="text-[#5D4037]">
                    info@customfurniture.com
                  </span>
                </div>
              </div>
              <form className="space-y-4">
                <input
                  placeholder="Your Name"
                  className="bg-white border-[#D7CCC8] text-[#3E2723] placeholder-[#A1887F]"
                />
                <input
                  placeholder="Your Email"
                  type="email"
                  className="bg-white border-[#D7CCC8] text-[#3E2723] placeholder-[#A1887F]"
                />
                <textarea
                  placeholder="Your Message"
                  className="bg-white border-[#D7CCC8] text-[#3E2723] placeholder-[#A1887F]"
                />
                <button className="w-full bg-[#795548] text-white hover:bg-[#795548]/90">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-[#D7CCC8]">
        <p className="text-xs text-[#5D4037]">
          © 2024 Custom Furniture Co. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-xs hover:underline underline-offset-4 text-[#5D4037] hover:text-[#3E2723]"
            href="#"
          >
            Terms of Service
          </Link>
          <Link
            className="text-xs hover:underline underline-offset-4 text-[#5D4037] hover:text-[#3E2723]"
            href="#"
          >
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}

function ChevronRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function ClockIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function GemIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 3h12l4 6-10 13L2  9Z" />
      <path d="M11 3 8 9l4 13 4-13-3-6" />
      <path d="M2 9h20" />
    </svg>
  );
}

function MailIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function MapPinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PaintbrushIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3Z" />
      <path d="M9 8c-2 3-4 3.5-7 4l8 10c2-1 6-5 6-7" />
      <path d="M14.5 17.5 4.5 15" />
    </svg>
  );
}

function PhoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function TreeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 22v-2" />
      <path d="M19.5 9 21 10l-9 4-9-4 1.5-1 7.5 3.5L19.5 9z" />
      <path d="M12 22v-3" />
      <path d="M7 22v-1" />
      <path d="M17 14h.01" />
      <path d="M13 12h.01" />
      <path d="M9 13h.01" />
      <path d="M7 15h.01" />
      <path d="M18 11.5c.764-.51 1.35-1.248 1.699-2.09a4.41 4.41 0 0 0 .301-1.609V4.3a1.3 1.3 0 0 0-2.6 0V8" />
      <path d="M6 11.5a4.851 4.851 0 0 1-2-3.298V4.3a1.3 1.3 0 0 1 2.6 0V8" />
    </svg>
  );
}
