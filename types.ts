export interface ProjectImage {
  id: string;
  url: string;
  title: string;
  category: 'deck' | 'patio' | 'construction';
  location?: string;
  completionDate?: string;
  description?: string;
  materials?: string[];
  challenge?: string;
  solution?: string;
  gallery?: string[]; // Additional images for detail page
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  fullDescription?: string;
  icon: string;
  features?: string[];
  benefits?: string[];
  image: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
  rating: number;
}