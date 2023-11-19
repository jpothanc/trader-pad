export type DashGroup = {
  group: string;
  groupIcon: string;
  items: DashItem[];
};
export type DashItem = {
  icon: string;
  title: string;
  description: string;
  routeType: string;
  route: string;
};
