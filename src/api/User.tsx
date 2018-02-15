export const UserApi = {
    fetchUsers () {
        return fetch(`http://private-f373b1-lukmatest.apiary-mock.com/user`)
            .then(response => response.json())
            .then(response => response.data)
            .catch(error => error);
    }
};