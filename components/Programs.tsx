import { Button } from "@/components/ui/button";

const programs = [
  {
    title: "Vedanta Studies",
    description: "Deep dive into the philosophical teachings of Vedanta through structured courses.",
    image: "https://images.unsplash.com/photo-1609607847926-da4702f01fef?auto=format&fit=crop&q=80&w=800&h=600",
  },
  {
    title: "Meditation Retreats",
    description: "Immersive meditation experiences in serene environments for deep spiritual practice.",
    image: "https://images.unsplash.com/photo-1604480132736-44c188fe4d20?auto=format&fit=crop&q=80&w=800&h=600",
  },
  {
    title: "Youth Programs",
    description: "Engaging activities and teachings designed specifically for young spiritual seekers.",
    image: "https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd?auto=format&fit=crop&q=80&w=800&h=600",
  },
];

export default function Programs() {
  return (
    <div className="bg-secondary py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">Programs</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Transform Your Life Through Ancient Wisdom
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Our carefully curated programs combine traditional teachings with modern understanding to provide a comprehensive spiritual education.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {programs.map((program) => (
            <article key={program.title} className="flex flex-col items-start">
              <div className="relative w-full">
                <img
                  src={program.image}
                  alt={program.title}
                  className="aspect-[16/9] w-full rounded-2xl bg-secondary object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime="2024" className="text-muted-foreground">
                    Ongoing Programs
                  </time>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-foreground">
                    <span className="absolute inset-0" />
                    {program.title}
                  </h3>
                  <p className="mt-5 text-sm leading-6 text-muted-foreground">
                    {program.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Button className="bg-primary-600 hover:bg-primary-700">
            View All Programs
          </Button>
        </div>
      </div>
    </div>
  );
}