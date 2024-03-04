export function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

const minutes = String(date.getMinutes()).padStart(2, '0');

    const formattedTime =  `${minutes}`;
    const formattedDate = `${day}/${month}/${year}`
    return {formattedDate, formattedTime};
}