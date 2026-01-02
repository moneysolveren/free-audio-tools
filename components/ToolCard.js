import Link from "next/link";

export default function ToolCard({ tool }) {
  const isActive = tool.status === "active";
  const isComingSoon = tool.status === "coming-soon";

  return (
    <Link 
      href={`/tools/${tool.slug}`}
      className={`card bg-base-100 shadow-xl transition-all duration-300 ${isActive ? 'hover:scale-105 hover:shadow-2xl cursor-pointer' : ''} ${isComingSoon ? 'opacity-60' : ''}`}
    >
      <div className="card-body">
        <div className="text-5xl mb-2">
          {tool.icon}
        </div>

        <h3 className="card-title">
          {tool.name}
        </h3>

        <p className="opacity-70 text-sm mb-4">
          {tool.description}
        </p>

        <div className="card-actions justify-between items-center">
          {isActive && (
            <div className="badge badge-success gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              立即使用
            </div>
          )}
          {isComingSoon && (
            <div className="badge badge-warning">即將推出</div>
          )}
          
          {isActive && (
            <svg className="w-5 h-5 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          )}
        </div>

        {tool.tags && tool.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {tool.tags.slice(0, 3).map((tag, index) => (
              <span key={index} className="badge badge-ghost badge-sm">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}