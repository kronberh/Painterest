import "./ErrorScreen.css";

function ErrorScreen(): JSX.Element {
    return (
        <>
            <img src="/connection_error.png" alt="error" className="error-image" />
        </>
    );
}

export { ErrorScreen };