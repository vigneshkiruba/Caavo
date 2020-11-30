import React, { Component } from "react";
import "./createGroup.css";
class createGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      UsersOfCaavo: [],
      toggleState: false,
      name: "",
      description: "",
      group: false,
      sortFlag:false,
    };

    this.loadUser = this.loadUser.bind(this);
    this.displayUser = this.displayUser.bind(this);
    this.checkUser = this.checkUser.bind(this);
    this.updateProcess = this.updateProcess.bind(this);
    this.updateText = this.updateText.bind(this);
    this.sortUser = this.sortUser.bind(this);
    this.loadFile = this.loadFile.bind(this);
  }

  componentDidMount() {
    this.loadUser();
  }
  gameProcess() {
    console.log("Name");
  }

  loadUser=(flag) =>{

    const UsersOfCaavo = [];
    {
      this.props.AllUsers.forEach((i) => {
        let item = {};
        item.id = i.id;
        item.name = i.name;
        item.Image = i.Image;
        item.checked = false;
        UsersOfCaavo.push(item);
      });
    }
    var image = document.getElementById('output');
if(flag == 1)
{
      image.src = "";
      image.alt = "";
      }
    this.setState({ name: "", description: "", UsersOfCaavo: UsersOfCaavo });
  }

  checkUser = (id) => {
    let UsersOfCaavo = [...this.state.UsersOfCaavo];
    console.log(UsersOfCaavo);
    let temp = 0;
    {
      this.state.UsersOfCaavo.forEach((i) => {
        if (i.id === id) {
          if (i.checked) {
            i.checked = false;
          } else {
            i.checked = true;
          }
        }
      });
    }

    this.setState({ UsersOfCaavo: UsersOfCaavo });

    console.log(id);
  };
sortUser(){

if(this.state.sortFlag)
{
const UsersOfCaavo = [].concat(this.state.UsersOfCaavo)
    .sort((a, b) => a.name > b.name ? 1 : -1);
    this.setState({sortFlag:false , UsersOfCaavo: UsersOfCaavo });
 }
 else
 {
    const UsersOfCaavo = [].concat(this.state.UsersOfCaavo)
        .sort((a, b) => a.name > b.name ? -1 : 1);
        this.setState({sortFlag:true , UsersOfCaavo: UsersOfCaavo });
}

}

loadFile = (event) =>{
	var image = document.getElementById('output');
	image.src = URL.createObjectURL(event.target.files[0]);
};
  displayUser() {}
  updateProcess() {
    this.setState({ group: true });
  }
  updateText = (key, value) => {
    this.setState({ [key]: value });
  };
  render() {
    return (
      <div>
        {!this.state.group ? (
          <div>
            <h1> Create Group</h1>
            <div className="container">
    <div className="icon-fields">
            <p><input type="file"  accept="image/*" name="image" id="file"  onChange={(e)=>this.loadFile(e)} style={{ display: "none" }}></input></p>
            <p><label for="file"  style={{ cursor: "pointer" }}>Upload Image</label></p>
            <p><img  id="output" width="200" /></p>
    </div>
            <br></br><br></br>
            <div className="input-fields">
            <div>
            <p>Name{" "}</p>
                                    <input
                                      type="textbox"
                                      value={this.state.name}
                                      name="name"
                                      onChange={(e) => this.updateText("name", e.target.value)}
                                      id="name"
                                    ></input>
                                    </div>
            <div>
            <p>Description{" "}</p>
                                    <input
                                      type="textbox"
                                      value={this.state.description}
                                      name="description"
                                      onChange={(e) => this.updateText("description", e.target.value)}
                                      id="description"
                                    ></input></div>
                                </div>
                                 </div>



            <br></br>
            <br></br>
            <button type="button"   onClick={this.sortUser} name="Sort">Sort</button>
            <br></br>
            {this.displayUser}
            <div className="parentItem">
              {this.state.UsersOfCaavo.map((item) => {
                return (
                  <div
                    key={item.id}
                    className={item.checked ? "item-selected" : "item"}
                    onClick={() => this.checkUser(item.id)}
                  >
                    <img className = "icon" src={item.Image} />
                    <span className="caption">{item.name}</span>
                  </div>
                );
              })}
            </div>
            <br></br>
            <br></br>
            <br></br>
            <button type="button" onClick={this.updateProcess} name="Update">
              Update{" "}
            </button>
            <button type="button" onClick={()=>this.loadUser(1)} name="Remove">
              Remove
            </button>{" "}
          </div>
        ) : (
          <div>
            <h2 style={{ textAlign: "center" }}>
              {" "}
              Group Created Successfully{" "}
            </h2>
          </div>
        )}
      </div>
    );
  }
}

export default createGroup;
