export interface SubMenuItem {
  id: number;
  iconName: string;
}
const subMenuItemsSector: SubMenuItem[] = [
  {
    id: 0,
    iconName: 'feather',
  },
  {
    id: 1,
    iconName: 'engine',
  },
  {
    id: 2,
    iconName: 'flash',
  },
  {
    id: 3,
    iconName: 'tire',
  },
  {
    id: 4,
    iconName: 'vector-triangle',
  },
  {
    id: 5,
    iconName: 'abacus',
  },
];

const subMenuItemsParts: SubMenuItem[] = [
  {
    id: 0,
    iconName: 'alpha-a-circle',
  },
  {
    id: 1,
    iconName: 'alpha-b-circle',
  },
  {
    id: 2,
    iconName: 'alpha-c-circle',
  },
  {
    id: 3,
    iconName: 'alpha-d-circle',
  },
  {
    id: 4,
    iconName: 'alpha-e-circle',
  },
  {
    id: 5,
    iconName: 'alpha-f-circle',
  },
];

export {subMenuItemsSector, subMenuItemsParts};
