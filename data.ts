import { Bookshop } from './types';

export const BOOKSHOPS: Bookshop[] = [
  {
    id: 'strand',
    name: 'Strand Book Store',
    neighborhood: 'East Village',
    description: 'Home to "18 miles of books," this legendary independent bookstore has been a NYC staple since 1927. A chaotic treasure trove for used, new, and rare books.',
    tags: ['Legendary', 'Used Books', 'Rare Finds'],
    imageUrl: 'https://picsum.photos/id/24/800/600',
    address: '828 Broadway, New York, NY 10003',
    hours: '10:00 AM - 8:00 PM',
    highlights: ['The Rare Book Room', 'Dollar carts outside', 'Literary tote bags']
  },
  {
    id: 'mcnally',
    name: 'McNally Jackson',
    neighborhood: 'SoHo',
    description: 'A fiercely independent bookseller known for its global literature collection and iconic hanging book lamps. The perfect place to find your next obsession.',
    tags: ['Indie', 'Stationery', 'Cafe'],
    imageUrl: 'https://picsum.photos/id/364/800/600',
    address: '52 Prince St, New York, NY 10012',
    hours: '10:00 AM - 9:00 PM',
    highlights: ['Espresso bar', 'Curated staff picks', 'Independent press section']
  },
  {
    id: 'housing-works',
    name: 'Housing Works Bookstore',
    neighborhood: 'SoHo',
    description: 'A nonprofit bookstore and cafe with spiral staircases and mahogany balconies. All proceeds go towards fighting AIDS and homelessness.',
    tags: ['Non-profit', 'Events', 'Architecture'],
    imageUrl: 'https://picsum.photos/id/20/800/600',
    address: '126 Crosby St, New York, NY 10012',
    hours: '11:00 AM - 7:00 PM',
    highlights: ['Moth StorySLAM events', 'Wedding venue aesthetic', 'Volunteer staff']
  },
  {
    id: 'rizzoli',
    name: 'Rizzoli Bookstore',
    neighborhood: 'NoMad',
    description: 'Widely considered one of the most beautiful bookstores in the world, specializing in illustrated books on architecture, fashion, and design.',
    tags: ['Design', 'Beautiful', 'Luxury'],
    imageUrl: 'https://picsum.photos/id/435/800/600',
    address: '1133 Broadway, New York, NY 10010',
    hours: '11:00 AM - 8:00 PM',
    highlights: ['Serene atmosphere', 'Imported Italian texts', 'Stunning interior murals']
  },
  {
    id: 'argosy',
    name: 'Argosy Book Store',
    neighborhood: 'Midtown',
    description: 'New York\'s oldest independent bookseller, spanning six floors of antiquarian volumes, maps, prints, and autographs.',
    tags: ['Antiques', 'Maps', 'History'],
    imageUrl: 'https://picsum.photos/id/1073/800/600',
    address: '116 E 59th St, New York, NY 10022',
    hours: '10:00 AM - 6:00 PM',
    highlights: ['First editions', 'Vintage map collection', 'Old world charm']
  },
  {
    id: 'three-lives',
    name: 'Three Lives & Company',
    neighborhood: 'West Village',
    description: 'A cozy neighborhood spot that feels like a literary living room. The staff are incredibly knowledgeable and the curation is impeccable.',
    tags: ['Cozy', 'Fiction', 'Local Favorite'],
    imageUrl: 'https://picsum.photos/id/259/800/600',
    address: '154 W 10th St, New York, NY 10014',
    hours: '12:00 PM - 7:00 PM',
    highlights: ['Knowledgeable staff', 'Curated fiction', 'Intimate vibe']
  }
];