"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, CheckCircle2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { fr } from "date-fns/locale"
import { FadeIn } from "@/components/fade-in"

const formSchema = z.object({
  nom: z.string().min(2, {
    message: "Le nom doit contenir au moins 2 caractères.",
  }),
  prenom: z.string().min(2, {
    message: "Le prénom doit contenir au moins 2 caractères.",
  }),
  email: z.string().email({
    message: "Veuillez entrer une adresse email valide.",
  }),
  telephone: z.string().min(10, {
    message: "Veuillez entrer un numéro de téléphone valide.",
  }),
  date: z.date({
    required_error: "Veuillez sélectionner une date.",
  }),
  service: z.string({
    required_error: "Veuillez sélectionner un service.",
  }),
  medecin: z.string({
    required_error: "Veuillez sélectionner un médecin.",
  }),
  message: z.string().optional(),
})

export default function RendezVous() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nom: "",
      prenom: "",
      email: "",
      telephone: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    toast({
      title: "Demande de rendez-vous envoyée",
      description: "Nous vous contacterons prochainement pour confirmer votre rendez-vous.",
    })
    setIsSubmitted(true)
  }

  const services = [
    { value: "cardiologie", label: "Cardiologie" },
    { value: "chirurgie", label: "Chirurgie" },
    { value: "pediatrie", label: "Pédiatrie" },
    { value: "neurologie", label: "Neurologie" },
    { value: "gynecologie", label: "Gynécologie" },
    { value: "orthopédie", label: "Orthopédie" },
    { value: "dermatologie", label: "Dermatologie" },
    { value: "oncologie", label: "Oncologie" },
  ]

  const medecins = {
    cardiologie: [{ value: "dr-martin", label: "Dr. Sophie Martin" }],
    chirurgie: [{ value: "dr-dubois", label: "Dr. Thomas Dubois" }],
    pediatrie: [{ value: "dr-leroy", label: "Dr. Marie Leroy" }],
    neurologie: [{ value: "dr-moreau", label: "Dr. Jean Moreau" }],
    gynecologie: [{ value: "dr-petit", label: "Dr. Claire Petit" }],
    orthopédie: [{ value: "dr-bernard", label: "Dr. Philippe Bernard" }],
    dermatologie: [{ value: "dr-roux", label: "Dr. Isabelle Roux" }],
    oncologie: [{ value: "dr-lambert", label: "Dr. Michel Lambert" }],
  }

  const selectedService = form.watch("service")

  return (
    <main className="flex flex-col min-h-screen">
      <section className="py-12 md:py-16 lg:py-20 bg-blue-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Prendre rendez-vous</h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Remplissez le formulaire ci-dessous pour demander un rendez-vous avec l'un de nos spécialistes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FadeIn>
        <section className="py-12 md:py-16 lg:py-20 bg-white">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-2xl">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center space-y-4 text-center p-6 border rounded-lg bg-green-50">
                  <CheckCircle2 className="h-16 w-16 text-green-600" />
                  <h2 className="text-2xl font-bold">Demande envoyée avec succès!</h2>
                  <p className="text-muted-foreground">
                    Merci pour votre demande de rendez-vous. Notre équipe vous contactera dans les plus brefs délais
                    pour confirmer votre rendez-vous.
                  </p>
                  <Button onClick={() => setIsSubmitted(false)} className="mt-4">
                    Faire une nouvelle demande
                  </Button>
                </div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="nom"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nom</FormLabel>
                            <FormControl>
                              <Input placeholder="Votre nom" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="prenom"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Prénom</FormLabel>
                            <FormControl>
                              <Input placeholder="Votre prénom" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                        name="telephone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Téléphone</FormLabel>
                            <FormControl>
                              <Input placeholder="Votre numéro de téléphone" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="service"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Service médical</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Sélectionnez un service" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {services.map((service) => (
                                  <SelectItem key={service.value} value={service.value}>
                                    {service.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="medecin"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Médecin</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              disabled={!selectedService}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Sélectionnez un médecin" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {selectedService &&
                                  medecins[selectedService as keyof typeof medecins]?.map((medecin) => (
                                    <SelectItem key={medecin.value} value={medecin.value}>
                                      {medecin.label}
                                    </SelectItem>
                                  ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="date"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel>Date souhaitée</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant={"outline"}
                                  className={cn(
                                    "w-full pl-3 text-left font-normal",
                                    !field.value && "text-muted-foreground",
                                  )}
                                >
                                  {field.value ? (
                                    format(field.value, "PPP", { locale: fr })
                                  ) : (
                                    <span>Choisissez une date</span>
                                  )}
                                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) => date < new Date() || date.getDay() === 0 || date.getDay() === 6}
                                initialFocus
                                locale={fr}
                              />
                            </PopoverContent>
                          </Popover>
                          <FormDescription>Les rendez-vous sont disponibles du lundi au vendredi.</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message (optionnel)</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Informations complémentaires concernant votre rendez-vous"
                              className="resize-none"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                      Demander un rendez-vous
                    </Button>
                  </form>
                </Form>
              )}
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">Informations importantes</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold">Confirmation</h3>
                    <p className="text-muted-foreground">
                      Après avoir soumis votre demande, notre équipe vous contactera dans les 24 heures ouvrables pour
                      confirmer votre rendez-vous.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Documents nécessaires</h3>
                    <p className="text-muted-foreground">
                      Veuillez apporter votre carte d'identité, votre carte vitale et tout document médical pertinent
                      (ordonnances, résultats d'examens, etc.).
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Annulation</h3>
                    <p className="text-muted-foreground">
                      Si vous devez annuler ou reporter votre rendez-vous, merci de nous prévenir au moins 24 heures à
                      l'avance au 01 23 45 67 89.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">Horaires de consultation</h2>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Lundi - Vendredi</span>
                    <span>8h00 - 19h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Samedi</span>
                    <span>9h00 - 12h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Dimanche</span>
                    <span>Fermé (sauf urgences)</span>
                  </div>
                </div>
                <div className="pt-4">
                  <h3 className="text-xl font-bold">Urgences</h3>
                  <p className="text-muted-foreground">
                    Notre service d'urgence est ouvert 24h/24 et 7j/7. En cas d'urgence médicale, composez le 01 23 45
                    67 00 ou rendez-vous directement à notre service d'urgence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>
      <Toaster />
    </main>
  )
}
