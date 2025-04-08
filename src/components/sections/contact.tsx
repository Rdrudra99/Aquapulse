"use client";

import { CalendarIcon, Check, MoveRight, Loader2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export default function ContactSection() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(event.currentTarget);
      formData.append("access_key", "ac79758c-6137-4a96-aed7-d26d3a16e1f3");
      formData.append("selected_date", date ? format(date, "PPP") : "");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Thank you for reaching out! We'll get back to you soon.");
        (event.target as HTMLFormElement).reset();
        setDate(new Date());
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again later.");
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full py-16 lg:py-24 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="flex flex-col gap-6 md:text-left">
            <Badge variant="secondary" className="text-primary w-full max-w-fit">
              <span className="text-primary">Get in Touch</span>
            </Badge>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Let’s Transform Aquaculture Together
            </h1>
            <p className="text-base text-muted-foreground max-w-lg mx-auto md:mx-0">
              Ready to scale your farm with smart tech? Talk to our aqua experts and explore how Aquapulse can help you grow—efficiently and sustainably.
            </p>

            <div className="space-y-5">
              {[
                {
                  title: "Expert Advisory",
                  description: "Personalized guidance from seasoned aquaculture professionals",
                },
                {
                  title: "24×7 Support",
                  description: "Quick responses, anytime you need us",
                },
                {
                  title: "Tailored Solutions",
                  description: "Smart tools built for your farm’s specific needs",
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium text-lg">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>


          {/* Right Column - Form */}
          <div className="rounded-xl border bg-card p-6 md:p-8 shadow-lg w-full max-w-lg mx-auto md:mx-0">
            <form onSubmit={onSubmit} className="space-y-6">
              <div className=" md:text-left">
                <h2 className="text-2xl font-semibold tracking-tight">Schedule a Meeting</h2>
                <p className="text-muted-foreground">Fill in your details and preferred date.</p>
              </div>

              <div className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="date">Preferred Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="firstname">First Name</Label>
                    <Input id="firstname" name="firstname" required />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="lastname">Last Name</Label>
                    <Input id="lastname" name="lastname" required />
                  </div>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" required />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project..."
                    className="min-h-[100px]"
                  />
                </div>
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Schedule Consultation
                    <MoveRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
