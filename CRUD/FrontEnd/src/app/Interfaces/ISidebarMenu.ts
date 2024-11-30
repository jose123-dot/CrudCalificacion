export interface ISidebarMenu {
  name: string;
  icon: string;
  path?: string;
  children?: IChildren[];
}

interface IChildren {
  name?: string;
  path?: string;
  icon?: string;
}
