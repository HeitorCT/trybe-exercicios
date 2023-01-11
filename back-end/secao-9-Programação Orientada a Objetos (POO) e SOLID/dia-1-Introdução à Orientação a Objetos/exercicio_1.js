var alunos = /** @class */ (function () {
    function alunos(matricula, nome, notasProvas, notasTrabalho) {
        this._matricula = matricula;
        this._nome = nome;
        this._notasProvas = notasProvas;
        this._notasTrabalho = notasTrabalho;
    }
    alunos.prototype.somaDasNotas = function () {
        var count = 0;
        this._notasProvas.forEach(function (nP) { return count += nP; });
        this._notasTrabalho.forEach(function (nT) { return count += nT; });
        return count;
    };
    alunos.prototype.mediaDasNotas = function () {
        var media = this.somaDasNotas() / (this._notasProvas.length + this._notasTrabalho.length);
        return media;
    };
    return alunos;
}());
var a = new alunos(98789, 'Zezinho', [10, 10, 10, 10], [10, 10]);
console.log(a.mediaDasNotas());
console.log(a.somaDasNotas());
