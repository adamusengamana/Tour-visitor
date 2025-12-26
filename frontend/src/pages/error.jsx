import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function ErrorPage() {
    const navigate = useNavigate();

    // auto-redirect to home after 5s
    useEffect(() => {
        const t = setTimeout(() => navigate("/", { replace: true }), 5000);
        return () => clearTimeout(t);
    }, [navigate]);

    return (
        <div
            style={{
                height: "100vh",
                display: "flex",
                gap: 20,
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                padding: 20,
                background: "#fafafa",
                color: "#222",
                fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
            }}
            role="main"
            aria-live="polite"
        >
            <h1 style={{ fontSize: 36, margin: 0 }}>Oops — page not found</h1>
            <p style={{ maxWidth: 640, margin: 0 }}>
                The URL you tried doesn't match any page in this app. You will be
                redirected to the home page in a few seconds.
            </p>

            <div style={{ display: "flex", gap: 12, marginTop: 12 }}>
                <button
                    onClick={() => navigate("/", { replace: true })}
                    style={{
                        padding: "8px 14px",
                        borderRadius: 6,
                        border: "1px solid #ccc",
                        background: "#0078d4",
                        color: "white",
                        cursor: "pointer",
                    }}
                >
                    Go to Home
                </button>

                <button
                    onClick={() => navigate(-1)}
                    style={{
                        padding: "8px 14px",
                        borderRadius: 6,
                        border: "1px solid #ccc",
                        background: "white",
                        color: "#333",
                        cursor: "pointer",
                    }}
                >
                    Go Back
                </button>

                <Link
                    to="/"
                    style={{
                        alignSelf: "center",
                        color: "#0078d4",
                        textDecoration: "underline",
                    }}
                >
                    Or click here now
                </Link>
            </div>

            <small style={{ marginTop: 16, color: "#666" }}>
                If you believe this is an error, contact support.
            </small>
        </div>
    );
}