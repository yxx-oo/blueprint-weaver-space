import { createFileRoute } from "@tanstack/react-router";
import { Chip, PageBody, PageHeader } from "@/components/wb/page";
import { connectors } from "@/data/mock";

export const Route = createFileRoute("/connectors")({
  head: () => ({
    meta: [
      { title: "连接器 · WorkBuddy" },
      { name: "description", content: "连接文档、网盘与协作工具，让任务能直接读写你的真实数据。" },
      { property: "og:title", content: "连接器 · WorkBuddy" },
      { property: "og:description", content: "连接文档、网盘与协作工具，让任务能直接读写你的真实数据。" },
    ],
  }),
  component: ConnectorsPage,
});

function ConnectorsPage() {
  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      <PageHeader title="连接器" desc="授权后，任务可读取并写回这些系统中的内容" />
      <PageBody>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {connectors.map((c) => (
            <div key={c.id} className="wb-card flex items-center gap-3 p-4">
              <span className="flex size-10 items-center justify-center rounded-xl bg-surface-strong text-xl">
                {c.emoji}
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <p className="truncate text-sm font-semibold">{c.name}</p>
                  {c.connected ? <Chip tone="success">已连接</Chip> : null}
                </div>
                <p className="truncate text-xs text-muted-foreground">{c.desc}</p>
              </div>
              <button
                className={`shrink-0 rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                  c.connected
                    ? "border border-border bg-card text-muted-foreground hover:bg-accent"
                    : "bg-primary text-primary-foreground hover:opacity-90"
                }`}
              >
                {c.connected ? "管理" : "连接"}
              </button>
            </div>
          ))}
        </div>
      </PageBody>
    </div>
  );
}
