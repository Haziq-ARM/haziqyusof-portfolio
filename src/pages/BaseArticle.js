import Navbar from "../components/Navbar"

const BaseArticle = ({children}) => {

	return (
		<div id="article">
			<Navbar/>
			<div className="content">
				{children}
			</div>
		</div>
	)
}

export default BaseArticle