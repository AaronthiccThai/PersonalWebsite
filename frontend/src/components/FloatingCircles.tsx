
const FloatingCircles = () => {
  return (
    <div className="area">
      <ul className="circles">
        {Array.from({ length: 10 }).map((_, i) => (
          <li key={i} />
        ))}
      </ul>
    </div>  
  )
}
export default FloatingCircles
