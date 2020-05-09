import React from "react";
import API from "../../utils/API";
import "./style.css";

class EmployeeContainer extends React.Component {
  state = {
    employees: [],
    search: "",
    sortDirection: "",
    col: "",
  };

  componentDidMount() {
    API.search()
      .then((res) => {
        const userArray = res.data.results.map((employee) => {
          return {
            first: employee.name.first,
            last: employee.name.last,
            email: employee.email,
            phone: employee.phone,
            image: employee.picture.medium,
          };
        });
        this.setState({ employees: userArray });
      })
      .catch((err) => console.log(err));
  }

  employeeSearch = (e) => {
    this.setState({ search: e.target.value });
  };

  filteredUsers() {
    const search = this.state.search.toLowerCase();
    return this.state.employees.filter((user) => {
      return (
        user.first.toLowerCase().includes(search) ||
        user.last.toLowerCase().includes(search)
      );
    });
  }

  renderEmployees = () => {
    return this.filteredUsers()
      .sort(this.sortEmployees)
      .map((employee, index) => {
        return (
          <tr className= "employeeRow" key={index}>
            <td>
              <img src={employee.image} alt="employee"></img>
            </td>
            <td>{employee.first}</td>
            <td>{employee.last}</td>
            <td>{employee.email}</td>
            <td>{employee.phone}</td>
          </tr>
        );
      });
  };

  employeeSort = (col) => {
    this.state.col === col && this.state.sortDirection === "ascending"
      ? this.setState({ sortDirection: "descending", col: col })
      : this.setState({ sortDirection: "ascending", col: col });
  };

  sortEmployees = (a, b) => {
    if (a[this.state.col] < b[this.state.col]) {
      return this.state.sortDirection === "ascending" ? -1 : 1;
    } else if (a[this.state.col] > b[this.state.col]) {
      return this.state.sortDirection === "ascending" ? 1 : -1;
    }
    return 0;
  };

  render() {
    return (
      <div className="employees">
        <div className="table">
        <input
          onChange={this.employeeSearch}
          type="search"
          className="searchbar"
          placeholder="Search By Name"
        />
        </div>

        <div className="row">
          <div className="col-1">
            <table className="table">
              <thead>
                <tr>
                  <th className="image"  scope="col">Image</th>
                  <th scope="col">
                    <span className="column" 
                      onClick={() => {this.employeeSort("first")}}>
                      First
                    </span>
                  </th>
                  <th scope="col">
                    <span className="column" 
                    onClick={() => this.employeeSort("last")}>
                      Last
                      </span>
                  </th>
                  <th scope="col">
                    <span className="column" 
                     onClick={() => this.employeeSort("email")}>
                      Email
                    </span>
                  </th>
                  <th scope="col">
                    <span className="column" 
                    onClick={() => this.employeeSort("phone")}>
                      Phone
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>{this.renderEmployees()}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default EmployeeContainer;
