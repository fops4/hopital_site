"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"
import { CheckCircle2, Mail, MapPin, Phone } from "lucide-react"
import { FadeIn } from "@/components/fade-in"

const formSchema = z.object({
  nom: z.string().min(2, {
    message: "Le nom doit contenir au moins 2 caractères.",
  }),
  email: z.string().email({
    message: "Veuillez entrer une adresse email valide.",
  }),
  sujet: z.string().min(5, {
    message: "Le sujet doit contenir au moins 5 caractères.",
  }),
  message: z.string().min(10, {
    message: "Le message doit contenir au moins 10 caractères.",
  }),
})

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nom: "",
      email: "",
      sujet: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    toast({
      title: "Message envoyé",
      description: "Nous vous répondrons dans les plus brefs délais.",
    })
    setIsSubmitted(true)
  }

  return (
    <main className="flex flex-col min-h-screen">
      <section className="py-12 md:py-16 lg:py-20 bg-blue-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contactez-nous</h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Nous sommes à votre disposition pour répondre à toutes vos questions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FadeIn>
        <section className="py-12 md:py-16 lg:py-20 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold tracking-tighter mb-4">Nos coordonnées</h2>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Adresse</h3>
                        <p className="text-muted-foreground">
                          Centre Hospitalier Sainte Thérèse
                          <br />
                          123 Avenue de la Santé
                          <br />
                          75001 Paris, France
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Phone className="h-5 w-5 text-red-600 mr-3 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Téléphone</h3>
                        <p className="text-muted-foreground">
                          Accueil: 01 23 45 67 89
                          <br />
                          Urgences: 01 23 45 67 00
                          <br />
                          Rendez-vous: 01 23 45 67 78
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Mail className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Email</h3>
                        <p className="text-muted-foreground">
                          Informations générales: contact@Sainte Thérèse.fr
                          <br />
                          Rendez-vous: rdv@Sainte Thérèse.fr
                          <br />
                          Recrutement: recrutement@Sainte Thérèse.fr
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-bold tracking-tighter mb-4">Horaires d'ouverture</h2>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">Accueil</span>
                      <span className="text-muted-foreground">
                        Lun - Ven: 7h00 - 20h00
                        <br />
                        Sam - Dim: 8h00 - 18h00
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Consultations</span>
                      <span className="text-muted-foreground">
                        Lun - Ven: 8h00 - 19h00
                        <br />
                        Sam: 9h00 - 12h00
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Urgences</span>
                      <span className="text-muted-foreground">24h/24, 7j/7</span>
                    </div>
                  </div>
                </div>  
              </div>

              <div>
                <h2 className="text-3xl font-bold tracking-tighter mb-6">Envoyez-nous un message</h2>
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center space-y-4 text-center p-6 border rounded-lg bg-green-50">
                    <CheckCircle2 className="h-16 w-16 text-green-600" />
                    <h2 className="text-2xl font-bold">Message envoyé avec succès!</h2>
                    <p className="text-muted-foreground">
                      Merci pour votre message. Notre équipe vous répondra dans les plus brefs délais.
                    </p>
                    <Button onClick={() => setIsSubmitted(false)} className="mt-4">
                      Envoyer un nouveau message
                    </Button>
                  </div>
                ) : (
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="nom"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nom complet</FormLabel>
                            <FormControl>
                              <Input placeholder="Votre nom complet" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="votre.email@exemple.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="sujet"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Sujet</FormLabel>
                            <FormControl>
                              <Input placeholder="Sujet de votre message" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                              <Textarea placeholder="Votre message" className="resize-none min-h-[150px]" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                        Envoyer le message
                      </Button>
                    </form>
                  </Form>
                )}
              </div>
            </div>
          </div>
        </section>
      </FadeIn>
      <Toaster />
    </main>
  )
}
