import { ProjectImage, ServiceItem, TeamMember, Testimonial } from './types';

export const IMAGES: ProjectImage[] = [
  {
    id: '1',
    url: 'https://images.unsplash.com/photo-1679797850019-3d0d8659a695?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGVja2luZyUyMGNvbnRyYWN0b3J8ZW58MHx8MHx8fDI%3D',
    title: 'Lakeside Cedar Deck',
    category: 'deck',
    location: 'Lake Oswego, OR',
    completionDate: 'June 2023',
    description: 'A multi-level cedar deck designed to maximize lake views while providing distinct zones for dining and lounging.',
    materials: ['Western Red Cedar', 'Stainless Steel Cable Railing', 'Low-voltage LED Lighting'],
    challenge: 'The steep slope towards the lake required complex structural engineering and deep concrete footings to ensure stability.',
    solution: 'We utilized helical piles for the foundation to minimize ground disturbance and created a three-tier design that hugs the landscape naturally.'
  },
  {
    id: '2',
    url: 'https://images.unsplash.com/photo-1679797870465-b4eda40ead96?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVja2luZyUyMGNvbnRyYWN0b3J8ZW58MHx8MHx8fDI%3D',
    title: 'Modern Composite Living',
    category: 'deck',
    location: 'Portland, OR',
    completionDate: 'August 2023',
    description: 'A sleek, low-maintenance composite deck featuring a built-in fire pit and seamless indoor-outdoor flow.',
    materials: ['Trex Transcend Composite', 'Aluminum Glass Railing', 'Gas Fire Feature'],
    challenge: 'The homeowner wanted a zero-maintenance space that matched their modern interior aesthetic.',
    solution: 'We selected a monochromatic grey composite with hidden fasteners and frameless glass railings to preserve the clean lines and view.'
  },
  {
    id: '3',
    url: 'https://images.unsplash.com/photo-1679797878543-66c1e502d413?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGVja2luZyUyMGNvbnRyYWN0b3J8ZW58MHx8MHx8fDI%3D',
    title: 'Poolside Pergola & Patio',
    category: 'patio',
    location: 'Beaverton, OR',
    completionDate: 'July 2023',
    description: 'An expansive paver patio surrounding a custom pool, anchored by a grand cedar pergola for shade.',
    materials: ['Travertine Pavers', 'Rough-sawn Cedar Timber', 'Outdoor Kitchen Kit'],
    challenge: 'Integrating the new hardscape with an existing pool coping that was showing signs of wear.',
    solution: 'We resurfaced the pool edge to match the new travertine pavers, creating a unified and resort-like feel.'
  },
  {
    id: '4',
    url: 'https://images.unsplash.com/photo-1679797822035-a94531a8b05b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGVja2luZyUyMGNvbnRyYWN0b3J8ZW58MHx8MHx8fDI%3D',
    title: 'Minimalist Railing Design',
    category: 'deck',
    location: 'Vancouver, WA',
    description: 'Focusing on clean lines, this project highlights how modern railing can transform a traditional deck structure.',
    materials: ['Ipe Hardwood', 'Matte Black Aluminum Railing']
  },
  {
    id: '5',
    url: 'https://images.unsplash.com/photo-1679797842442-96a0aabe152b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGVja2luZyUyMGNvbnRyYWN0b3J8ZW58MHx8MHx8fDI%3D',
    title: 'Wrap-around Estate Deck',
    category: 'deck',
    location: 'West Linn, OR',
    description: 'A massive wrap-around porch that restores the grandeur of a historic farmhouse estate.',
    materials: ['Painted Pine', 'Tongue and Groove Porch Flooring']
  },
  {
    id: '6',
    url: 'https://images.unsplash.com/photo-1667207591141-96c7ef7a5a3b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGRlY2tpbmclMjBjb250cmFjdG9yfGVufDB8fDB8fHwy',
    title: 'Sunset Balcony',
    category: 'patio',
    location: 'Hood River, OR',
    description: 'A second-story balcony designed specifically for watching sunsets over the gorge.',
    materials: ['Steel Framing', 'Composite Decking', 'Cable Railing']
  }
];

