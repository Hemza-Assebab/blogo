export default function LoadingButton () {
    return (
        <button className="btn btn-success w-100 mt-4" type="button" disabled>
            <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
            <span role="status"> Loading...</span>
        </button>
    );
}