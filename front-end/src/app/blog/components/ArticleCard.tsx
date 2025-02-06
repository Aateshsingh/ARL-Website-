import Image from "next/image";
import { MoreVertical, ThumbsUp, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ArticleCardProps {
  title: string;
  imageUrl: string;
  onReadMore?: () => void;
}

export default function ArticleCard({
  title,
  imageUrl,
  onReadMore,
}: ArticleCardProps) {
  return (
    <div className="relative max-w-md w-full sm:max-w-full md:max-w-md overflow-hidden rounded-2xl bg-zinc-900 shadow-lg">
      <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] w-full">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt="Article cover"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 space-y-4 sm:space-y-6 text-white">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight">
            {title}
          </h2>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-4">
              <button className="flex items-center gap-1 sm:gap-2 hover:text-blue-400">
                <ThumbsUp className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
              <button className="flex items-center gap-1 sm:gap-2 hover:text-blue-400">
                <Eye className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </div>

            <div className="flex items-center gap-2">
              <Button
                onClick={onReadMore}
                variant="secondary"
                className="text-xs sm:text-sm font-medium h-8 sm:h-10 flex items-center justify-center"
              >
                Read more
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="py-1 sm:py-2 flex items-center justify-center text-white light:hover:text-black"
              >
                <MoreVertical className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
