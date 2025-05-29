export default function LoadingButton ({ 
    className = "btn btn-success",
    text = "Loading"
 }) {
    return (
        <button className={className} type="button" disabled>
            <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
            <span role="status"> {text}</span>
        </button>
    );
}