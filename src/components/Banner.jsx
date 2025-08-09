// Banner.jsx
function Banner({ title, image, style = {} }) {
  return (
    <div className="bg-head" style={{ backgroundImage: `url(${image})`,...style, }}>
      <div className="container">
        <h1 className="py-4" data-aos="fade-right">{title}</h1>
      </div>
    </div>
  );
}

export default Banner;