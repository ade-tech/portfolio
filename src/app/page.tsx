import Image from "next/image";
import HeadingSection from "./_components/HeadingSection";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      <HeadingSection />
      <section className="h-[100dvh] pt-24">
        <h1> Who am I</h1>
      </section>
    </main>
  );
}
