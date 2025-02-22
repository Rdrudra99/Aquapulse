'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Mail, Phone, YoutubeIcon } from 'lucide-react'
import { Toaster } from "@/components/ui/toaster"
import { useToast } from '@/hooks/use-toast'
import Link from 'next/link'
import { z } from 'zod'

// Add form schema definition
const formSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(1, 'Message is required'),
})

// Add type definition
type FormData = z.infer<typeof formSchema>

export default function ContactUsSection() {
  const { toast } = useToast()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: FormData) => {
    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    formData.append("access_key", "d39ca24f-66d7-4fa8-a2c4-e6f7fba25610");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const responseData = await response.json();

      if (responseData.success) {
        toast({
          title: `
       🎉 Success!
     `,
          description: `We have received your message and will get back to you soon.`,
          variant: "default",
        })
        reset();
      } else {
        throw new Error(responseData.message || "Something went wrong");
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "An error occurred. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <section className="relative py-16 px-4 container mx-auto" id='contact'>
      <div className="pointer-events-none absolute inset-x-0 -bottom-20 -top-20 bg-[radial-gradient(ellipse_35%_15%_at_40%_55%,hsl(var(--accent))_0%,transparent_100%)] lg:bg-[radial-gradient(ellipse_12%_20%_at_60%_45%,hsl(var(--accent))_0%,transparent_100%)]"></div>
      <div className="pointer-events-none absolute inset-x-0 -bottom-20 -top-20 bg-[radial-gradient(ellipse_35%_20%_at_70%_75%,hsl(var(--accent))_0%,transparent_80%)] lg:bg-[radial-gradient(ellipse_15%_30%_at_70%_65%,hsl(var(--accent))_0%,transparent_80%)]"></div>
      <div className="pointer-events-none absolute inset-x-0 -bottom-20 -top-20 bg-[radial-gradient(hsl(var(--accent-foreground)/0.1)_1px,transparent_1px)] [background-size:8px_8px] [mask-image:radial-gradient(ellipse_60%_60%_at_65%_50%,#000_0%,transparent_80%)]"></div>
      <div className="container grid w-full grid-cols-1 gap-x-32 overflow-hidden lg:grid-cols-2">
        <div className="w-full pb-10 md:space-y-10 md:pb-0">
          <div className="space-y-4 md:max-w-[40rem]">
            <h1 className="text-4xl font-medium lg:text-5xl">Contact Us</h1>
            <div className="text-muted-foreground md:text-base lg:text-lg lg:leading-7">
              Get in touch with us for any inquiries or support. We're here to help!
            </div>
          </div>
          <div className="mt-8 space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-medium">Our Office</h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-1">
                <div className="flex items-start space-x-2">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Bhubaneshwar</p>
                    <p className="text-sm text-muted-foreground">Bhubaneshwar, Odisha</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-medium">Contact Information</h2>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <a href="mailto:contactus@aquapulse.co.in" className="text-sm hover:underline">contactus@aquapulse.co.in</a>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-muted-foreground" />
                  <a href="tel:18008910550" className="text-sm hover:underline">1800 891 0550 (Toll-free)</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center lg:mt-2.5">
          <div className="relative flex w-full min-w-[20rem] max-w-[30rem] flex-col items-center overflow-visible md:min-w-[24rem]">
            <form onSubmit={handleSubmit(onSubmit)} className="z-10 space-y-6 w-full">
              <div className="w-full space-y-6 rounded-xl border border-border bg-background px-6 py-10 shadow-sm">
                <div>
                  <Label htmlFor="name" className="mb-2.5 text-sm font-medium">Name</Label>
                  <Input id="name" {...register('name')} placeholder="Your name" />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="email" className="mb-2.5 text-sm font-medium">Email</Label>
                  <Input id="email" type="email" {...register('email')} placeholder="your@email.com" />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="message" className="mb-2.5 text-sm font-medium">Message</Label>
                  <Textarea id="message" {...register('message')} placeholder="Your message" className="min-h-[100px]" />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                  )}
                </div>
                <div className="flex w-full flex-col justify-end space-y-3 pt-2">
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : 'Send Message'}
                  </Button>
                  <div className="text-xs text-muted-foreground">
                    By submitting this form, you agree to our{' '}
                    <Link href="/privacypolicy" className="underline">privacy policy</Link>.
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Toaster />
    </section>
  )
}