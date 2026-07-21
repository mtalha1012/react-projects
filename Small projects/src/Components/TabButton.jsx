import '../App.css'

export default function TabButton({id, label, current, onClick}) {
    const isActive = current == id;

    return (
        <button 
        className="multiple-button"
        onClick={() => {onClick(id)}}>
            {label}
        </button>
    )
}