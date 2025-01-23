import React, { useEffect } from "react";

function App() {
    useEffect(() => {
        // The link you want to open
        const url = "https://guvi.gitbook.io/fsd";
        window.location.href = url; // Redirects the user to the link
    }, []);

    return (
        <div>
            <p>Book content is loading...</p>
        </div>
    );
}

export default App;
