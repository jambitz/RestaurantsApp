export interface Coordinates {
  latitude?: number;
  longitude?: number;
}
export interface Restaurant {
  location_id: string;
  address_obj: {
    street1: string;
  };
  name: string;
  latitude: string;
  longitude: string;
  num_reviews: string;
  timezone: string;
  location_string: string;
  photo?: {
    images?: {
      small?: {
        url?: string;
        width: string;
        height: string;
      };
      medium?: {
        url?: string;
        width: string;
        height: string;
      };
    };
  };
  awards: any;
  doubleclick_zone: string;
  preferred_map_engine: string;
  raw_ranking: string;
  ranking_geo: string;
  ranking_geo_id: string;
  ranking_position: string;
  ranking_denominator: string;
  ranking_category: string;
  ranking: string;
  distance: string;
  distance_string: string;
  bearing: string;
  rating: string;
  is_closed: boolean;
  open_now_text: string;
  is_long_closed: boolean;
  price_level: string;
  description: string;
  web_url: string;
  write_review: string;
  ancestors: any;
  category: any;
  subcategory: any;
  parent_display_name: string;
  is_jfy_enabled: boolean;
  nearest_metro_station: any;
  reviews: any;
  phone: string;
  website: string;
  hours: any;
  is_candidate_for_contact_info_suppression: boolean;
  cuisine: any;
  dietary_restrictions: any;
  establishment_types: any;
}

export interface ReviewCardProps {
  title: string;
  author: string;
  summary: string;
}
