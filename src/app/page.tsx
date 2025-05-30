import { Technologys } from "@/components/headers/tecnologys";
import ProfileHeader from "@/components/profile-header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabsDemo } from "@/components/ui/tabs-demo";

export default function Home() {
  return (
    <div className="flex items-center justify-center w-screen">
      <div className="w-full max-w-3xl">
        <ProfileHeader />
        <h3 className="text-3xl font-bold text-gray-100 mt-10">Projetos</h3>
        <TabsDemo />
        <Technologys />
      </div>
    </div>
  );
}
