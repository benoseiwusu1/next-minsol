import { Skeleton } from "@/components/ui/skeleton";

export function NewsPlaceHolder() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[260px] w-[360px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[320px]" />
        <Skeleton className="h-4 w-[270px]" />
      </div>
    </div>
  );
}
