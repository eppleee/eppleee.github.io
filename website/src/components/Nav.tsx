
function Nav() {
    return (
        <nav className="navbar fixed top-0 left-0 h-screen w-48 flex flex-col items-start bg-primary p-4 z-50 shadow-lg">
            <a
                href="#"
                className="flex items-center px-3 py-2 text-primary-foreground hover:bg-accent hover:text-accent-foreground rounded-lg transition-colors"
            >
                <span className="text-lg mr-3">♥</span>
                <span>Home</span>
            </a>
            <a
                href="#about"
                className="flex items-center px-3 py-2 text-primary-foreground hover:bg-accent hover:text-accent-foreground rounded-lg transition-colors"
            >
                <span className="text-lg mr-3">👤</span>
                <span>About</span>
            </a>
            <a
                href="#projects"
                className="flex items-center px-3 py-2 text-primary-foreground hover:bg-accent hover:text-accent-foreground rounded-lg transition-colors"
            >
                <span className="text-lg mr-3">💼</span>
                <span>Projects</span>
            </a>
            <a
                href="#contact"
                className="flex items-center px-3 py-2 text-primary-foreground hover:bg-accent hover:text-accent-foreground rounded-lg transition-colors"
            >
                <span className="text-lg mr-3">📧</span>
                <span>Contact</span>
            </a>
        </nav>
    );
}

export default Nav;