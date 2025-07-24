import Image from "next/image"
import { FadeIn } from "@/components/fade-in"
import { Card, CardContent } from "@/components/ui/card"

export default function Equipe() {
  const medecins = [
    {
      nom: "Dr. Sophie Martin",
      specialite: "Cardiologie",
      description: "Spécialiste des maladies cardiovasculaires avec plus de 15 ans d'expérience.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      nom: "Dr. Thomas Dubois",
      specialite: "Chirurgie générale",
      description: "Chirurgien expérimenté, spécialisé dans les interventions mini-invasives.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      nom: "Dr. Marie Leroy",
      specialite: "Pédiatrie",
      description: "Pédiatre dévouée avec une approche chaleureuse envers les jeunes patients.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      nom: "Dr. Jean Moreau",
      specialite: "Neurologie",
      description: "Expert en troubles neurologiques et maladies neurodégénératives.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      nom: "Dr. Claire Petit",
      specialite: "Gynécologie",
      description: "Spécialiste en santé des femmes avec une approche holistique des soins.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      nom: "Dr. Philippe Bernard",
      specialite: "Orthopédie",
      description: "Spécialiste des troubles musculo-squelettiques et des chirurgies orthopédiques.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      nom: "Dr. Isabelle Roux",
      specialite: "Dermatologie",
      description: "Experte en affections cutanées et traitements dermatologiques avancés.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      nom: "Dr. Michel Lambert",
      specialite: "Oncologie",
      description: "Spécialiste du traitement du cancer avec une approche personnalisée.",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <main className="flex flex-col min-h-screen">
      <section className="py-12 md:py-16 lg:py-20 bg-blue-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Notre équipe médicale</h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Découvrez les médecins et spécialistes qui composent notre équipe médicale d'excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FadeIn>
        <section className="py-12 md:py-16 lg:py-20 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {medecins.map((medecin, index) => (
                <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                  <div className="relative h-64 w-full">
                    <Image src={medecin.image || "/placeholder.svg"} alt={medecin.nom} fill className="object-cover" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold">{medecin.nom}</h3>
                    <p className="text-blue-600 font-medium">{medecin.specialite}</p>
                    <p className="mt-2 text-muted-foreground">{medecin.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tighter">Notre approche d'équipe</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Chez Sainte Thérèse, nous croyons en une approche collaborative des soins de santé.
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Collaboration interdisciplinaire</h3>
                <p className="text-muted-foreground">
                  Nos médecins, infirmières, techniciens et autres professionnels de la santé travaillent en étroite
                  collaboration pour offrir des soins complets et coordonnés. Cette approche d'équipe garantit que
                  chaque aspect de votre santé est pris en compte dans votre plan de traitement.
                </p>
                <h3 className="text-2xl font-bold mt-6">Formation continue</h3>
                <p className="text-muted-foreground">
                  Tous les membres de notre équipe participent régulièrement à des formations et des conférences pour
                  rester à jour sur les dernières avancées médicales. Cet engagement envers l'apprentissage continu nous
                  permet d'offrir les traitements les plus innovants et efficaces.
                </p>
                <h3 className="text-2xl font-bold mt-6">Communication avec les patients</h3>
                <p className="text-muted-foreground">
                  Nous croyons que la communication ouverte avec nos patients est essentielle pour des soins de qualité.
                  Notre équipe prend le temps d'écouter vos préoccupations, de répondre à vos questions et de vous
                  impliquer dans les décisions concernant votre santé.
                </p>
              </div>
              <div className="relative h-[400px] overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Équipe médicale en consultation"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="py-12 md:py-16 lg:py-20 bg-blue-600 text-white">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter mb-6">Rejoignez notre équipe</h2>
            <p className="max-w-[700px] mx-auto mb-8">
              Nous sommes toujours à la recherche de professionnels de la santé talentueux et passionnés pour rejoindre
              notre équipe. Si vous êtes intéressé par une carrière au Centre Hospitalier Sainte Thérèse, consultez nos
              offres d'emploi actuelles.
            </p>
            <a
              href="/carrieres"
              className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-blue-600 shadow transition-colors hover:bg-gray-100"
            >
              Voir nos offres d'emploi
            </a>
          </div>
        </section>
      </FadeIn>
    </main>
  )
}
