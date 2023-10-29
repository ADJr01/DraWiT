export function getCoords(event,canvas) {
  if(!canvas || !event) throw new Error('Engine:Helper:GetCoords::=> canvas or event is not defined');
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX; //- rect.left;
  const y = event.clientY; //- rect.top;
  return { x, y };
}
