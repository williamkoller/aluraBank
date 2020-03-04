class Negociacao {
    // convenção  
    constructor(data, quantidade, valor) {
            this._data = data;
            this._quantidade = quantidade;
            this._valor = valor;
        }
        // property
    get data() {
        return this._data;
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }
}