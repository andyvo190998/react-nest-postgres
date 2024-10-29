export interface ISlot {
  slot_id: string;
  loc_id: string;
  available_slot: number;
  max_slot: number;
  price: number;
  start_date: Date;
  end_date: Date;
}
