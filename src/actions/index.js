export const NAVIGATE =  'NAVIGATE'

function action(type, payload = {}) {
  return {type, ...payload}
}

export const navigate = pathname => action(NAVIGATE, {pathname})
