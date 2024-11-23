import { BookOpen, Users, Heart, Lotus } from "lucide-react";

const features = [
  {
    name: "Ancient Teachings",
    description: "Access authentic Hindu scriptures and philosophical teachings explained in a contemporary context.",
    icon: BookOpen,
  },
  {
    name: "Community",
    description: "Join a vibrant community of spiritual seekers dedicated to personal growth and collective wisdom.",
    icon: Users,
  },
  {
    name: "Service",
    description: "Participate in seva (selfless service) activities that benefit society and nurture the soul.",
    icon: Heart,
  },
  {
    name: "Meditation",
    description: "Learn traditional meditation techniques to cultivate inner peace and spiritual awareness.",
    icon: Lotus,
  },
];

export default function Features() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">Our Offerings</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Everything you need on your spiritual journey
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Discover the transformative power of ancient wisdom through our comprehensive programs and community support.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col items-center text-center">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100">
                  <feature.icon className="h-8 w-8 text-primary-600" aria-hidden="true" />
                </div>
                <dt className="text-xl font-semibold leading-7 text-foreground">
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}