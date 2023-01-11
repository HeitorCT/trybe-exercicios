class alunos {
  
  _matricula: number;
  _nome: string;
  _notasProvas: number[];
  _notasTrabalho: number[];

  constructor(matricula: number, nome: string, notasProvas: number[], notasTrabalho: number[]) {
    this._matricula = matricula;
    this._nome = nome;
    this._notasProvas = notasProvas;
    this._notasTrabalho = notasTrabalho;
  }

  somaDasNotas ():number {
    let count = 0;
    this._notasProvas.forEach((nP) => count += nP);
    this._notasTrabalho.forEach((nT) => count += nT);
    return count;
  }

 mediaDasNotas ():number {
    const media = this.somaDasNotas()/( this._notasProvas.length +  this._notasTrabalho.length);
    return media;
  }
}

const a = new alunos(98789, 'Zezinho',[10,10,10,10],[10,10]);
console.log(a.mediaDasNotas());
console.log(a.somaDasNotas());