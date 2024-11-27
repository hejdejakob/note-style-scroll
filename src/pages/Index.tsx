import { ChevronLeft } from "lucide-react";
import { useState, useEffect } from "react";
import { Textarea } from "@/components/ui/textarea";

const Index = () => {
  const [content, setContent] = useState(`Ravn Jakob Ohlsson

Kom ihåg-lista för att berätta om allt bra med dig:
• Nyfiken, driven och alltid peppad på att testa nya saker.
• Startat och driver reformsociety.se med ett gäng stjärnor.
• Jobbat med valkampanjer i ett dussintal länder i Europa.
• Duktig på att skapa gräsrotsengagemang för komplexa frågor.
• Är med i TV ibland, t ex Politikbyrån senast här.
• Visar omsorg för vår demokrati genom att delta i debatten.

Glöm inte att säga att du finns på +46709402881 och jakob.ohlsson@reformsociety.se`);

  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    setCharCount(content.length);
  }, [content]);

  return (
    <div className="min-h-screen bg-apple-bg">
      <header className="border-b border-gray-200">
        <div className="flex flex-col">
          <div className="flex items-center justify-between px-4 py-2">
            <div className="flex items-center text-apple-link">
              <ChevronLeft className="w-5 h-5" />
              <span className="underline">All iCloud</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-apple-link">
                Done
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between px-4 py-2">
            <div className="text-apple-gray text-sm">
              Today at {new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}
            </div>
            <div className="text-apple-gray text-sm">
              {charCount} Characters
            </div>
          </div>
        </div>
      </header>
      
      <main className="px-4 py-6">
        <Textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full min-h-[calc(100vh-8rem)] bg-transparent border-none resize-none focus:outline-none text-[17px] p-0"
          style={{ fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif' }}
        />
      </main>
    </div>
  );
};

export default Index;