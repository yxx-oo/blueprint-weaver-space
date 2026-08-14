import { createFileRoute } from "@tanstack/react-router";
import { FileText, Upload } from "lucide-react";
import { PageBody, PageHeader } from "@/components/wb/page";
import { libraryFiles } from "@/data/mock";

export const Route = createFileRoute("/library")({
  head: () => ({
    meta: [
      { title: "资料库 · WorkBuddy" },
      { name: "description", content: "集中管理文件与知识，作为任务执行时的上下文来源。" },
      { property: "og:title", content: "资料库 · WorkBuddy" },
      { property: "og:description", content: "集中管理文件与知识，作为任务执行时的上下文来源。" },
    ],
  }),
  component: LibraryPage,
});

function LibraryPage() {
  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      <PageHeader
        title="资料库"
        desc="这里的文件会作为任务上下文被引用"
        action={
          <button className="flex items-center gap-1.5 rounded-lg bg-primary px-3 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90">
            <Upload className="size-4" /> 上传文件
          </button>
        }
      />
      <PageBody>
        <div className="wb-card overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-surface text-left text-xs text-muted-foreground">
                <th className="px-4 py-3 font-medium">名称</th>
                <th className="px-4 py-3 font-medium">来源</th>
                <th className="px-4 py-3 font-medium">大小</th>
                <th className="px-4 py-3 font-medium">更新时间</th>
              </tr>
            </thead>
            <tbody>
              {libraryFiles.map((f) => (
                <tr key={f.id} className="border-b border-border last:border-0 hover:bg-accent">
                  <td className="px-4 py-3">
                    <span className="flex items-center gap-2">
                      <FileText className="size-4 text-muted-foreground" />
                      {f.name}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">{f.from}</td>
                  <td className="px-4 py-3 text-muted-foreground">{f.size}</td>
                  <td className="px-4 py-3 text-muted-foreground">{f.updatedAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </PageBody>
    </div>
  );
}
