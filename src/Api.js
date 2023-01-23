class Api {
    constructor(token) {
        this.path = "https://api.react-learning.ru";
        this.group = "group-8";
        this.token = token;
    }
    signUp(body) { // регистрация
        body.group = this.group;
        return fetch(`${this.path}/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        });
    }
    signIn(body) { // авторизация
        return fetch(`${this.path}/signin`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        });
    }
    paswordReset(body) { // сброс пароля напочту
        return fetch(`${this.path}/password-reset`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        });
    }


    getProducts() {
        return fetch(`${this.path}/products`, {
            headers: {
                "authorization": `Bearer ${this.token}`
            }
        })
    }
    getProduct(id) {
        return fetch(`${this.path}/products/${id}`, {
            headers: {
                "authorization": `Bearer ${this.token}`
            }
        })
    }
    addProduct(body) {
        return fetch(`${this.path}/products`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "authorization": `Bearer ${this.token}`
            },
            body: JSON.stringify(body)
        })
    }
    delProduct(id) {
        return fetch(`${this.path}/products/${id}`, {
            method: "DELETE",
            headers: {
                "authorization": `Bearer ${this.token}`
            }
        })
    }



    patchProduct(id,body) {
        return fetch(`${this.path}/products/${id}`, {
            method: "PATH",
            headers: {
                "Content-Type": "application/json",
                "authorization": `Bearer ${this.token}`
            },
            body: JSON.stringify(body)
        })
    }

    likeProduct(id) {
        return fetch(`${this.path}/products/likes/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "authorization": `Bearer ${this.token}`
            }
        })
    }

    deletelikeProduct(id) {
        return fetch(`${this.path}/products/likes/${id}`, {
            method: "DELETE",
            headers: {
                "authorization": `Bearer ${this.token}`
            }
        })
    }

    addreviewProduct(id, body) {
        return fetch(`${this.path}/products/review/${id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "authorization": `Bearer ${this.token}`
            },
            body: JSON.stringify(body)
        })
    }

    deletereviewProduct(id) {
        return fetch(`${this.path}/products/review/${id}`, {
            method: "DELETE",
            headers: {
                "authorization": `Bearer ${this.token}`
            }
        })
    }

    getReview() {
        return fetch(`${this.path}/products/review`, {
            headers: {
                "authorization": `Bearer ${this.token}`
            }
        })
    }
    getReview(id) {
        return fetch(`${this.path}/products/review/${id}`, {
            headers: {
                "authorization": `Bearer ${this.token}`
            }
        })
    }


    getUsers() {
        return fetch(`${this.path}/v2/${this.group}/users`, {
            headers: {
                "authorization": `Bearer ${this.token}`
            }
        })
    }

    getUser() {
        return fetch(`${this.path}/v2/${this.group}/users/me`, {
            headers: {
                "authorization": `Bearer ${this.token}`
            }
        })
    }

    getUser(id) {
        return fetch(`${this.path}/v2/${this.group}/users/${id}`, {
            headers: {
                "authorization": `Bearer ${this.token}`
            }
        })
    }

    patchUser(body) {
        return fetch(`${this.path}/v2/${this.group}/users/me`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "authorization": `Bearer ${this.token}`
            },
            body: JSON.stringify(body)

        })
    }

    patcavatarhUser(body) {
        return fetch(`${this.path}/v2/${this.group}/users/me/avatar`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "authorization": `Bearer ${this.token}`
            },
            body: JSON.stringify(body)

        })
    }


}
export { Api };