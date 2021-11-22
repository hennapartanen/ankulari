export class Project {
  public name: string;
  public date: string;
  public imagePath: string;

  constructor(name: string, date: string, imagePath: string) {
    this.name = name;
    this.date = date;
    this.imagePath = imagePath;
  }
}
