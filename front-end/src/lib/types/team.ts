export type SocialLink = {
    platform: string;
    icon: React.ComponentType;
    url: string;
};

export type TeamMember = {
    id: number;
    name: string;
    role: string;
    image: string;
    tags?: string[];
    socials?: SocialLink[];
    highlight?: boolean;
    badgeLabel?: string;
};