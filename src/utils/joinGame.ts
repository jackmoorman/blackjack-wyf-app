export default function joinGame(
  ws: WebSocket,
  room: string,
  user: User,
  method: string
) {
  if (!user.id) return alert('ID null');
  const userAndGameData = { room, user, method };
  ws.send(JSON.stringify(userAndGameData));
  return;
}
