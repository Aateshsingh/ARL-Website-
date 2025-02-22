export type Event = {
    id: number;
    title: string;
    type: 'upcoming' | 'past';
    date: string;
    description: string;
    tags: string[];
    image?: string;
};