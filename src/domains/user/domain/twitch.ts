export type MainLive = {
  error: boolean;

title: string;
liveTime?: string;
live: {
    name: string;
    tags: string[];
    user_icon: string;
    user_id: number;
    user_login: string;
    game_id: number;
    game_name: string;
    thumbmail: string;
    spectators: number;
  };
}

