export class Produit {
    constructor(
        public id :number,
        public libelle :string,
        public image :string,
        public prix :Float64Array,
        public dispo :boolean,
        public onsolde :boolean,
        public genre :string,
        public taille :string,
        public couleur :string
    ){}
}
