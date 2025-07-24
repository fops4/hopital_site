import Link from "next/link"
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M8 3v3a2 2 0 0 1-2 2H3" />
                  <path d="M21 8h-3a2 2 0 0 1-2-2V3" />
                  <path d="M3 16h3a2 2 0 0 1 2 2v3" />
                  <path d="M16 21v-3a2 2 0 0 1 2-2h3" />
                </svg>
              </div>
              <span className="font-bold text-lg">Sainte Thérèse</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Centre Hospitalier Sainte Thérèse
              <br />
              Des soins de qualité pour tous, à chaque instant
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-blue-600">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-blue-600">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-blue-600">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-medium text-lg mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-blue-600">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="text-sm text-muted-foreground hover:text-blue-600">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-muted-foreground hover:text-blue-600">
                  Nos services
                </Link>
              </li>
              <li>
                <Link href="/equipe" className="text-sm text-muted-foreground hover:text-blue-600">
                  Équipe médicale
                </Link>
              </li>
              <li>
                <Link href="/rendez-vous" className="text-sm text-muted-foreground hover:text-blue-600">
                  Prendre rendez-vous
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-blue-600">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-lg mb-4">Nos services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services#urgences" className="text-sm text-muted-foreground hover:text-blue-600">
                  Urgences
                </Link>
              </li>
              <li>
                <Link href="/services#chirurgie" className="text-sm text-muted-foreground hover:text-blue-600">
                  Chirurgie
                </Link>
              </li>
              <li>
                <Link href="/services#pediatrie" className="text-sm text-muted-foreground hover:text-blue-600">
                  Pédiatrie
                </Link>
              </li>
              <li>
                <Link href="/services#cardiologie" className="text-sm text-muted-foreground hover:text-blue-600">
                  Cardiologie
                </Link>
              </li>
              <li>
                <Link href="/services#imagerie" className="text-sm text-muted-foreground hover:text-blue-600">
                  Imagerie médicale
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-muted-foreground hover:text-blue-600">
                  Voir tous les services
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  123 Avenue de la Santé
                  <br />
                  75001 Paris, France
                </span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  Accueil: 01 23 45 67 89
                  <br />
                  Urgences: 01 23 45 67 00
                </span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                <span className="text-sm text-muted-foreground">contact@Sainte-Thérèse.fr</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Centre Hospitalier Sainte Thérèse. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}
