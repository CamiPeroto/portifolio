import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import portfolio from "@/data/portfolio.json";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

type Projeto = {
  name: string;
  url_github?: string;
  description: string;
  techs: string[];
  online: boolean;
  github: boolean;
  link?: string;
  development?: boolean;
};
type Portfolio = {
  projects: {
    all: Projeto[];
    professional: Projeto[];
    personal: Projeto[];
  };
};

const typedPortfolio: Portfolio = portfolio as Portfolio;

export function TabsDemo() {
  return (
    <Tabs defaultValue="all" className="w-full mt-5">
      <TabsList className="grid w-full grid-cols-3 gap-1 mb-5 sm:mb-3">
        <TabsTrigger value="all">Todos</TabsTrigger>
        <TabsTrigger value="professional" className="whitespace-normal text-center text-sm sm:text-sm px-2 py-1">
          Projetos Profissionais
        </TabsTrigger>
        <TabsTrigger value="personal" className="whitespace-normal text-center text-xs sm:text-sm px-2 py-1">
          Projetos Pessoais
        </TabsTrigger>
      </TabsList>
      <TabsContent value="all">
        <Card className="bg-white dark:bg-gray-950 text-black dark:text-white">
          <CardHeader>
            <CardDescription>Veja alguns projetos nos quais trabalhei.</CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-64 rounded-md border border-gray-200 dark:border-gray-700 p-4">
              {typedPortfolio.projects.all.map((projeto, index) => (
                <div key={index} className="mb-4">
                  <div className="flex items-center gap-2">
                    <Label htmlFor={`nome-${index}`}>{projeto.name}</Label>

                    {/* Botão para acessar o projeto online, se existir link */}
                    {projeto.link && (
                      <a href={projeto.link} target="_blank" rel="noopener noreferrer" title="Ver projeto online">
                        <Button variant="ghost" size="icon" className="text-gray-200 hover:text-white dark:border-gray-200">
                          <ExternalLink className="h-5 w-5" />
                        </Button>
                      </a>
                    )}

                    {/* Badge de desenvolvimento */}
                    {projeto.development && (
                      <Badge variant="tertiary" className="ml-2">
                        Em desenvolvimento
                      </Badge>
                    )}
                  </div>

                  <p className="text-base">{projeto.description}</p>

                  <Label htmlFor={`tech-${index}`} className="mt-16 mb-4">
                    Tecnologias
                  </Label>

                  <div className="flex justify-between items-center flex-wrap gap-2">
                    <div className="flex flex-wrap gap-2">
                      {projeto.techs.map((tech, i) => (
                        <Badge key={i} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Ícone do GitHub, se existir URL */}
                    {projeto.github && projeto.url_github && (
                      <a href={projeto.url_github} target="_blank" rel="noopener noreferrer" title="Ver repositório">
                        <Image src="/images/icons/github.png" alt="Ícone do GitHub" width={24} height={24} className="w-6 h-6 object-contain hover:opacity-80 transition" />
                      </a>
                    )}
                  </div>

                  {index < typedPortfolio.projects.all.length - 1 && <Separator className="my-4" />}
                </div>
              ))}
            </ScrollArea>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="professional">
        <Card className="bg-white dark:bg-gray-950 text-black dark:text-white">
          <CardHeader>
            <CardDescription>Veja alguns projetos profissionais nos quais trabalhei.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <ScrollArea className="h-64 rounded-md border border-gray-200 dark:border-gray-700 p-4">
              {typedPortfolio.projects.professional.map((projeto, index) => (
                <div key={index} className="mb-4">
                  <div className="flex items-center gap-2">
                    <Label htmlFor={`nome-${index}`}>{projeto.name}</Label>

                    {/* Botão para acessar o projeto online, se existir link */}
                    {projeto.link && (
                      <a href={projeto.link} target="_blank" rel="noopener noreferrer" title="Ver projeto online">
                        <Button variant="ghost" size="icon" className="text-gray-200 hover:text-white dark:border-gray-200">
                          <ExternalLink className="h-5 w-5" />
                        </Button>
                      </a>
                    )}

                    {/* Badge de desenvolvimento */}
                    {projeto.development && (
                      <Badge variant="tertiary" className="ml-2">
                        Em desenvolvimento
                      </Badge>
                    )}
                  </div>

                  <p className="text-base">{projeto.description}</p>

                  <Label htmlFor={`tech-${index}`} className="mt-16 mb-4">
                    Tecnologias
                  </Label>

                  <div className="flex justify-between items-center flex-wrap gap-2">
                    <div className="flex flex-wrap gap-2">
                      {projeto.techs.map((tech, i) => (
                        <Badge key={i} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Ícone do GitHub, se existir URL */}
                    {projeto.github && projeto.url_github && (
                      <a href={projeto.url_github} target="_blank" rel="noopener noreferrer" title="Ver repositório">
                        <Image src="/images/icons/github.png" alt="Ícone do GitHub" width={24} height={24} className="w-6 h-6 object-contain hover:opacity-80 transition" />
                      </a>
                    )}
                  </div>

                  {index < typedPortfolio.projects.professional.length - 1 && <Separator className="my-4" />}
                </div>
              ))}
            </ScrollArea>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="personal">
        <Card className="bg-white dark:bg-gray-950 text-black dark:text-white">
          <CardHeader>
            <CardDescription>Alguns dos meu projetos pessoais ou de estudo.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <ScrollArea className="h-64 rounded-md border border-gray-200 dark:border-gray-700 p-4">
              {typedPortfolio.projects.personal.map((projeto, index) => (
                <div key={index} className="mb-4">
                  <div className="flex items-center gap-2">
                    <Label htmlFor={`nome-${index}`}>{projeto.name}</Label>

                    {/* Botão para acessar o projeto online, se existir link */}
                    {projeto.link && (
                      <a href={projeto.link} target="_blank" rel="noopener noreferrer" title="Ver projeto online">
                        <Button variant="ghost" size="icon" className="text-gray-200 hover:text-white dark:border-gray-200">
                          <ExternalLink className="h-5 w-5" />
                        </Button>
                      </a>
                    )}

                    {/* Badge de desenvolvimento */}
                    {projeto.development && (
                      <Badge variant="tertiary" className="ml-2">
                        Em desenvolvimento
                      </Badge>
                    )}
                  </div>

                  <p className="text-base mt-1">{projeto.description}</p>

                  <Label htmlFor={`tech-${index}`} className="mt-16 mb-4">
                    Tecnologias
                  </Label>

                  <div className="flex justify-between items-center flex-wrap gap-2">
                    <div className="flex flex-wrap gap-2">
                      {projeto.techs.map((tech, i) => (
                        <Badge key={i} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Ícone do GitHub, se existir URL */}
                    {projeto.github && projeto.url_github && (
                      <a href={projeto.url_github} target="_blank" rel="noopener noreferrer" title="Ver repositório">
                        <Image src="/images/icons/github.png" alt="Ícone do GitHub" width={24} height={24} className="w-6 h-6 object-contain hover:opacity-80 transition" />
                      </a>
                    )}
                  </div>

                  {index < typedPortfolio.projects.personal.length - 1 && <Separator className="my-4" />}
                </div>
              ))}
            </ScrollArea>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
