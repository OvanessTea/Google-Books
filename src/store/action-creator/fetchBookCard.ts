export const fetchBookDetails = async(id: string | undefined) => {
    try { 
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`);
        return await response.json();
    } catch (e) {
        return null;
    }
}