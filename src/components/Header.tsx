import HeaderImg from '../assets/banner.jpg'
import './styles/Header.css'

const Header = () => {
  return (
    <header className="header" style={{ backgroundImage: `url(${HeaderImg})` }}>
      <div className="header__texto">
        <h2 className="no-margin">TextDetectorApp</h2>
        <p className="no-margin">Aprende de los expertos </p>
      </div>
    </header>
  )
}

export default Header
