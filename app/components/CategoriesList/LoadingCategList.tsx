
import { Skeleton } from "@/components/ui/skeleton"

    export function LoadingCategList() {
        return (
            <div className="flex w-full max-w-sm flex-col gap-2">
                {Array.from({ length: 10 }).map((_, index) => (
                    <div className="flex gap-4" key={index}>
                        <Skeleton className="h-6 w-full flex-1" />
                        
                    </div>
                ))}
            </div>
        )
    }


export default LoadingCategList