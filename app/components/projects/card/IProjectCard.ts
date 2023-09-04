export interface IProjectCard {
  readonly description: string;
  readonly image: {
    alt: string;
    src: string;
  };
  readonly skills: string[];
  readonly title: string;
}
