export const NAVIGATE =  'NAVIGATE';

function action(type, payload = {}) {
  return {type, ...payload}
}
export const navigate = (location, method)  => {
  return action(NAVIGATE, {location, method})
}
