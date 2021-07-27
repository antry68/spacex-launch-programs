export interface Source {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  language: string;
  country: string;


  flight_number: string;
  mission_name: string;
  mission_id: [string],
  launch_year: string;
  launch_date_unix: string;
  launch_date_utc: string;
  launch_date_local: string;
  is_tentative: string;
  tentative_max_precision: string;
  tbd: string;
  launch_window: string;
  rocket: {
    rocket_id: string;
    rocket_name: string;
    rocket_type: string;
    first_stage: {
      cores: [
        {
          core_serial: string;
          flight: string;
          block: string;
          gridfins: string;
          legs: string;
          reused: string;
          land_success: string;
          landing_intent: string;
          landing_type: string;
          landing_vehicle: string;
        }
      ]
    },
  }
  launch_success: true,
  links: {
    mission_patch: string;
    mission_patch_small: string;
    reddit_campaign: string;
    reddit_launch: string;
    reddit_recovery: string;
    reddit_media: string;
    presskit: string;
    article_link: string;

  }
}
