export default class MenuService {

    getResource = async (url) => {
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status} status!`)
        }

        return res.json();
    }

    getFullMenu = async () => {
        const res = await this.getResource('../../menu.json');
        console.log(res);
        return res;
    }
}