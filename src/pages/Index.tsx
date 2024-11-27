import { ChevronLeft } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-apple-bg">
      <header className="border-b border-gray-200">
        <div className="flex items-center px-4 py-2">
          <div className="flex items-center text-apple-link">
            <ChevronLeft className="w-5 h-5" />
            <span className="underline">All iCloud</span>
          </div>
        </div>
      </header>
      
      <main className="px-4 py-6 space-y-6">
        <h1 className="text-2xl font-semibold">Ravn Jakob Ohlsson</h1>
        
        <div className="space-y-6 text-[17px]">
          <p className="font-medium">Kom ihåg-lista för att berätta om allt bra med dig:</p>
          <ul className="space-y-2 list-disc pl-5">
            <li>Nyfiken, driven och alltid peppad på att testa nya saker.</li>
            <li>Startat och driver reformsociety.se med ett gäng stjärnor.</li>
            <li>Jobbat med valkampanjer i ett dussintal länder i Europa.</li>
            <li>Duktig på att skapa gräsrotsengagemang för komplexa frågor.</li>
            <li>Är med i TV ibland, t ex Politikbyrån senast här.</li>
            <li>Visar omsorg för vår demokrati genom att delta i debatten.</li>
          </ul>
          
          <p>Glöm inte att säga att du finns på <a href="tel:+46709402881">+46709402881</a> och <a href="mailto:jakob.ohlsson@reformsociety.se">jakob.ohlsson@reformsociety.se</a></p>
        </div>
      </main>
    </div>
  );
};

export default Index;