
import DesktopNavLinks from "./DesktopNavLinks"
import {Logo} from "./Logo" 
export function Header() {
	return (
		<header>
			<div className='w-5/7 flex items-center justify-between mx-auto'>
      <Logo/>
			<DesktopNavLinks/>
      </div>
		</header>
	)


}

export default Header