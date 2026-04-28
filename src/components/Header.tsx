import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

interface HeaderProps {
  showBackToCalculators?: boolean;
}

export function Header({ showBackToCalculators = false }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm border-b flex items-center justify-between">
      <div className="container flex items-center mx-auto">
        <Link href="/" className="flex items-center flex-shrink-0 pl-4 lg:pl-8">
          <Image
            src="/logo.png?v=2"
            alt="SS Sarthi Financial Services"
            width={150}
            height={150}
            className="h-20 w-auto lg:h-24 object-contain"
            unoptimized
          />
        </Link>

        <div className="container mx-auto px-4 py-4 flex items-center justify-end">
          {showBackToCalculators ? (
            <Link href="/calculators">
              <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Calculators
              </Button>
            </Link>
          ) : (
            <div className="flex items-center space-x-8">
              <nav className="hidden md:flex space-x-8">
                <Link href="/" className="text-gray-700 hover:text-red-600 font-medium">Home</Link>
                <Link href="/calculators" className="text-gray-700 hover:text-red-600 font-medium">Calculators</Link>
                <Link href="/#services" className="text-gray-700 hover:text-red-600 font-medium">Services</Link>
                <Link href="/#tools" className="text-gray-700 hover:text-red-600 font-medium">Tools</Link>
                <Link href="/#contact" className="text-gray-700 hover:text-red-600 font-medium">Contact</Link>
              </nav>
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                Get Consultation
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
