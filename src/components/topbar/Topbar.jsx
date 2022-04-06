import  './topbar.css'

 function Topbar() {
  return (
    <div className='top'>
      <div className="topleft">
      <i className="topIcon fa-brands fa-facebook-square"></i>
      <i className="topIcon fa-brands fa-twitter-square"></i>
      <i className="topIcon fa-brands fa-pinterest-square"></i>
      <i className="topIcon fa-brands fa-instagram-square"></i>
      </div>
      <div className="topcenter">
        <ul className="topList">
          <li className="topListItem">HOME</li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">WRITE</li>
          <li className="topListItem">LOGOUT</li>
        </ul>
      </div>
      <div className="topright">
        <img
        className='topImg'
         src="https://images.pexels.com/photos/8652888/pexels-photo-8652888.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" />
      <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>

      </div>
     </div>
  )
}

export default Topbar;