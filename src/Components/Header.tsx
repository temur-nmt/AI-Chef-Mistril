import claudeLogo from '../assets/Chef Claude Icon.png'

const Header = () => {
    return(
        <header className='claude-header'>
            <img src={claudeLogo} alt="chef-claude-logo" className='claude-logo'/>
            <p className='claude-name'>Chef Mistral</p>
        </header>
    )
}
export default Header