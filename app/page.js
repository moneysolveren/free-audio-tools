import { getFeaturedTools } from "@/libs/toolsData";
import { siteConfig } from "@/libs/siteConfig";
import ToolCard from "@/components/ToolCard";

export default function Home() {
  const tools = getFeaturedTools();

  return (
    <div className="min-h-screen bg-base-100">
      <section className="bg-base-200 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {siteConfig.brand.logo} {siteConfig.name}
          </h1>
          <p className="text-xl md:text-2xl opacity-80 mb-4">
            {siteConfig.brand.tagline}
          </p>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">
            {siteConfig.description}
          </p>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            所有工具
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-base-200">
        <div className="max-w-4xl mx-auto card bg-base-100 shadow-xl p-8 md:p-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">
              需要更專業的服務?
            </h2>
            <p className="text-lg opacity-70 mb-8">
              免費工具適合快速處理,專業版提供更高準確度和更多功能
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a href={siteConfig.products.transcript.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                試用 Transcript AI
              </a>
              <a href={siteConfig.products.liveTranslate.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                試用 Live Translate
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}