import type { LinkCard } from "@/mock/links";
import { Button } from "@radix-ui/themes";

export function LinkCard({ linkCard }: { linkCard: LinkCard }) {
  return (
    <div
      className="p-4 rounded-2xl"
      style={{ backgroundImage: linkCard.backgroundColor }}
    >
      <h1 className="text-xl font-bold mb-2 text-white">{linkCard.title}</h1>
      <p className=" mb-4 text-white">{linkCard.subtitle}</p>

      <Button
        color={linkCard.buttonColor}
        onClick={() => window.open(linkCard.url, "_blank")}
      >
        {linkCard.buttonText}
      </Button>
    </div>
  );
}
