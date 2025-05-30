import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Mail, Github, Languages, Sun } from "lucide-react";
import portfolio from '@/data/portfolio.json';

export default function ProfileHeader() {
  return (
    <div className="bg-gray-950 text-white mt-10">
      <div className="w-full">
        {/* Profile section */}
        <div className="space-y-6">
          {/* Profile photo and basic info */}
          <div className="flex flex-col items-start space-y-4">
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-900">
              <Image src={portfolio.photo}
                alt="profilepic" 
                width={96} 
                height={96} 
                className="w-full h-full object-cover" />
            </div>
            <div className="w-full flex justify-between items-center">
              {/* Lado esquerdo: nome e função */}
              <div>
                <h1 className="text-2xl font-bold text-white">Camila Peroto</h1>
                <p className="text-gray-400">{portfolio.job}</p>
              </div>

              {/* Lado direito: ícones */}
              <div className="flex flex-col items-end gap-2">
                <Button variant="ghost" size="icon" className="text-gray-200 hover:text-white border border-gray-200 dark:border-gray-700">
                  <Languages className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-200 hover:text-white border border-gray-200 dark:border-gray-700">
                  <Sun className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Greeting and description */}
          <div className="border border-gray-700 rounded-lg p-6 bg-gray-950">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">👋🏻</span>
              <h2 className="text-lg font-semibold">Olá!</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">Meu nome é Camila Peroto, sou Desenvolvedora Fullstack apaixonada por tecnologia. Atualmente trabalho com ReactJS e TypeScript no frontend, e tecnologias como Node.js e Laravel no backend.</p>
          </div>

          {/* Action buttons */}
          <div className="grid grid-cols-3 gap-3">
            <a href="https://www.linkedin.com/in/camila-bueno-peroto/" target="_blank">
              <Button variant="secondary" className="bg-white text-black hover:bg-gray-100 font-medium w-full">
                <span className="mr-2">in</span>
                LinkedIn
              </Button>
            </a>
            <a href={`mailto:${portfolio.email}`}>
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 w-full">
                <Mail className="w-4 h-4 mr-2" />
                E-mail
              </Button>
            </a>
            <a href="https://github.com/CamiPeroto" target="_blank">
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 w-full">
                <Github className="w-4 h-4 mr-2" />
                Github
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
