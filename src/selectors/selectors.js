/**
 * Created by Sanzhar on 17.01.2017.
 */
export function authorsFormattedForDropdown(authors) {
    return authors.map(author => {
        return {
            value: author.id,
            text: author.firstName + ' ' + author.lastName
        };
    });
}