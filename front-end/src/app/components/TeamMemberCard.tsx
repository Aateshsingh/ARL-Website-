import { TeamMember } from "@/lib/types/team";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ComponentType } from "react";

type TeamMemberCardProps = Pick<
  TeamMember,
  "name" | "role" | "image" | "tags" | "socials" | "highlight" | "badgeLabel"
>;

interface SocialLink {
  icon: ComponentType;
  url: string;
}

const TeamMemberCard = ({
  name,
  role,
  image,
  tags = [],
  socials = [],
  highlight = false,
  badgeLabel,
}: TeamMemberCardProps) => (
  <motion.div
    whileHover={{ y: -10 }}
    className={`relative group ${
      highlight
        ? "bg-gradient-to-b from-blue-50 to-white border-2 border-blue-500"
        : "bg-gradient-to-b from-white to-blue-50 border border-blue-100"
    } rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden ${
      highlight ? "row-span-2" : "row-span-1"
    }`}
  >
    {badgeLabel && (
      <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm z-10">
        {badgeLabel}
      </div>
    )}

    <div
      className={`relative overflow-hidden ${
        highlight ? "aspect-square" : "aspect-[4/4]"
      }`}
    >
      <Image
        src={image}
        alt={name}
        fill
        className="object-fill group-hover:scale-105 transition-transform"
      />
    </div>

    <div className={`p-6 ${highlight ? "space-y-4" : "space-y-2"}`}>
      <h3
        className={`${highlight ? "text-2xl" : "text-lg"} font-bold ${
          highlight ? "text-blue-900" : "text-gray-800"
        }`}
      >
        {name}
      </h3>
      <p
        className={`${highlight ? "text-base" : "text-sm"} ${
          highlight ? "text-blue-600 font-semibold" : "text-gray-600"
        }`}
      >
        {role}
      </p>

      <div className="flex flex-wrap gap-2 pt-4">
        {tags?.map((tag) => (
          <span
            key={tag}
            className={`px-2 py-1 rounded-full ${
              highlight ? "text-sm" : "text-xs"
            } ${
              highlight
                ? "bg-blue-100 text-blue-800"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            {tag}
          </span>
        ))}
      </div>

      <div
        className={`flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity ${
          highlight ? "pt-6" : "pt-4"
        }`}
      >
        {socials?.map(({ icon: Icon, url }: SocialLink, i: number) => (
          <Link
            key={i}
            href={url}
            className="p-2 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors"
          >
            <Icon />
          </Link>
        ))}
      </div>
    </div>
  </motion.div>
);

export default TeamMemberCard;