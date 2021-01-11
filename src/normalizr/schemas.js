import { schema } from 'normalizr';

// Define movie schema
export const movie = new schema.Entity('movies');

// Define actor shema
export const actor = new schema.Entity('actor', { known_for: [movie] });
