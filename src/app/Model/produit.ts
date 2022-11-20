export class Produit {
    constructor(
        public id :number,
        public libelle :string,
        public image :string,
        public prix :number,
        public dispo :boolean,
        public onsolde :boolean,
        public genre :string,
        public size :number,
        public couleur :string
    ){}
}
