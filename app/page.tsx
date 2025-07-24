import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Clock, Phone, MapPin, Calendar, ArrowRight } from "lucide-react"
import { HeroSection } from "@/components/hero-section"
import { ServiceCard } from "@/components/service-card"
import { FadeIn } from "@/components/fade-in"

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection
        title="Centre Hospitalier Sainte Thérèse"
        subtitle="Des soins de qualité pour tous, à chaque instant"
        buttonText="Prendre rendez-vous"
        buttonLink="/rendez-vous"
      />

      <FadeIn>
        <section className="py-12 md:py-16 lg:py-20 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Bienvenue à Sainte Thérèse
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Notre hôpital s'engage à fournir des soins médicaux d'excellence dans un environnement accueillant et
                  bienveillant. Notre équipe de professionnels dévoués est là pour vous accompagner à chaque étape de
                  votre parcours de santé.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Link href="/a-propos">
                  <Button variant="outline" className="border-green-500 text-green-600 hover:bg-green-50">
                    Découvrir notre histoire
                  </Button>
                </Link>
                <Link href="/services">
                  <Button className="bg-blue-600 hover:bg-blue-700">Nos services médicaux</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nos services principaux</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Nous offrons une gamme complète de services médicaux pour répondre à tous vos besoins de santé.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <ServiceCard
                icon={<Heart className="h-10 w-10 text-red-500" />}
                title="Urgences 24/7"
                description="Service d'urgence disponible 24h/24 et 7j/7 pour tous types de situations médicales urgentes."
                color="red"
              />
              <ServiceCard
                icon={<Clock className="h-10 w-10 text-green-500" />}
                title="Consultations"
                description="Consultations avec nos spécialistes dans plus de 20 domaines médicaux différents."
                color="green"
              />
              <ServiceCard
                icon={
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    width={40}
                    height={40}
                    alt="Imagerie"
                    className="h-10 w-10"
                  />
                }
                title="Imagerie médicale"
                description="Équipements de pointe pour tous types d'examens: IRM, scanner, radiographie, échographie."
                color="blue"
              />
            </div>
            <div className="flex justify-center mt-10">
              <Link href="/services">
                <Button variant="outline" className="group">
                  Voir tous nos services
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="py-12 md:py-16 lg:py-20 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Pourquoi choisir Sainte Thérèse?
                </h2>
                <p className="text-muted-foreground md:text-xl">
                  Notre hôpital combine expertise médicale, technologies de pointe et approche humaine pour offrir des
                  soins d'excellence.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="rounded-full bg-green-100 p-1 mr-2">
                      <svg
                        className="h-4 w-4 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span>Équipe médicale hautement qualifiée</span>
                  </li>
                  <li className="flex items-center">
                    <div className="rounded-full bg-green-100 p-1 mr-2">
                      <svg
                        className="h-4 w-4 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span>Équipements médicaux de dernière génération</span>
                  </li>
                  <li className="flex items-center">
                    <div className="rounded-full bg-green-100 p-1 mr-2">
                      <svg
                        className="h-4 w-4 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span>Approche centrée sur le patient</span>
                  </li>
                  <li className="flex items-center">
                    <div className="rounded-full bg-green-100 p-1 mr-2">
                      <svg
                        className="h-4 w-4 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span>Environnement accueillant et confortable</span>
                  </li>
                </ul>
                <div className="pt-4">
                  <Link href="/a-propos">
                    <Button variant="outline" className="border-blue-500 text-blue-600 hover:bg-blue-50">
                      En savoir plus
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative h-[400px] overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Équipe médicale"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="py-12 md:py-16 lg:py-20 bg-blue-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Informations pratiques</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Tout ce dont vous avez besoin pour nous contacter ou vous rendre à l'hôpital.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <Phone className="h-10 w-10 text-blue-600" />
                  <h3 className="text-xl font-bold">Nous contacter</h3>
                  <p className="text-muted-foreground">
                    Téléphone: 01 23 45 67 89
                    <br />
                    Email: contact@Sainte Thérèse.fr
                  </p>
                  <Link href="/contact">
                    <Button variant="link" className="text-blue-600">
                      Plus d'informations
                    </Button>
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <MapPin className="h-10 w-10 text-green-600" />
                  <h3 className="text-xl font-bold">Nous trouver</h3>
                  <p className="text-muted-foreground">
                    123 Avenue de la Santé
                    <br />
                    75001 Paris, France
                  </p>
                  <Link href="/contact">
                    <Button variant="link" className="text-green-600">
                      Voir sur la carte
                    </Button>
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <Calendar className="h-10 w-10 text-red-600" />
                  <h3 className="text-xl font-bold">Rendez-vous</h3>
                  <p className="text-muted-foreground">
                    Prenez rendez-vous en ligne
                    <br />
                    avec nos spécialistes
                  </p>
                  <Link href="/rendez-vous">
                    <Button variant="link" className="text-red-600">
                      Prendre rendez-vous
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </FadeIn>
    </main>
  )
}
