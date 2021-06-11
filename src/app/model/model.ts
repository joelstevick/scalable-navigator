import { Vertice } from './vertice.interface';

export const tree: Vertice = {
  label: 'Walt Disney $550',
  color: '#7d5a50',
  children: [
    {
      label: 'Movies $250',
      color: '#e5b299',
      children: [
        {
          label: 'Snow White $50',
          color: '#fcdec0'
        },
        {
          label: 'Bambi $200',
          color: '#fcdec0'
        }
      ]
    },
    {
      label: 'Theme Parks $300',
      color: '#e5b299',
      children: [
        {
          label: 'DisneyWorld $200',
          children: [
            {
              label: 'Rides $150',
              color: '#fcdec0'
            },
            {
              label: 'Concessions $50',
              color: '#fcdec0'
            }
          ]
        },
        {
          label: 'DisneyLand $100',
          children: [
            {
              label: 'Rides $75',
              color: '#fcdec0'
            },
            {
              label: 'Concessions $25',
              color: '#fcdec0'
            }
          ]
        }
      ]
    }
  ]
};
