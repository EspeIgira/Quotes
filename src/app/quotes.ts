export class Quotes {
    public showDescription:boolean;
    constructor(
        public id:number, 
        public name:string,
        public author:string, 
        public Contributor:string, 
        public upVote:number, 
        public downVote:number,
        public completeDate:Date)
        {
            this.showDescription=false
        }
}
