import { createFileRoute } from "@tanstack/react-router";
import { Chip, PageBody, PageHeader } from "@/components/wb/page";
import { discoverItems } from "@/data/mock";

export const Route = createFileRoute("/discover")({
  head: () => ({
    meta: [
      { title: "发现 · WorkBuddy" },
      { name: "description", content: "看看别人怎么用 WorkBuddy：模板、自动化玩法与最佳实践。" },
      { property: "og:title", content: "发现 · WorkBuddy" },
      { property: "og:description", content: "看看别人怎么用 WorkBuddy：模板、自动化玩法与最佳实践。" },
    ],
  }),
  component: DiscoverPage,
});

function DiscoverPage() {
  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      <PageHeader title="发现" desc="精选玩法与模板，一键复用到你的项目" />
      <PageBody>
        <div className="grid gap-4 md:grid-cols-2">
          {discoverItems.map((d) => (
            <article key={d.id} className="wb-card p-5 transition-colors hover:bg-accent">
              <div className="flex items-center gap-2">
                <span className="text-xl">{d.emoji}</span>
                <Chip tone="info">{d.tag}</Chip>
              </div>
              <h2 className="mt-3 text-sm font-semibold">{d.title}</h2>
              <p className="mt-1.5 text-sm text-muted-foreground">{d.desc}</p>
              <button className="mt-4 rounded-lg border border-border bg-card px-3 py-1.5 text-xs transition-colors hover:bg-surface-strong">
                使用模板
              </button>
            </article>
          ))}
        </div>
      </PageBody>
    </div>
  );
}
