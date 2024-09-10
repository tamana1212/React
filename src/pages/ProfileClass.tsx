import React from "react";

interface ProfileClassProps {
  name: string;
}

interface ProfileClassData {
  name: string;
  location: string;
  avatar_url: string;
}

interface ProfileClassState {
  count: number;
  count2: number;
  userData: ProfileClassData;
  username: string;
}

export class ProfileClass extends React.Component<
  ProfileClassProps,
  ProfileClassState
> {
  constructor(props: ProfileClassProps) {
    super(props);
    this.state = {
      count: 0,
      count2: 0,
      userData: {
        name: "dummy",
        location: "dummy",
        avatar_url: "" 
      },
      username: "", 
    };

    this.getName = this.getName.bind(this);
    this.fetchUserData = this.fetchUserData.bind(this);
  }

  getName(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ username: e.target.value });
  }

  async fetchUserData() {
    const { username } = this.state;
    
    if (!username.trim()) {
      alert("Please enter a valid username");
      return;
    }

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error("User not found");
      }
      const jsonData = await response.json();
      this.setState({ userData: jsonData });
    } catch (error) {
      console.error("Error fetching user data:", error);
      alert("User not found");
    }
  }

  render() {
    const { name, location, avatar_url } = this.state.userData;

    return (
      <>
        <input
          type="text"
          placeholder="Enter GitHub username"
          onChange={this.getName}
        />
        <button onClick={this.fetchUserData}>Search User</button>

        <h1>Hello {this.props.name} from class component</h1>
        <p>Count: {this.state.count}</p>
        <p>Count2: {this.state.count2}</p>
        <button
          onClick={() => {
            this.setState((prev) => ({
              count: prev.count + 1,
              count2: prev.count2 + 2,
            }));
          }}
        >
          Increment Counts
        </button>

        <p>Name: {name}</p>
        <p>Location: {location}</p>
        {avatar_url && <img src={avatar_url} alt="Avatar" />}
      </>
    );
  }
}