export const TEAM_IMAGES: TeamMember[] = [
  {
    id: 't1',
    name: "Marcus Thorne",
    role: "Lead Carpenter",
    image: "https://media.istockphoto.com/id/168409517/photo/portrait-of-construction-worker.webp?a=1&b=1&s=612x612&w=0&k=20&c=TtKpFOEEqI2jg_zWt01sGDK2WX4KY_OOMCpANY3VxaU="
  },
  {
    id: 't2',
    name: "Construction Team",
    role: "On Site",
    image: "https://media.istockphoto.com/id/521726025/photo/two-men-building-a-deck.webp?a=1&b=1&s=612x612&w=0&k=20&c=CkGnqCo66RIPD5ErL4oK34w0KUBFf9yOCfy-Ax7vNJQ="
  },
  {
    id: 't3',
    name: "David Chen",
    role: "Project Manager",
    image: "https://media.istockphoto.com/id/1456906845/photo/construction-worker-portrait.webp?a=1&b=1&s=612x612&w=0&k=20&c=xRyM2imrWzMj4lMPsGY1J1h_HLt67gQIaGVZT40gU7o="
  },
  {
    id: 't4',
    name: "James Wilson",
    role: "Masonry Specialist",
    image: "https://media.istockphoto.com/id/2235913023/photo/handyman-worker-making-patio-outside-close-to-a-pool.webp?a=1&b=1&s=612x612&w=0&k=20&c=XSVdQY_bNvqfZv4mIGlDYpQqbQsSTWBWllHAUGS4g7Y="
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 's1',
    title: 'Custom Wood Decking',
    description: 'We specialize in exotic hardwoods like Ipe and Cumaru, as well as premium Cedar.',
    fullDescription: 'Nothing beats the natural warmth and character of real wood. Our custom wood decking services range from traditional Pressure Treated Pine to premium Western Red Cedar and exotic Brazilian hardwoods like Ipe, Tigerwood, and Cumaru. We hand-select every board to ensure structural integrity and aesthetic beauty.',
    icon: 'TreePine',
    image: IMAGES[0].url,
    features: ['Natural aesthetics', 'Structural versatility', 'Cooler underfoot than plastic', 'Biodegradable'],
    benefits: ['Increases home value', 'Timeless look', 'Can be refinished/stained']
  },
  {
    id: 's2',
    title: 'Composite & PVC Decking',
    description: 'Certified installers for major brands like Trex and TimberTech offering low-maintenance solutions.',
    fullDescription: 'Enjoy your deck without the weekend chores. Composite and PVC decking represent the ultimate in low-maintenance outdoor living. Resistant to fading, staining, scratching, and mold, these high-tech materials mimic the look of wood without the upkeep.',
    icon: 'Layers',
    image: IMAGES[1].url,
    features: ['25-50 Year Warranties', 'Hidden Fasteners', 'Fade & Stain Resistant', 'Made from recycled materials'],
    benefits: ['Zero sanding or staining', 'Splinter-free safety', 'Consistent color']
  },
  {
    id: 's3',
    title: 'Patio Covers & Structures',
    description: 'Extend your season with custom pergolas, gazebos, and covered porches.',
    fullDescription: 'Don’t let the rain or harsh sun drive you indoors. Our custom patio covers, pergolas, and gazebos allow you to enjoy your backyard year-round. From open-air timber frame pergolas to fully roofed structures with heaters and fans, we build vertical features that define your space.',
    icon: 'Umbrella',
    image: IMAGES[2].url,
    features: ['Timber Frame Construction', 'Aluminum Louvered Roofs', 'Integrated Lighting & Heating', 'Custom Shade Sails'],
    benefits: ['Rain protection', 'UV protection', 'Defines outdoor rooms']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    location: 'Portland, OR',
    text: 'Summit Decks transformed our backyard into a stunning oasis. The team was professional, clean, and the craftsmanship is top-notch.',
    rating: 5
  },
  {
    id: '2',
    name: 'Michael Ross',
    location: 'Beaverton, OR',
    text: 'We hired them for a complex multi-level deck on a steep slope. Their engineering knowledge and attention to detail gave us complete peace of mind.',
    rating: 5
  },
  {
    id: '3',
    name: 'The Chang Family',
    location: 'Lake Oswego, OR',
    text: 'From the 3D design to the final walkthrough, the experience was seamless. We utilize our new covered patio every single day.',
    rating: 5
  }
];