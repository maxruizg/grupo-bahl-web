import Hero from "~/components/Hero";
import About from "~/components/About";
import Brands from "~/components/Brands";
import Services from "~/components/Services";
import Projects from "~/components/Projects";
import Testimonials from "~/components/Testimonials";
import ContactForm from "~/components/ContactForm";

export default function Index() {
  return (
    <>
      <Hero />
      <About />
      <Brands />
      <Services />
      <Projects />
      <Testimonials />
      <ContactForm />
    </>
  );
}
