
function Sections() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px',
            padding: '20px'
        }}>
            <div className="home">
                <h2 className="text-3xl font-semibold mb-4">Home</h2>
            </div>
            <div className="about">
                <h2 className="text-3xl font-semibold mb-4">About Me</h2>
            </div>

            <div className="project">
                <h2 className="text-3xl font-semibold mb-4">Projects</h2>
            </div>

            <div className="contact">
                <h2 className="text-3xl font-semibold mb-4">Contact Me</h2>
            </div>
        </div>
    );
}

export default Sections;
