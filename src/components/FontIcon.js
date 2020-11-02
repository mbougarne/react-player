/**
 * Project: React Player Home Assignment
 * Component: FontIcon
 * Description: FontAwesome icon
 * 
 */

import '../styles/FontIcon.css';

const FontIcon = ({name, handleClick}) => (<i className={name} onClick={handleClick}></i>)

export default FontIcon