const BASEURL = 'https://react-fast-pizza-api.onrender.com/api';

export const getMenu = async () => {
    try {
        const res = await fetch(`${BASEURL}/menu`);
        if(!res.ok) throw new Error('Failed fetching the data');
        const {data} = await res.json();
        return data;
    } catch(err) {
        alert(err.message)
    }
}