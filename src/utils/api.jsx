
export async function startGame() {
    const response = await fetch(`http://localhost:5000/start`, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({name: Math.random.toString()}), // body data type must match "Content-Type" header
      });
    const jsonData = await response.json();
    return jsonData
  }

export async function get(endpoint) {
    const response = await fetch(`http://localhost:5000${endpoint}`, {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data), // body data type must match "Content-Type" header
      });;
    const jsonData = await response.json();
      return jsonData
  }

  export async function post(endpoint, data) {
    const response = await fetch(`http://localhost:5000${endpoint}`, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data), // body data type must match "Content-Type" header
      });
    const jsonData = await response.json();
    return jsonData
  }