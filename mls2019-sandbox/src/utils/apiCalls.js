export const getTeams = async () => {
  let res = await fetch('http://localhost:3001/api/v1/teams')
  if (!res.ok) {
    throw Error('Woops! Something went wrong');
  }
  let data = await res.json();
  return data
}

export const getPlayers = async () => {
  let res = await fetch('http://localhost:3001/api/v1/players')
  if (!res.ok) {
    throw Error('Woops! Something went wrong');
  }
  let data = await res.json();
  return data
}

export const getPlayer = async (id) => {
  let res = await fetch(`http://localhost:3001/api/v1/players/${id}`)
  if (!res.ok) {
    throw Error('Woops! Something went wrong');
  }
  let data = await res.json();
  return data
}

export const getTeam = async (id) => {
  let res = await fetch(`http://localhost:3001/api/v1/teams/${id}`)
  if (!res.ok) {
    throw Error('Woops! Something went wrong');
  }
  let data = await res.json();
  return data
}

export const getRoster = async (id) => {
  let res = await fetch(`http://localhost:3001/api/v1/teams/${id}/roster`)
  if (!res.ok) {
    throw Error('Woops! Something went wrong');
  }
  let data = await res.json();
  return data
}