import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const events = [
  {
    title: "Introduction to Meditation",
    date: "March 15, 2024",
    time: "10:00 AM - 12:00 PM",
    location: "Main Temple Hall",
    description: "Learn the basics of meditation and its benefits for spiritual growth.",
  },
  {
    title: "Bhagavad Gita Study Circle",
    date: "March 20, 2024",
    time: "6:00 PM - 8:00 PM",
    location: "Virtual Session",
    description: "Weekly discussion on the teachings of the Bhagavad Gita.",
  },
  {
    title: "Sanskrit Workshop",
    date: "March 25, 2024",
    time: "4:00 PM - 6:00 PM",
    location: "Learning Center",
    description: "Introduction to Sanskrit language and sacred texts.",
  },
];

export default function Events() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-base font-semibold leading-7 text-primary-600">Upcoming Events</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Join Our Community Events
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Participate in our regular events designed to deepen your spiritual practice and connect with fellow seekers.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {events.map((event) => (
            <div
              key={event.title}
              className="flex flex-col rounded-2xl bg-card p-8 ring-1 ring-muted/10 transition-all hover:ring-primary-600/20"
            >
              <div className="flex items-center gap-x-4">
                <Calendar className="h-6 w-6 text-primary-600" />
                <time className="text-sm leading-6 text-muted-foreground">
                  {event.date}
                </time>
              </div>
              <h3 className="mt-4 text-lg font-semibold leading-8 text-foreground">
                {event.title}
              </h3>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">
                {event.description}
              </p>
              <div className="mt-4 text-sm text-muted-foreground">
                <p>{event.time}</p>
                <p>{event.location}</p>
              </div>
              <Button className="mt-6 w-full bg-primary-600 hover:bg-primary-700">
                Register Now
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}