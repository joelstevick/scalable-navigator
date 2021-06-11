import { Vertice } from './vertice.interface';

export const tree: Vertice = {
  label: 'NFL',
  color: 'green',
  children: [
    {
      label: 'AFC',
      color: 'blue',
      children: [
        {
          label: 'East'
        }
      ]
    },
    {
      label: 'NFC',
      color: 'orange',
      children: [
        {
          label: 'East'
        }
      ]
    }
  ]
};
