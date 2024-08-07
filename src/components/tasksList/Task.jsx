export function Task(){
    const style = {
        borderLeftColor: '#ff0000',
    };

    return (
        <article className="item" data-state="" style={style}>
            <div className="date">2024-07-17 14:29:11</div>
            <div className="state">Atlikta</div>
            <div className="text" ></div>
            <form className="hidden">
                <input type="text" value="Wassup?" />
                <button className="update" type="submit">Update</button>
                <button className="cancel" type="button">Cancel</button>
            </form>
            <div className="actions">
                <button className="done" >Done</button>
                <div className="divider"></div>
                <button className="edit">Edit</button>
                <button className="delete">Delete</button>
            </div>
        </article>
    );
}