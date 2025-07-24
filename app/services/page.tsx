import Image from "next/image"
import { FadeIn } from "@/components/fade-in"
import { Card, CardContent } from "@/components/ui/card"

export default function Services() {
  const services = [
    {
      id: "urgences",
      title: "Urgences 24/7",
      description:
        "Notre service d'urgence est ouvert 24h/24 et 7j/7 pour traiter toutes les situations médicales urgentes. Notre équipe expérimentée est prête à intervenir rapidement et efficacement.",
      icon: (
        <svg
          className="h-12 w-12 text-red-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
      ),
      color: "red",
    },
    {
      id: "chirurgie",
      title: "Chirurgie",
      description:
        "Notre département de chirurgie offre une large gamme d'interventions chirurgicales, des procédures mineures aux opérations complexes, réalisées par des chirurgiens hautement qualifiés.",
      icon: (
        <svg
          className="h-12 w-12 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
          ></path>
        </svg>
      ),
      color: "blue",
    },
    {
      id: "pediatrie",
      title: "Pédiatrie",
      description:
        "Notre service de pédiatrie est spécialement conçu pour répondre aux besoins médicaux des enfants dans un environnement accueillant et rassurant, avec des médecins spécialisés en soins pédiatriques.",
      icon: (
        <svg
          className="h-12 w-12 text-green-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          ></path>
        </svg>
      ),
      color: "green",
    },
    {
      id: "cardiologie",
      title: "Cardiologie",
      description:
        "Notre service de cardiologie offre des soins complets pour les maladies cardiovasculaires, avec des équipements de diagnostic avancés et des traitements innovants.",
      icon: (
        <svg
          className="h-12 w-12 text-red-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          ></path>
        </svg>
      ),
      color: "red",
    },
    {
      id: "imagerie",
      title: "Imagerie médicale",
      description:
        "Notre département d'imagerie médicale est équipé des technologies les plus récentes pour fournir des diagnostics précis, incluant IRM, scanner, radiographie et échographie.",
      icon: (
        <svg
          className="h-12 w-12 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
          ></path>
        </svg>
      ),
      color: "blue",
    },
    {
      id: "maternite",
      title: "Maternité",
      description:
        "Notre service de maternité offre un environnement chaleureux et sécurisé pour les futures mamans, avec une équipe d'obstétriciens, de sages-femmes et d'infirmières spécialisées.",
      icon: (
        <svg
          className="h-12 w-12 text-green-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          ></path>
        </svg>
      ),
      color: "green",
    },
  ]

  return (
    <main className="flex flex-col min-h-screen">
      <section className="py-12 md:py-16 lg:py-20 bg-blue-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nos services médicaux</h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Découvrez la gamme complète de services médicaux que nous proposons à nos patients.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FadeIn>
        <section className="py-12 md:py-16 lg:py-20 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  id={service.id}
                  className={`scroll-mt-20 grid gap-6 lg:grid-cols-2 lg:gap-12 items-center ${index % 2 !== 0 ? "lg:grid-flow-dense" : ""}`}
                >
                  <div className="space-y-4">
                    <div className={`inline-flex p-3 rounded-lg bg-${service.color}-50`}>{service.icon}</div>
                    <h2 className="text-3xl font-bold tracking-tighter">{service.title}</h2>
                    <p className="text-muted-foreground">{service.description}</p>
                    <ul className="space-y-2 pt-4">
                      <li className="flex items-center">
                        <div className="rounded-full bg-green-100 p-1 mr-2">
                          <svg
                            className="h-4 w-4 text-green-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                        </div>
                        <span>Équipe médicale spécialisée</span>
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
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                        </div>
                        <span>Équipements de pointe</span>
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
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                        </div>
                        <span>Soins personnalisés</span>
                      </li>
                    </ul>
                  </div>
                  <div className="relative h-[300px] overflow-hidden rounded-lg">
                    <Image
                      src="/placeholder.svg?height=300&width=500"
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tighter">Autres services</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                En plus de nos services médicaux principaux, nous proposons également:
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Laboratoire d'analyses",
                  description:
                    "Analyses sanguines et autres tests de laboratoire avec des résultats rapides et précis.",
                },
                {
                  title: "Pharmacie",
                  description: "Pharmacie sur place pour faciliter l'accès aux médicaments prescrits.",
                },
                {
                  title: "Rééducation",
                  description:
                    "Services de physiothérapie et de rééducation pour aider à la récupération après une blessure ou une chirurgie.",
                },
                {
                  title: "Soins à domicile",
                  description:
                    "Services de soins à domicile pour les patients qui nécessitent un suivi après leur sortie de l'hôpital.",
                },
                {
                  title: "Nutrition",
                  description: "Conseils nutritionnels personnalisés par des diététiciens qualifiés.",
                },
                {
                  title: "Santé mentale",
                  description: "Services de soutien psychologique et psychiatrique pour le bien-être mental.",
                },
              ].map((service, index) => (
                <Card key={index}>
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                    <h3 className="text-xl font-bold">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>
    </main>
  )
}
