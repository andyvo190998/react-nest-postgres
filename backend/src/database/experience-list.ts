// Mock data for experiences

import { IExperience } from './interface/experience.interface';
import { ILocation } from './interface/location.interface';
import { ISlot } from './interface/slot.interface';

//mock experience table
export let experiences: IExperience[] = [
  {
    experience_id: '1',
    name: 'Parachuting',
    description: 'Parachuting is really fun',
    image: 'parachuting',
  },
  {
    experience_id: '2',
    name: 'Flight Simulation',
    description: 'Experience the joy of flying',
    image: 'flight_simulation',
  },
  {
    experience_id: '3',
    name: 'Cooking',
    description: 'Cooking is really fun',
    image: 'cooking',
  },
  {
    experience_id: '4',
    name: 'Alpaca walks',
    description: 'Alpaca walks is really excited',
    image: 'alpaca_walks',
  },
];

//mock location table
export let locations: ILocation[] = [
  {
    id: '1',
    exp_id: '1',
    location_name: 'Munich',
  },
  {
    id: '2',
    exp_id: '1',
    location_name: 'Augsburg',
  },
  {
    id: '3',
    exp_id: '2',
    location_name: 'Cologne',
  },
  {
    id: '4',
    exp_id: '3',
    location_name: 'Berlin',
  },
  {
    id: '5',
    exp_id: '3',
    location_name: 'Hamburg',
  },
  {
    id: '6',
    exp_id: '4',
    location_name: 'Munster',
  },
  {
    id: '7',
    exp_id: '4',
    location_name: 'Stuttgart',
  },
];

// mock slot table
export let slots: ISlot[] = [
  {
    slot_id: '1',
    loc_id: '1',
    available_slot: 5,
    max_slot: 10,
    price: 150,
    start_date: new Date('2024-09-24T09:00:00'),
    end_date: new Date('2024-09-24T10:00:00'),
  },
  {
    slot_id: '123',
    loc_id: '2',
    available_slot: 7,
    max_slot: 12,
    price: 170,
    start_date: new Date('2024-09-25T09:00:00'),
    end_date: new Date('2024-09-25T09:30:00'),
  },
  {
    slot_id: '3',
    loc_id: '2',
    available_slot: 4,
    max_slot: 15,
    price: 130,
    start_date: new Date('2024-09-23T09:00:00'),
    end_date: new Date('2024-09-23T10:00:00'),
  },
  {
    slot_id: '4',
    loc_id: '3',
    available_slot: 12,
    max_slot: 32,
    price: 200,
    start_date: new Date('2024-10-10T08:30:00'),
    end_date: new Date('2024-10-10T09:00:00'),
  },
  {
    slot_id: '5',
    loc_id: '4',
    available_slot: 13,
    max_slot: 23,
    price: 150,
    start_date: new Date('2024-09-23T10:00:00'),
    end_date: new Date('2024-09-23T11:00:00'),
  },
  {
    slot_id: '6',
    loc_id: '5',
    available_slot: 4,
    max_slot: 12,
    price: 200,
    start_date: new Date('2024-10-10T10:00:00'),
    end_date: new Date('2024-10-10T10:45:00'),
  },
  {
    slot_id: '7',
    loc_id: '6',
    available_slot: 4,
    max_slot: 12,
    price: 200,
    start_date: new Date('2024-11-10T10:00:00'),
    end_date: new Date('2024-11-10T11:00:00'),
  },
  {
    slot_id: '8',
    loc_id: '7',
    available_slot: 4,
    max_slot: 12,
    price: 200,
    start_date: new Date('2024-12-10T10:00:00'),
    end_date: new Date('2024-12-10T11:00:00'),
  },
];
