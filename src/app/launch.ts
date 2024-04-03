export interface Launch {
  flight_number: number;
  mission_name: string;
  mission_id: string[];
  launch_year: string;
  rocket: {
    rocket_name: string;
    rocket_type: string;
  };
  details: string;
  launch_site: {
    site_name_long: string;
  };
  launch_success: boolean;
  links: {
    mission_patch: string;
    mission_patch_small: string;
    presskit: string;
    wikipedia: string;
    video_link: string;
  };
}
