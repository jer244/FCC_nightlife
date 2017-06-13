export class Venue {
    constructor(
        public name: string,
        public image_url: string,
        public rating: number,
        public url: string,
        public review_count: number,
        public price: string,
        public id: string,
        public num_attending?: number
    ) {
        this.num_attending=0;
    };
}

