import Image from "next/image"
import { FadeIn } from "@/components/fade-in"

export default function APropos() {
  return (
    <main className="flex flex-col min-h-screen">
      <section className="py-12 md:py-16 lg:py-20 bg-blue-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">À propos de Saint-Michel</h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Découvrez notre histoire, nos valeurs et notre engagement envers la santé.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FadeIn>
        <section className="py-12 md:py-16 lg:py-20 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">Notre histoire</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Fondé en 1975, le Centre Hospitalier Saint-Michel a commencé comme une petite clinique de quartier
                    avec seulement 20 lits. Au fil des années, grâce à l'engagement de nos équipes et au soutien de la
                    communauté, nous avons grandi pour devenir l'un des établissements de santé les plus respectés de la
                    région.
                  </p>
                  <p>
                    En 1995, nous avons inauguré notre nouveau bâtiment principal, doublant notre capacité d'accueil. En
                    2010, nous avons ouvert notre centre de recherche médicale, permettant à nos médecins de participer
                    à des études cliniques innovantes.
                  </p>
                  <p>
                    Aujourd'hui, Saint-Michel est un hôpital moderne de 350 lits, offrant une gamme complète de services
                    médicaux et chirurgicaux, et employant plus de 1000 professionnels de santé dévoués.
                  </p>
                </div>
              </div>
              <div className="relative h-[400px] overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Histoire de l'hôpital"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tighter">Nos valeurs</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Les principes qui guident nos actions au quotidien.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center space-y-4">
                <div className="p-2 rounded-full bg-red-50">
                  <svg
                    className="h-8 w-8 text-red-600"
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
                </div>
                <h3 className="text-xl font-bold">Compassion</h3>
                <p className="text-muted-foreground">Nous traitons chaque patient avec empathie, dignité et respect.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center space-y-4">
                <div className="p-2 rounded-full bg-blue-50">
                  <svg
                    className="h-8 w-8 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Excellence</h3>
                <p className="text-muted-foreground">
                  Nous visons l'excellence dans tous les aspects de nos soins et services.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center space-y-4">
                <div className="p-2 rounded-full bg-green-50">
                  <svg
                    className="h-8 w-8 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Collaboration</h3>
                <p className="text-muted-foreground">
                  Nous travaillons ensemble pour offrir les meilleurs soins possibles.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center space-y-4">
                <div className="p-2 rounded-full bg-yellow-50">
                  <svg
                    className="h-8 w-8 text-yellow-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Innovation</h3>
                <p className="text-muted-foreground">
                  Nous adoptons les nouvelles technologies et méthodes pour améliorer nos soins.
                </p>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="py-12 md:py-16 lg:py-20 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tighter">Nos spécialités médicales</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Saint-Michel offre une large gamme de spécialités médicales pour répondre à tous vos besoins de santé.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Cardiologie",
                "Neurologie",
                "Orthopédie",
                "Pédiatrie",
                "Oncologie",
                "Gynécologie",
                "Urologie",
                "Dermatologie",
                "Ophtalmologie",
                "Gastro-entérologie",
                "Pneumologie",
                "Endocrinologie",
              ].map((specialite) => (
                <div key={specialite} className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <div className="mr-4 rounded-full bg-blue-100 p-2">
                    <svg
                      className="h-5 w-5 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="font-medium">{specialite}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="py-12 md:py-16 lg:py-20 bg-blue-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">Notre engagement envers la communauté</h2>
                <div className="space-y-4">
                  <p>
                    Au Centre Hospitalier Saint-Michel, nous croyons fermement à notre responsabilité envers la
                    communauté que nous servons. Notre engagement va au-delà des soins médicaux traditionnels.
                  </p>
                  <p>
                    Nous organisons régulièrement des campagnes de prévention, des séances d'information sur la santé et
                    des événements de dépistage gratuits. Notre équipe participe également à des programmes d'éducation
                    dans les écoles locales pour sensibiliser les jeunes à l'importance d'une vie saine.
                  </p>
                  <p>
                    Nous sommes fiers de notre programme de bourses qui soutient les étudiants locaux poursuivant des
                    carrières dans le domaine de la santé, contribuant ainsi à former la prochaine génération de
                    professionnels de santé.
                  </p>
                </div>
              </div>
              <div className="relative h-[400px] overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Engagement communautaire"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </FadeIn>
    </main>
  )
}
