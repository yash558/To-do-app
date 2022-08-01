import React,{useState} from 'react'
import './Navbar.css'
import plusIcon from '../../assets/plus.png'
const Navbar = (props) => {
  const colors = ["#fe9b72", "#fec971", "#00d4fe", "#b693fd", " #e4ee91"];
  
  const [listOpen, setListOpen] = useState(false);

  return (
    <div className="navbar">      
      <ul className={`navbar_list ${listOpen ? "navbar_list_active": ""}`}>
      <img src={plusIcon} alt="Add" height={50} width={60} onClick={() => setListOpen(!listOpen)} />
        {colors.map((item, index) => (
          <li
            key={index}
            className="navbar_list_item"
            style={{ backgroundColor: item }}
            onClick={()=>props.addNote(item)}
          />
        ))}
      </ul>
    </div>
  )
}

export default Navbar