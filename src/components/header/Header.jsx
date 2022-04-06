import "./header.css"

export default function Header() {
  return (
    <div className='header'>
        <div className="headerTitles">
          <span className="headerTitleSm">React & Node </span>
          <span className="headerTitleLg">Blog</span>
        </div>
        <img src="https://images.pexels.com/photos/8180447/pexels-photo-8180447.jpeg?cs=srgb&dl=pexels-roman-odintsov-8180447.jpg&fm=jpg" alt="" className="headerImg" />
    </div>
  )
}
