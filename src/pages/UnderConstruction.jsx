import { useState } from "react";
import Popcorn from "../assets/PopcornStamp.png";

export function UnderConstruction() {
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    async function validate() {
        setError("");

        try {
            const response = await fetch(
                "https://jugf3kk5ct52heu6heq3u7qm4u0drimj.lambda-url.us-east-2.on.aws/",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        password,
                    }),
                }
            );

            const data = await response.json();

            if (response.ok && data.success && data.url) {
                window.location.href = data.url
                return;
            }

            setError("Incorrect password.");
        } catch (err) {
            console.error(err);
            setError("Unable to contact server.");
        }
    }

    function handleKeyDown(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            validate();
        }
    }

    return (
        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "1.5rem",
                padding: "2rem",
            }}
        >
            <h1
                style={{
                    margin: 0,
                    textAlign: "center",
                    fontSize: "2rem",
                }}
            >
                Please enter the password on your invitation
                to get redirected to the full site!
            </h1>

            <img
                src={Popcorn}
                alt="Popcorn"
                height={350}
                style={{
                    borderRadius: "16px",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                }}
            />

            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "1rem",
                    width: "100%",
                    maxWidth: "350px",
                }}
            >
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyDown={handleKeyDown}
                    style={{
                        width: "100%",
                        padding: "0.9rem 1rem",
                        fontSize: "1rem",
                        borderRadius: "10px",
                        border: "1px solid #ccc",
                        outline: "none",
                        boxSizing: "border-box",
                    }}
                />

                <button
                    type="button"
                    onClick={validate}
                    style={{
                        width: "100%",
                        padding: "0.9rem",
                        fontSize: "1rem",
                        fontWeight: 600,
                        color: "white",
                        background: "linear-gradient(135deg, #ff9800, #ff6f00)",
                        border: "none",
                        borderRadius: "10px",
                        cursor: "pointer",
                        transition: "transform 0.15s ease, box-shadow 0.15s ease",
                        boxShadow: "0 4px 12px rgba(255,111,0,0.35)",
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-2px)";
                        e.currentTarget.style.boxShadow =
                            "0 8px 20px rgba(255,111,0,0.45)";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow =
                            "0 4px 12px rgba(255,111,0,0.35)";
                    }}
                >
                    Enter Site
                </button>
                {error && (
                    <p style={{ color: "#d32f2f", margin: 0 }}>
                        {error}
                    </p>
                )}
            </div>
        </div>
    );
}