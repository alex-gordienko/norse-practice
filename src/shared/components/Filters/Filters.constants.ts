export interface IFilterDataItem {
  label: string;
  name: string;
  defaultValue: string;
  values: string[];
}

export const FiltersData: IFilterDataItem[] = [
  {
    defaultValue: 'All offices',
    label: 'Office',
    name: 'office',
    values: ['All offices', '401', '402', '403']
  },
  {
    defaultValue: 'All projects',
    label: 'Project',
    name: 'project',
    values: ['All projects', 'Project1', 'Project2', 'Project3']
  },
  {
    defaultValue: 'Any',
    label: 'Position',
    name: 'position',
    values: ['Any', 'Position1', 'Position2', 'Position3']
  },
  {
    defaultValue: 'Any Month',
    label: 'Birthday',
    name: 'birthdayMonth',
    values: ['Any Month', 'December', 'January', 'February']
  },
  {
    defaultValue: 'Any Month',
    label: 'Hire month',
    name: 'hireMonth',
    values: ['Any Month', 'December', 'January', 'February']
  }
];
