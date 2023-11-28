export default function NightSky() {
    const numberOfStars = 20;
    
    return (
      <div className="night">
        {Array.from({ length: numberOfStars }, (_, i) => (
          <div key={i} className="shooting_star" />
        ))}
      </div>
    );
  }
  