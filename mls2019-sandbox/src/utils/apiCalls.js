export const getTeams = async () => {
  const res = await fetch('https://mls2019-api.herokuapp.com/api/v1/teams')
  const data = await res.json();
  return data
}

export const getPlayers = async () => {
  const res = await fetch('https://mls2019-api.herokuapp.com/api/v1/players')
  const data = await res.json();
  return data
}

export const getPlayer = async (id) => {
  const res = await fetch(`https://mls2019-api.herokuapp.com/api/v1/players/${id}`)
  const data = await res.json();
  return data
}

export const getTeam = async (id) => {
  const res = await fetch(`https://mls2019-api.herokuapp.com/api/v1/teams/${id}`)
  const data = await res.json();
  return data
}

export const getRoster = async (id) => {
  const res = await fetch(`https://mls2019-api.herokuapp.com/api/v1/teams/${id}/roster`)
  const data = await res.json();
  return data
}

export const createTeam = async (team) => {
  const options = {
    method: 'POST',
    body: JSON.stringify(team),
    headers: {
      'Content-Type': 'application/json',
    }
  };
  const res = await fetch('https://mls2019-api.herokuapp.com/api/v1/teams/',options)
  const data = await res.json();
  return data
}

export const createPlayer = async (player) => {
  const options = {
    method: 'POST',
    body: JSON.stringify(player),
    headers: {
      'Content-Type': 'application/json',
    }
  };
  const res = await fetch('https://mls2019-api.herokuapp.com/api/v1/players/',options)
  const data = await res.json();
  return data
}

export const deletePlayer = async (id) => {
  const options = {
    method: 'DELETE',
    body: JSON.stringify(id),
    headers: {
      'Content-Type': 'application/json',
    }
  }
  const res = await fetch(`https://mls2019-api.herokuapp.com/api/v1/players/${id}`, options)
  const data = res.json()
  return data;
}