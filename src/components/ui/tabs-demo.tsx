import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

const projetosMock = [
  { nome: "Sistema de Vendas", tecnologias: "React, Node.js" },
  { nome: "Dashboard Financeiro", tecnologias: "Next.js, Tailwind" },
  { nome: "API de Produtos", tecnologias: "Express, MongoDB" },
  { nome: "App de Tarefas", tecnologias: "React Native" },
  { nome: "Site Portfólio", tecnologias: "Vite, TypeScript" },
  { nome: "Gestor de Clientes", tecnologias: "Laravel, Vue" },
  { nome: "Plataforma EAD", tecnologias: "NestJS, PostgreSQL" },
  { nome: "CRM Interno", tecnologias: "Django, React" },
];

export function TabsDemo() {
  return (
    <Tabs defaultValue="all" className="w-full mt-5">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="all">Todos</TabsTrigger>
        <TabsTrigger value="professional">Projetos Profissionais</TabsTrigger>
        <TabsTrigger value="personal">Projetos Pessoais</TabsTrigger>
      </TabsList>
      <TabsContent value="all">
        <Card className="bg-white dark:bg-gray-950 text-black dark:text-white">
          <CardHeader>
            <CardTitle>Todos os Projetos</CardTitle>
            <CardDescription>Veja alguns projetos nos quais trabalhei.</CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-64 rounded-md border border-gray-200 dark:border-gray-700 p-4">
              {projetosMock.map((projeto, index) => (
                <div key={index} className="mb-4">
                  <Label htmlFor={`nome-${index}`}>Nome do Projeto</Label>
                  <Label htmlFor={`tech-${index}`} className="mt-16 mb-4">
                    Tecnologias
                  </Label>
                 <div className="flex gap-3"> 
                  <Image 
                    src="/images/icons/react.png" 
                    alt="icon-react" 
                    width={32} 
                    height={32} 
                    className="w-9 h-9 object-contain"
                   />
                   <Image 
                    src="/images/icons/github.png" 
                    alt="icon-github" 
                    width={32} 
                    height={32} 
                    className="w-9 h-9 object-contain"
                   />
                   </div>
                  {index < projetosMock.length - 1 && <Separator className="my-4" />}
                </div>
              ))}
            </ScrollArea>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="professional">
        <Card className="bg-white dark:bg-gray-950 text-black dark:text-white">
          <CardHeader>
            <CardTitle>Projetos Profissionais</CardTitle>
            <CardDescription>Veja alguns projetos profissionais nos quais trabalhei.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <ScrollArea className="h-64 rounded-md border border-gray-200 dark:border-gray-700 p-4">
              {projetosMock.map((projeto, index) => (
                <div key={index} className="mb-4">
                  <Label htmlFor={`nome-${index}`}>Nome do Projeto</Label>
                  <Label htmlFor={`tech-${index}`} className="mt-16 mb-4">
                    Tecnologias
                  </Label>
                 <div className="flex gap-3"> 
                  <Image 
                    src="/images/icons/react.png" 
                    alt="icon-react" 
                    width={32} 
                    height={32} 
                    className="w-9 h-9 object-contain"
                   />
                   <Image 
                    src="/images/icons/github.png" 
                    alt="icon-github" 
                    width={32} 
                    height={32} 
                    className="w-9 h-9 object-contain"
                   />
                   </div>
                  {index < projetosMock.length - 1 && <Separator className="my-4" />}
                </div>
              ))}
            </ScrollArea>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="personal">
        <Card className="bg-white dark:bg-gray-950 text-black dark:text-white">
          <CardHeader>
            <CardTitle>Projetos Pessoais</CardTitle>
            <CardDescription>Alguns dos meu projetos pessoais ou de estudo.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <ScrollArea className="h-64 rounded-md border border-gray-200 dark:border-gray-700 p-4">
              {projetosMock.map((projeto, index) => (
                <div key={index} className="mb-4">
                  <Label htmlFor={`nome-${index}`}>Nome do Projeto</Label>
                  <Label htmlFor={`tech-${index}`} className="mt-16 mb-4">
                    Tecnologias
                  </Label>
                 <div className="flex gap-3"> 
                  <Image 
                    src="/images/icons/react.png" 
                    alt="icon-react" 
                    width={32} 
                    height={32} 
                    className="w-9 h-9 object-contain"
                   />
                   <Image 
                    src="/images/icons/github.png" 
                    alt="icon-github" 
                    width={32} 
                    height={32} 
                    className="w-9 h-9 object-contain"
                   />
                   </div>
                  {index < projetosMock.length - 1 && <Separator className="my-4" />}
                </div>
              ))}
            </ScrollArea>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
