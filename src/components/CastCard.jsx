export default function CastCard({ person }) {
  return (
    <div className="cast-card" role="listitem">
      <div className="cast-card-img cast-card-img--empty"><span>{person.name?.[0] || '?'}</span></div>
      <div className="cast-card-info">
        <span className="cast-card-name">{person.name}</span>
        <span className="cast-card-char">{person.character || ''}</span>
      </div>
    </div>
  );
}
