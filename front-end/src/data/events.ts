import { Event } from "@/lib/types/events";

export const events: Event[] = [
    {
        id: 1,
        type: 'upcoming',
        title: 'ARL HackFest 2024',
        date: '2024-01-24 10:00',
        description: '36-hour innovation marathon focusing on sustainable tech solutions',
        tags: ['Hackathon', 'Sustainability', 'Tech'],
        image: '/events/hackfest.jpg'
    },
    {
        id: 2,
        type: 'upcoming',
        title: 'AI Innovation Summit',
        date: '2024-02-15 14:00',
        description: 'Annual conference showcasing cutting-edge AI developments',
        tags: ['AI/ML', 'Conference', 'Innovation'],
        image: '/events/ai-summit.jpg'
    },
    {
        id: 3,
        type: 'past',
        title: 'Tech for Good Hackathon',
        date: '2023-11-10 09:00',
        description: 'Developed solutions for social impact challenges',
        tags: ['Social Impact', 'Hackathon', 'Innovation'],
        image: '/events/tech-for-good.jpg'
    },
    {
        id: 4,
        type: 'past',
        title: 'IoT Workshop Series',
        date: '2023-09-20 16:00',
        description: 'Hands-on sessions with industry IoT experts',
        tags: ['IoT', 'Workshop', 'Hardware'],
        image: '/events/iot-workshop.jpg'
    },
    {
        id: 5,
        type: 'past',
        title: 'Open Innovation Challenge',
        date: '2023-07-15 09:00',
        description: 'Collaborative problem-solving for global challenges',
        tags: ['Innovation', 'Collaboration', 'SDGs']
    }
];