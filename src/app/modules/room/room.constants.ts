export const roomFilterableFields: string[] = [
  'searchTerm',
  'id',
  'buildingId',
];

export const roomSearchableFields: string[] = ['roomNumber', 'floor'];

export const roomRelationalFields: string[] = ['buildingId'];

export const rooomRelationalFieldsMapper: { [key: string]: string } = {
  buildingId: 'building',
};
