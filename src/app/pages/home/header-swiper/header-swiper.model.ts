export class HeaderBanner {
  backgroundImageUrl: string;
  title: string;
  subtitle: string;
  desc: string;
  link: string;

  constructor(
    backgroundImageUrl: string,
    title: string,
    subtitle: string,
    desc: string,
    link: string
  ) {
    this.backgroundImageUrl = backgroundImageUrl;
    this.title = title;
    this.subtitle = subtitle;
    this.desc = desc;
    this.link = link;
  }
}
