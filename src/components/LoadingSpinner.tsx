import "./LoadingSpinner.css";

function LoadingSpinner(): JSX.Element {
    return (
        <>
            <img src="/loading.webp" alt="loading" className="loading-spinner" />
        </>
    );
}

export { LoadingSpinner };