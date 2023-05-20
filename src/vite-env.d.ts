/// <reference types="vite/client" />

interface User {
  id?: string | null;
  discord_id?: string | null;
  email?: string | null;
  username?: string | null;
  chips?: number | null;
}

interface GameState {
  host?: string | null;
}
