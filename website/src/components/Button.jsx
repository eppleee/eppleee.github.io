
function Button() {
    // Define styles for the button

    const styles = {
        backgroundColor: "rgba(241, 238, 238, 0.411)",
        color: "#2B2B2B",
        border: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        cursor: "pointer",
    }

    return (
        <button style={styles}>
            Click Me
        </button>
    );
}
export default Button