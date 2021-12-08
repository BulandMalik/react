export const AuthorList = ({authors}) => {
    console.log(authors);
    return (
            <ul>
                {
                    authors.map( author => 
                        <li key={author.id}>
                            {author.lastName} {author.firstName}
                        </li>)
                }
            </ul>
    );
}