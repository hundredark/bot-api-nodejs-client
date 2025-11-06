export interface AddressResponse {
  type: 'address';
  address_id: string;
  asset_id: string;
  chain_id: string;
  destination: string;
  dust: string;
  label: string;
  tag: string;
  updated_at: string;
}

export interface AddressRequest {
  asset_id: string;
  label: string;
  /** alias public_key */
  destination: string;
  /** alias memo */
  tag?: string;
}

export interface MixAddress {
  version: number;
  uuidMembers: string[];
  xinMembers: string[];
  threshold: number;
}
