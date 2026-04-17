
export default function NavBar():React.JSX.Element{
    return (
        <nav>
            <div id='logo'>
                <h1><span id='mini'>Mini</span>Blog</h1>
            </div>

            <div id='nav-links'>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/posts">Posts</a>
            </div>
        </nav>
    )
}