import React from 'react'
import { IconType } from 'react-icons'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface SocialLink {
  icon: IconType
  url: string
}

interface TeamMemberCardProps {
  name: string
  role: string
  image: string
  socials: SocialLink[]
}

const TeamMemberCard = ({ name, role, image, socials }: TeamMemberCardProps) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="relative group bg-blue-100 rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden"
  >
    <div className="aspect-square relative overflow-hidden">
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover group-hover:scale-105 transition-transform"
      />
    </div>
    <div className="p-6 bg-gradient-to-b from-white to-blue-50">
      <h3 className="text-xl font-bold text-blue-900">{name}</h3>
      <p className="text-gray-600 mb-4">{role}</p>
      <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
        {socials.map(({ icon: Icon, url }, i) => (
          <Link key={i} href={url} className="p-2 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors">
            <Icon className="w-5 h-5 text-blue-900" />
          </Link>
        ))}
      </div>
    </div>
  </motion.div>
)

export default TeamMemberCard
