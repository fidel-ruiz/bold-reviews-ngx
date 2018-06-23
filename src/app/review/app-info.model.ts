import { Review } from './review';

export class AppInfo {

  id?: number;
  star_rating?: number;
  previous_star_rating?: number;
  app_slug?: string;
  reviews?: Array<Review>;
}
