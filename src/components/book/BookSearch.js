export const BookSearch = ({setterFunction}) => {
    return (
        <div>
            <input 
                onChange={
                    (changeEvent) => {
                        setterFunction(changeEvent.target.value)
                    }
                }
            type="text" placeholder="Search Books" />
            <button type="submit">Search</button>
        </div>

    )
}