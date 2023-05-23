export default function leaveGame(
  ws: WebSocket | null,
  room: string,
  user: User,
  method: string
) {
  if (ws && ws.readyState === WebSocket.OPEN) {
    const userAndGameData = { room, user, method };

    ws.send(JSON.stringify(userAndGameData));
    ws.close();
  }

  return;
}
