import Image from "next/image";

import { cn, getTechLogos } from "@/lib/utils";
import { AnimatedTooltip } from "./ui/animated-tooltip";

const DisplayTechIcons = async ({ techStack }: TechIconProps) => {
  const techIcons = await getTechLogos(techStack);

  return (
    <div className="flex flex-row mb-10 w-full">
    <AnimatedTooltip items={techIcons} />
  </div>
  );
};

export default DisplayTechIcons;