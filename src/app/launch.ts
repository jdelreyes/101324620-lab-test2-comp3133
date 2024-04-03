export interface Launch {
  flight_number: number;
  mission_name: string;
  mission_id: string[];
  launch_year: string;
  details: string;
  launch_success: boolean;
  links: {
    mission_patch: string;
    mission_patch_small: string;
  };
}
