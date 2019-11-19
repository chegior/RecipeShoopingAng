export class Recipe{
  public name:string;
  public description:string;
  public imagePath:string;

  constructor(name: string, desc: string, imagePath: string){
      this.name = name;
      this.description =desc;
      this.imagePath = imagePath;
  }

}

//we are going to create a image or blue print of the data 