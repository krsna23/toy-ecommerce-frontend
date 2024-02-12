import { Injectable } from '@angular/core';
import { Toy } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  toysList: Toy[] = [
        {
            id: 1,
            name: "LEGO Classic Creative Bricks",
            category: "Building Blocks",
            ageRange: "5-12 years",
            photo: "https://source.unsplash.com/rEcn8OB83EI",
            recommendedAge: 6,
            details: "Includes a wide range of LEGO bricks in various colors and shapes for endless creative building possibilities.",
            usedFor: "2 Years", 
            location: "Suite 386 31508 Jaskolski Spurs, Eldenfurt, NY 34429-2215, Mumbai",
            price: 1411 
        },
        {
            id: 2,
            name: "Barbie Dreamhouse",
            category: "Dolls & Playsets",
            ageRange: "3-8 years",
            photo: "https://source.unsplash.com/JsjXnWlh8-g",
            recommendedAge: 5,
            details: "Features three floors, eight rooms, a working elevator, and fun realistic sounds for imaginative play.",
            usedFor: "1 Year", // 1 year used
            location: "Suite 857 11293 Chiquita Spring, Lake Claudineside, AL 19893, Delhi",
            price: 814 
        },
        {
            id: 3,
            name: "Nerf N-Strike Elite Disruptor Blaster",
            category: "Outdoor Play",
            ageRange: "8 years and up",
            photo: "https://source.unsplash.com/5Qajp1_80BA",
            recommendedAge: 8,
            details: "Quick-draw, rotating barrel blaster with a 6-dart capacity, perfect for Nerf battles.",
            usedFor: "3 Years", // 3 years used
            location: "7805 Elza Camp, East Paul, DE 66694-8763, Bangalore",
            price: 1215
        },
        {
            id: 4,
            name: "Melissa & Doug Wooden Jigsaw Puzzles",
            category: "Puzzles",
            ageRange: "3-6 years",
            photo: "https://source.unsplash.com/R4WCbazrD1g",
            recommendedAge: 4,
            details: "Set of four wooden jigsaw puzzles featuring colorful and engaging artwork, great for developing hand-eye coordination.",
            usedFor: "4 Years", // 4 years used
            location: "3 hoog Oasisplantsoen 47, Anniki aan de Rijn, CO 2722 RC, Hyderabad",
            price: 1365
        },
        {
            id: 5,
            name: "Fisher-Price Laugh & Learn Smart Stages Chair",
            category: "Learning Toys",
            ageRange: "6-36 months",
            photo: "https://source.unsplash.com/5INN0oj12u4",
            recommendedAge: 12,
            details: "Interactive chair with Smart Stages technology that adapts to your child's age and stage, teaching letters, numbers, shapes, and more.",
            usedFor: "2 Years", // 2 years used
            location: "Metzelaarstraat 749, Sijlwijk, ID 3294 TY, Ahmedabad",
            price: 874
        }
    ];

    getAllProducts():Toy[] {
        return this.toysList;
    }

    getProductById(id: number): Toy | undefined{
    return this.toysList.find(toy => toy.id === id)
    }
}
